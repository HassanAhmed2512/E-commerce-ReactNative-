import { Box } from 'native-base';
import { React, useEffect, useState } from 'react';
import { Colors } from "../data/data";
import HomeSearch from '../Components/HomePage/HomeSearch';
import HomeProducts from '../Components/HomePage/HomeProducts';
import { getProducts, uploadProducts } from '../../firebase';

function HomeScreen() {
  const[searchText,setSearchText]=useState("")

  const[products,setProducts]=useState([]);
  useEffect(()=>{    
    const ff=async()=>{
      await uploadProducts();
      const res=await getProducts();
      setProducts(res);
    }
    ff();
  },[]);
  return (
    <Box flex={1} bg={Colors.subGreen} >
      <HomeSearch 
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <HomeProducts 
        searchText={searchText}
        setSearchText={setSearchText}
        products={products}
      />
    </Box>
  );
}

export default HomeScreen ;