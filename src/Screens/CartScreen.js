import { Box, Center, Text, ScrollView, Button, HStack } from "native-base";
import CartItem from "../Components/ShoppingCart/CartItems";
import CartEmpty from "../Components/ShoppingCart/CartEmpty";
import { React } from "react";
import { products, Colors } from "../data/data";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function CartScreen() {
  const navegation = useNavigation();

  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      {/* The Header Of The Page */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>

      {/* if cart empty*/}
      {/* <CartEmpty/>  */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItem />
        <Center mt={2}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text pl={5}>Total </Text>

            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
                fontWeight: "semibold",
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              $600
            </Button>
          </HStack>
          <Buttone
            bg={Colors.black}
            color={Colors.white}
            mt={100}
            childern={"CheckOut"}
            onPress={() => navegation.navigate("Shipping")}
          />
        </Center>
      </ScrollView>
    </Box>
  );
}

export default CartScreen;
