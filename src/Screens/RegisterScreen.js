import { Box, Button, Heading, Image, Input, Pressable, ScrollView, Text , VStack, View } from 'native-base';
import { React } from 'react';
import { Colors } from '../data/data';
import { useState } from "react";
import Inputs from "../Components/Inputs"
import Buttone from '../Components/Buttone';
import Loader from '../Components/Loader';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useEffect } from "react";

 const RegisterScreen = ({navigation})=> {
  const [inputs, setInputs] = useState({
    Fname: "",
    Lname:"",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
    dateOfBirthFormated: "",
  });
  const [dateOfBirth,setDateOfBirth]=useState(new Date());
  const [errors, setErrors] = useState({});
  const [loading, setLoading] =useState(false);
  const [showPiker, setShowPiker] = useState(false);

  const [isAuth, setisAuth] =useState(false);


  useEffect(() => {
    if (isAuth) {
      navigation.replace("buttom")
    } 
  ;
}, [isAuth])

  const toggleDatepiker = ()=>{
    console.log("Toggle Picker Called");
    setShowPiker(!showPiker)
  }
  const onDateChange =({type},selectDate)=>{
    if(type == "set") {
      console.log(selectDate);
      let date = selectDate.toString().split(' ');
      inputs.dateOfBirthFormated(date ? `${date[0]} ${date[1]} ${date[2]} ${date[3]}` : 'sss');
      setDateOfBirth(selectDate);

      console.log(date);
      // console.log(date);
    }
    toggleDatepiker();
  }
  const validate = () => {
    let isValid = true;
    if (!inputs.Fname) {
      handleError("please enter the First Name. ", "Fname");
      isValid = false;
    }
    if (!inputs.Lname) {
      handleError("please enter the Last Name. ", "Lname");
      isValid = false;
    }
    if (!inputs.number) {
      handleError("please enter the number. ", "number");
      isValid = false;
    }else if (inputs.number.length < 11){
      handleError("minimum number length is 11", "number");
      isValid = false;
    }
    if (!inputs.email) {
      handleError("please enter the email. ", "email");
      isValid = false;
    } else if (inputs.email.match(/\s+@\s+\.\s+/)) {
      handleError("please enter valid email. ", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("please enter the password. ", "password");
      isValid = false;
    } else if (inputs.password.length < 8) {
      handleError("minimum password length is 8", "password");
      isValid = false;
    }
    if (!inputs.confirmPassword) {
      handleError("please enter the password. ", "confirmPassword");
      isValid = false;
    } else if (inputs.confirmPassword != inputs.password) {
      handleError("password does not match ", "confirmPassword");
      isValid = false;
    }
    if (isValid)
      register();
  };

  
  const register = () => {
    console.log(inputs.Fname)
    console.log(inputs.Lname)
    console.log(inputs.password)
    console.log(inputs.confirmPassword)
    console.log(inputs.email)
    console.log(inputs.dateOfBirthFormated)
    console.log(inputs.number)
    setLoading(true);
    setisAuth(true);
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));

  };

  const handleError = (text, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: text }));
  };

  return (
    <Box flex={1} bg={Colors.white}>
    <Image
      flex={1}
      alt="logo"
      resizeMode="cover"
      size="lg"
      w="full"
      source={require("../../assets/cover.jpg")}
    />
    <Loader visible={loading}/>
    <Box
      w="full"
      h="full"
      position="absolute"
      top="0"
      px="6"
      justifyContent="center"
    >
      <ScrollView showsVerticalScrollIndicator={false}>
      <Heading color={Colors.underline}>Register</Heading>
      <VStack space={2} pt={2}>

      <Inputs label="First Name"
            iconName="user-circle"
            placeholder=" Enter Your First Name"
            onChangeText={(text) => handleOnChange(text, "Fname")}
            onFocus={() => handleError(null, "Fname")}
            error={errors.Fname}
          />
        <Inputs label="Last Name"
            iconName="user-circle"
            placeholder=" Enter Your First Name"
            onChangeText={(text) => handleOnChange(text, "Lname")}
            onFocus={() => handleError(null, "Lname")}
            error={errors.Lname}
          />

          <Inputs label="Number"
            iconName="phone-alt"
            placeholder=" Enter Your Number"
            onChangeText={(text) => handleOnChange(text, "number")}
            onFocus={() => handleError(null, "number")}
            error={errors.number}
          />

          <Inputs
            label="Email"
            iconName="user"
            placeholder=" Enter Your Email"
            onChangeText={(text) => handleOnChange(text, "email")}
            onFocus={() => handleError(null, "email")}
            error={errors.email}
          />

         <View>
            {showPiker && ( <DateTimePicker mode="date" display="spinner" value={dateOfBirth} onConfirm={onDateChange} />)}
            <Pressable onPress={toggleDatepiker}>
              <Inputs label="Date Of Birthday" iconName="user" placeholder="Mar 21 2002" value={inputs.dateOfBirthFormated} editable={false} />
            </Pressable>
         </View>

          <Inputs
            label="Password"
            iconName="lock"
            password
            placeholder=" Enter Your Password"
            onChangeText={(text) => handleOnChange(text, "password")}
            onFocus={() => handleError(null, "password")}
            error={errors.password}
          />

          <Inputs
            label="Confirm Password"
            iconName="lock"
            password
            placeholder=" Confirm Your Password"
            onChangeText={(text) => handleOnChange(text, "confirmPassword")}
            onFocus={() => handleError(null, "confirmPassword")}
            error={errors.confirmPassword}
          />

      {/* <Input
        InputLeftElement={<AntDesign name="user" size={24} color={Colors.white} />}
          variant={"underlined"}
          placeholder="Amr Sameeh"
          w={"80%"}
          pl={2}
          color={Colors.white}
          borderBottomColor={Colors.deepestGray}

        />
        <Input
        InputLeftElement={<MaterialIcons name="email" size={20} color={Colors.white} /> }
          variant={"underlined"}
          placeholder="Email@Example.com"
          w={"80%"}
          pl={2}
          color={Colors.white}
          borderBottomColor={Colors.deepestGray}

        />
        <Input
        label="Password"
        InputLeftElement={<Ionicons name="eye" size={24} color={Colors.white}/>}
          variant={"underlined"}
          placeholder= " *********"
          w={"80%"}
          type="password"
          color={Colors.white}
          borderBottomColor={Colors.deepestGray}
        /> 
        <Input
        label=" ConfirmPassword"
        InputLeftElement={<Ionicons name="eye" size={24} color={Colors.white}/>}
          variant={"underlined"}
          placeholder= " *********"
          w={"80%"}
          type="password"
          color={Colors.white}
          borderBottomColor={Colors.deepestGray}
        />  */}
      </VStack>
      </ScrollView>
      <Buttone my={30} w="10%" rounded={50} bg={Colors.white} onPress={validate} childern={"SIGN UP"} mt={5} />
      <Pressable mt={4} onPress={()=>{navigation.navigate('Login');}} >
        <Text color={Colors.blue}>LOG IN</Text>
      </Pressable>
    </Box>
  </Box>
  );
}

export default RegisterScreen ;