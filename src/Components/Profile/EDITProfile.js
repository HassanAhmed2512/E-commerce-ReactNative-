import React from "react";
import { Box, FormControl, Input, ScrollView, VStack ,Button} from 'native-base';
import { Colors } from "../../data/data";
import UpdateProfile from './UpdateProfile';

// define label and label types
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
    label: "EMAIL",
    type: "text"
    },
    {
    label: "PASSWORD",
    type: "text"
    },
    
]

const EDITProfile = () => {
    return(
        <Box h='full' bg={Colors.white} px={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space={10} mt={5} pb={10}>
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
                        value="HAssan"
                        isDisabled
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
                    {/* <Button bg={Colors.main} color= {Colors.white}>
                        EDIT PROFILE
                    </Button> */}
                    <UpdateProfile/>
                </VStack>
            </ScrollView>

            
        </Box>
    )
}

export default EDITProfile