import { Box, Center , Image , VStack } from "native-base";
import { React } from "react";
import { Colors } from "../data/data";
import Buttone from "./../Components/Buttone";

function NotVerfityScreen() {
  return (
    <Box flex={1} bg={"#FFB730"} safeAreaTop>
      <Center w={"full"} h={250}>
        <Image
          source={require("../../assets/icon.jpg")}
          alt="logo"
          size={"lg"}
        />
      </Center>
      <VStack space={6} px={5} alignItems={"center"}>
        <Buttone bg={Colors.black} color={Colors.white} childern={"Register"}/>
        <Buttone bg={Colors.white} color={Colors.black} childern={"Login"} />
      </VStack>
    </Box>
  );
}

export default NotVerfityScreen;
