import { Box, HStack, Pressable, Text, View } from "native-base";
import { React } from "react";
import { Colors } from "../data/data";
import { Input } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

function HomeSearch() {
  return (
    <HStack
      space={3}
      w="full"
      px={6}
      py={4}
      alignItems="center"
      bg={Colors.main}
      safeAreaTop
    >
      <Input
        placeholder="Search Here ... "
        w="85%"
        bg={Colors.white}
        type="Search"
        variant={'filled'}
        h={12}
        borderWidth={0}
        _focus={{ bg: Colors.white }}
      />
      <Pressable>
        <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
        <Box
          px={1}
          rounded={"full"}
          position={"absolute"}
          top={-15}
          left={5}
          bg={Colors.red}
          _text={{ color: Colors.white, fontSize: "11px" }}
        >
         99
        </Box>
      </Pressable>
    </HStack>
  );
}

export default HomeSearch;
