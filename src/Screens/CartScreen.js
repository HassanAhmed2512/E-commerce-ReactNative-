import {  Box ,Center ,Text,ScrollView , Button,HStack} from 'native-base';
import CartItem from './CartItems';
import { StatusBar } from 'expo-status-bar';
import Cart from './CartEmpty';
import { React } from 'react';
import { products ,Colors} from "../data/data";
import FontAwesome from "@expo/vector-icons";
import Buttone from "../Components/Buttone" ;


 function CartScreen() {
  return (
<Box flex = {1} safeAreaTop >
<Center w= "full" py={5} bg={Colors.subGreen}>
   <Text  color ={Colors.black} fontSize= {20} bold> CartScreen </Text>
   </Center>
    {/* /*if cart empty*/  }

   {/* <Cart/>  */}
 <ScrollView showsVerticalScrollIndicator ={false}> 
  <CartItem/>  
 

<Center mt={5}>

<HStack

rounded={50}



justifyContent ="space-between" bg={Colors.white}

shadow={2}

W="90%"


pl={5}

h={45}

alignItems="center"
>
<Text pl={5}>Total</Text>

<Button px={10} h={45} rounded={50} bg={Colors.main}
_text={{

  color: Colors.white, fontWeight: "semibold",
  
  }}
  
  _pressed={{
  
  bg: Colors.main,
  
  }}
>


$600

</Button>

</HStack>

</Center> 
 {/* Checkout */}

<Center px={5}>

<Buttone bg={Colors.black} color={Colors.white} mt={100}>
</Buttone>

</Center> 
  
 </ScrollView>  


    </Box>
  );
}

;

export default CartScreen ;
