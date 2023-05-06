import React from "react";
import { Box, FormControl, Input, ScrollView, VStack ,Button, View} from 'native-base';
import { Colors, calculateAge, inputs, labelToPlaceholder } from "../../data/data";
import UpdateProfile from './UpdateProfile';
import { useState } from "react";
import { useEffect } from "react";
import { auth, db, getUser } from "../../../firebase";
import UploadImage from "./UserPhoto";

// define label and label types

const EDITProfile = () => {
    const[showModal,setShowModal]=useState(false);
    const[userData,setUserData]=useState({});
    const fetchData = async () => {
        // console.log(auth.currentUser.uid);
        const res= await getUser(db,'test-users',auth.currentUser.uid);
        setUserData(res);
        return res;
    };
    useEffect(() => {
        fetchData();
    }, []);
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
                                    {labelToPlaceholder.get(i.label) }
                                </FormControl.Label>
                                {/* Text input */}

                                <Input
                                    name={i.label}
                                    value={!userData[i.label]&&i.label!=="age"?"":(i.label==="age"?calculateAge(userData.birthDate):userData[i.label] ) }
                                    onChangeText={(text)=>{
                                        // console.log(await getUser(db,'test-users',testId) );
                                        // console.log(userData);
                                        setUserData({...userData, [i.label]:text } );
                                    }}
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

                    <UpdateProfile
                        tempUserData={userData}
                        fetchData={fetchData}
                    />
                </VStack>
            </ScrollView>

            
        </Box>
    )
}

export default EDITProfile;