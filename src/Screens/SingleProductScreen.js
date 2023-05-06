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
import { Rating } from "../Components/Rating";
import { Review } from "../Components/Review";
import NumericInput from "react-native-numeric-input";
import { Colors } from "../data/data";

function SingleProductScreen({productImage, productTitle, productPrice, productDescription}) {
  const { value, setValue } = useState(0);
  const isLocalImage = productImage.includes(".jpg") || productImage.includes(".png");

  const getImageSource = () => {
    if (isLocalImage) {
      return require(productImage);
    } else {
      return { uri: productImage };
    }
  };

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={getImageSource()}
          alt="Product Image"
          w="full"
          h={300}
          resizeMode="contain"
        />

        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {productTitle}
        </Heading>

        <Rating value={4} />

        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            onChange={(e) => setValue(e)}
            totalWidth={140}
            totalHeight={22}
            iconSize={25}
            step={1}
            maxValue={20}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.subGreen}
            leftButtonBackgroundColor={Colors.subGreen}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            {productPrice}
          </Heading>
        </HStack>

        <Text lineHeight={24} fontSize={12}>
          {productDescription}
        </Text>

        <Button bg={Colors.subGreen} color={Colors.white} mt={10}>
          ADD TO CARD
        </Button>

        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
