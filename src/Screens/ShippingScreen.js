import { Box, Center, FormControl, Input, ScrollView, Select, Text, VStack } from "native-base";
import React from "react";
import { Colors ,orderInput} from "../data/data";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";




function ShippingScreen() {
  const navegation = useNavigation();

  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header of The Page */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          ORDER INFO
        </Text>
      </Center>
      {/* Inputs */}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {orderInput.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  {i.label}
                </FormControl.Label>
                {i.type === "select" ? (
                  <Select
                    variant="filled"
                    borderWidth={0.2}
                    borderColor={Colors.main}
                    bg={Colors.subGreen}
                    py={4}
                    color={Colors.main}
                    _focus={{
                      bg: Colors.subGreen,
                      borderWidth: 1,
                      borderColor: Colors.main,
                    }}
                  >
                    <Select.Item label="Cash" value="cash" />
                    <Select.Item label="Vodafone Cash" value="vodafone" />
                  </Select>
                ) : (
                  <Input
                    borderWidth={0.2}
                    borderColor={Colors.main}
                    bg={Colors.subGreen}
                    py={4}
                    type={i.type}
                    color={Colors.main}
                    _focus={{
                      bg: Colors.subGreen,
                      borderWidth: 1,
                      borderColor: Colors.main,
                    }}
                  />
                )}
              </FormControl>
            ))}
            <Buttone bg={Colors.main} color={Colors.white} childern={"Next"} onPress={() => navegation.navigate("PlaceOrderScreen")} />
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default ShippingScreen;
