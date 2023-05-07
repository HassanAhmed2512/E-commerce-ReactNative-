// import {Image,HStack,Pressable, Box, Center, Text, VStack ,Button } from "native-base"; 
//  import  {SwipeListView} from "react-native-swipe-list-view";
// import React from "react";
// import FontAwesome from "@expo/vector-icons";
// import { products ,Colors} from "../data/data";

// const CartItem = () => {
//     const Swiper = () =>(

        
        
//         <SwipeListView
        
        
        
//         rightOpenValue = {-50}
        
        
        
//         previewRowKey = "0"
        
        
        
//         previewOpenValue= {-40}
        
        
//         previewOpenDelay =  {-3000}
        
//         data = {products.slice(0,2)}
        
//         renderItem={renderIterms}

//         renderHiddenItem = {hiddeniterms}
        
        

        
//         showsVerticalScrollIndicator ={false}/>
//     )
//     const renderIterms = (data) => {

//         <Pressable>
//         <Box ml={6} mb ={3} >
//         <HStack
        
//         alignItems="center"
//         bg={Colors.white}
//         shadow = {1}
//         rounded={10}
//         overflow="hidden"
//         >
// <Center w="25%" bg={Colors.deepGray}>
// <Image Source={{ uri: data.item.image}} alt  = {data.item.name} w= "full" h ={24}   /> 
// {/* reszieMode = 'contain' */}
// </Center> 

// <VStack w="60%" px={2} space={2} > <Text  color = {Colors.black} bold fontSize= {10}> </Text>
// {/* isTruncated */}
// <Text>
// {data.item.name}



// </Text>



// <Text bold color = {Colors.blue}>



// ${data.item.price}



// </Text>



// </VStack>

// <Center>



// <Button



// bg={Colors.main}

// _pressed = {{ bg: Colors.main}}



// _text={{


// color: Colors.white,



// }}

// >

// 5


// </Button>



// </Center>

// </HStack>

//         </Box>
        
//         </Pressable>
// };
//         // Hidden
      
        

//         const hiddeniterms = () => {
//  < Pressable w= {50} roundedTopRight  = {10} roundedBottonRight = {10} h = '88%' ml = "auto" justifyContent='center' bg  ={Colors.main}>       
// <Center alignItems='center' space={2}>




// </Center>


//  </Pressable>
//         };
        
// return(
// <Box mr={6}>
//          <Swiper/>
// </Box>
// )
// };
// export default CartItem;
/**{/* <FontAwesome name="trash" size={24} color = {Colors.white} /> */

 import { Image, HStack, Pressable, Box, Center, Text, VStack, Button ,IconButton,Icon} from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import React from "react";
import FontAwesome from "@expo/vector-icons";
import { products, Colors } from "../data/data";

const CartItem = () => {
  const Swiper = () => (
    <SwipeListView
      rightOpenValue={-50}
      previewRowKey="0"
      previewOpenValue={-40}
      previewOpenDelay={-3000}
      data={products.slice(0, 2)}
      renderItem={renderItems}
      renderHiddenItem={renderHiddenItems}
      showsVerticalScrollIndicator={false}
    />
  );

  const renderItems = (data) => (
    <Pressable>
      <Box ml={6} mb={3}>
        <HStack
          alignItems="center"
          bg={Colors.white}
          shadow={1}
          rounded={10}
          overflow="hidden"
        >
          <Center w="25%" bg={Colors.deepGray}>
            <Image source={{ uri: data.item.image }} alt={data.item.name} w="full" h={24} resizeMode="contain" />
          </Center>

          <VStack w="60%" px={2} space={2}>
            <Text color={Colors.black} bold fontSize={10}>
              {data.item.name}
            </Text>
            <Text bold color={Colors.blue}>
              ${data.item.price}
            </Text>
          </VStack>

          <Center>
            <Button
              bg={Colors.main}
              _pressed={{ bg: Colors.main }}
              _text={{
                color: Colors.white,
              }}
            >
              5
            </Button>
          </Center>
        </HStack>
      </Box>
    </Pressable>
  );

  const renderHiddenItems = () => (
    <Pressable w={50} roundedTopRight={10} roundedBottomRight={10} h="88%" ml="auto" justifyContent="center" bg={Colors.main}>
      <Center alignItems="center" space={2}>
     {/* <IconButton icon={<Icon  name="emoji-happy" />} borderRadius="full" _icon={{
      color: "blue.500",
      size: "md"
    }} _hover={{
      bg: "orange.600:alpha.20"
    }} _pressed={{
      bg: "orange.600:alpha.20",
      _icon: {
        name: "emoji-flirt"
      },
      _ios: {
        _icon: {
          size: "2xl"
        }
      }
    }} _ios={{
      _icon: {
        size: "2xl"
      }
    }} /> */}

{/* <FontAwesome name="trash" size={30} color={Colors.white} /> */}
     </Center>



    </Pressable>
  );

  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
};

export default CartItem;
