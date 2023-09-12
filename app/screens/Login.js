import React from "react";
import { View, Text, TextInput } from "react-native";

import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
import PrimaryButton from "../Components/PrimaryButton/PrimaryButton";
import LoginStyles from "../Styles/LoginStyles";

const handleLogin = () => {
  // Logic to verify OTP
  // You can navigate to the next screen after OTP verification
  navigation.navigate("HomeScreen");
};

const Login = () => {
  return (
    <BackgroundImage source={require("../assets/images/6270.jpg")}>
      <View style={LoginStyles.container}>
        <View style={LoginStyles.inputContainer}>
          <Text style={LoginStyles.inputLabel}>Phone Number</Text>
          <TextInput
            style={LoginStyles.input}
            placeholder="Enter your phone number"
          />
        </View>
        <View style={LoginStyles.inputContainer}>
          <Text style={LoginStyles.inputLabel}>Email</Text>
          <TextInput style={LoginStyles.input} placeholder="Enter your email" />
        </View>
        <View style={LoginStyles.inputContainer}>
          <Text style={LoginStyles.inputLabel}>Password</Text>
          <TextInput
            style={LoginStyles.input}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>
        <PrimaryButton title="Login" onPress={handleLogin} />
      </View>
    </BackgroundImage>
  );
};

export default Login;
