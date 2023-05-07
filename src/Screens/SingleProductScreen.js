import {
  Box,
  ScrollView,
  Image,
  Heading,
  HStack,
  Spacer,
  Text,
  Button,
} from "native-base";
import { React, useState } from "react";
import NumericInput from "react-native-numeric-input";
import { Colors } from "../data/data";
import { useNavigation } from "@react-navigation/native";
import Rating from "../Components/Rating";
import Review from './../Components/SingleProduct/Review';

function SingleProductScreen({route}) {
  const { value, setValue } = useState(0);
  const navegation = useNavigation();
  const product = route.params;



  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{uri : product.image}}
          alt="Product Image"
          w="full"
          h={300}
          resizeMode="contain"
        />

        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>

        <Rating value={product.rating}  text={`${product.numReviews} reviews`} />


        <HStack space={2} alignItems="center" my={5}>
          {
            product.countInStock > 0 ? (
              <NumericInput
              value={value}
              totalWidth={140}
              totalHeight={22}
              iconSize={25}
              step={1}
              maxValue={product.countInStock}
              minValue={0}
              borderColor={Colors.deepGray}
              rounded
              textColor={Colors.black}
              iconStyle={{ color: Colors.white }}
              rightButtonBackgroundColor={Colors.main}
              leftButtonBackgroundColor={Colors.main}
            />
            ) : (   
            <Heading bold color={Colors.red} italic fontSize={12}>
              Out Of Stock
            </Heading>
            )
          }

          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            {product.price}
          </Heading>
        </HStack>

        <Text lineHeight={24} fontSize={12}>
          {product.descrption}
        </Text>

        <Button bg={Colors.main} color={Colors.white} mt={10}>
          ADD TO CARD
        </Button>
 
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
