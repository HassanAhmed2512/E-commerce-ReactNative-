import { Center, Heading, Image, Text } from "native-base";
import React from "react";
import { Colors } from "../data/data";
import Tabs from './../Components/Profile/Tabs';

function ProfileScreen () {

    return(
        <>
        <Center bg={Colors.main} pt={10} pb={6}>
            <Image 
                source={require("../../assets/IMG_20211202_123941_615.jpg")}
                alt= "profile"
                w={24}
                h={24}
                resizeMode= "cover"/>
            <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
                Admin Doe
            </Heading>
            <Text italic fontSize={10} color={Colors.white}>
                Joined April 4 2023
            </Text>

        </Center>
        {/* TABS */}
        <Tabs/>
        </>
            
    );

}

export default ProfileScreen;