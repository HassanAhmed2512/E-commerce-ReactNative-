 import { View,Box, Center, Text } from "native-base"; 
  import React from "react";
import FontAwesome from "@expo/vector-icons";
import { products ,Colors} from "../data/data";
import Buttone from "../Components/Buttone" ;


const Cart = () => {
 
 
return(
 <Box flex = {1} px ={6}>
 <Center h="80%"> 
<Center w = {200} h={200} bg={Colors.main} rounded="full">
{/* <FontAwesome name="shopping-basket" size={64} color={Colors.white} /> */}
    </Center> 
<Text color={Colors.main } bold mt={5}>
CART IS EMPTY
</Text>
</Center>
<Buttone  bg={Colors.black} color={Colors.white  }   bold ></Buttone>
<Center> 
<Text color={Colors.blue } px ={6} bold mt={-12}>
start shopping 
</Text>
</Center> 

</Box> 

);
 };

 

 export default Cart;

/**


  return <Box w="100%">
      <FlatList data={icons} renderItem={({
      item
    }) => <VStack py="2" flex={1} space={2} my={3} mx={2} boxSize="76" alignItems="center">
            <Box _text={{
        textAlign: "center"
      }}>
              {item.icon}
            </Box>
            <Text textAlign="center">{item.iconName}</Text>
          </VStack>} keyExtractor={item => item.iconName} numColumns={cols} />
    </Box>;
};
}; 
 */