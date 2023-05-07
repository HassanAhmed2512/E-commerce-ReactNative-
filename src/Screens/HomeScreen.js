import { Box } from 'native-base';
import { React } from 'react';
import { Colors } from "../data/data";
import HomeSearch from '../Components/HomePage/HomeSearch';
import HomeProducts from '../Components/HomePage/HomeProducts';

 function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.subGreen} >
      <HomeSearch />
      <HomeProducts />
    </Box>
  );
}

export default HomeScreen ;