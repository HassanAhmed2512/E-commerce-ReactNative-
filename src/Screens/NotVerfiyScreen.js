import { Box, Center , Heading, Image , VStack } from "native-base";
import { React } from "react";
import { Colors } from "../data/data";
import Buttone from "./../Components/Buttone";

function NotVerfityScreen({navigation}) {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w={"full"} h={250}>
        <Image
          source={require("../../assets/icon.jpg")}
          alt="logo"
          size={"lg"}
        />
      </Center>
      <VStack space={6} px={5} alignItems={"center"}>
        <Heading> Welcome In Our App </Heading>
        <Buttone bg={Colors.black} color={Colors.white} childern={"Register"} onPress={()=>{navigation.navigate('Register');}} />
        <Buttone bg={Colors.white} color={Colors.black} childern={"Login"} onPress={()=>{navigation.navigate('Login');}} />
      </VStack>
    </Box>
  );
}

export default NotVerfityScreen;
