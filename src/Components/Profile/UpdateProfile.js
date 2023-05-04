import { Button, Center,  Modal, VStack, FormControl,Input} from "native-base";
import React, { useState } from "react";
import { Colors } from "../../data/data";
const [bg,color,mt]=[Colors.black,Colors.white,5];
const [size1]=["lg"];
const [maxWidth2]=[350];
const [space3]=[10];
const [color4,fz4,mb4]=[Colors.black,14,8];



const inputs= [
    {
    label: "FIRSTNAME",
    type: "text"
    },
    {
    label: "LASTNAME",
    type: "text"
    },
    {
    label: "BIRTHDAY",
    type: "date"
    },
    {
    label: "PHONE NUMBER",
    type: "number"
    },
    {
    label: "NEW PASSWORD",
    type: "password"
    },
    {
    label: "CONFIRM PASSWORD",
    type: "password"
    },
]

const UpdateProfile=()=>{
    const[showModel,setShowModel]=useState(false);
    // cant use a buttone properly
    return(
        <Center>
            
            <Button
                onPress={()=>setShowModel(true) }
                
                bg={Colors.main}
                color={color}
                mt={mt}
                w={"100%"}
                _pressed={{ bg: Colors.main }}
            >
                EDIT PROFILE
            </Button>
            <Modal
                isOpen={showModel}
                onClose={()=>setShowModel(false) }
                size={size1}
            >
                <Modal.Content 
                    maxWidth={maxWidth2}
                >
                    <Modal.CloseButton/>    
                    <Modal.Header>
                        PROFILE
                    </Modal.Header>
                    <Modal.Body>
                        <VStack
                            // space is not working
                            space={space3}
                            // style={{marginBottom:'10px'}}
                        >
                            {
                        inputs.map((i, index) => (
                            // Form container
                    <FormControl key={index} >
                        <FormControl.Label
                        _text={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            // if you want USERNAME appear with deep black run the code below
                            // color : Colors.black,
                        }}
                        >
                            {i.label}
                        </FormControl.Label>
                        {/* Text input */}
                        
                        <Input
                        borderWidth={0.2}
                        bg={Colors.subGreen}
                        borderColor= {Colors.main}
                        py={4}
                        type={i.type}
                        color={Colors.main}
                        fontSize={15}
                        _focus={{
                        bg:Colors.subGreen,
                        borderColor: Colors.main,
                        borderWidth: 1
                        }}
                        />
                    </FormControl>
                        ))
                    }
                        </VStack>
                    </Modal.Body>
                    <Modal.Footer
                    >
                            
                        <Button
                            flex={1}
                            bg={Colors.main}
                            h={45}
                            _text={{
                                color:Colors.white
                            }}
                            onPress={()=>setShowModel(false) }
                            _pressed={{
                                bg:Colors.main
                            }}
                        >
                            UPDATE PROFILE
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    )
}
export default UpdateProfile;