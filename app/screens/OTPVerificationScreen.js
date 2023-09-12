import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
import PrimaryButton from "../Components/PrimaryButton/PrimaryButton";
import styles from "../Styles/OTPStyle";
import OTPInput from "../Components/OTPInput/OTPInput";

const OTPVerificationScreen = ({ route, navigation }) => {
  const { phoneNumber } = route.params;

  // Initialize otp with an array of 6 empty strings
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  // Function to handle OTP input
  const handleOtpInputChange = (text, index) => {
    if (text.length === 1 && index < 5) {
      otp[index] = text;
      otp[index + 1] = "";
      setOtp([...otp]);
    } else if (text.length === 0 && index > 0) {
      otp[index] = "";
      otp[index - 1] = "";
      setOtp([...otp]);
    } else if (text.length === 1 && index === 5) {
      otp[index] = text;
      setOtp([...otp]);
    }
  };

  const handleVerify = () => {
    // Logic to verify OTP
    // You can navigate to the next screen after OTP verification
    navigation.navigate("Login");
  };

  return (
    <BackgroundImage source={require("../assets/images/6270.jpg")}>
      <View style={styles.container}>
        <Text style={styles.appName}>SendPay</Text>
        <Text style={styles.message}>
          Please enter the OTP sent to {phoneNumber}:
        </Text>
        <OTPInput otp={otp} onChangeText={handleOtpInputChange} />
        <PrimaryButton title="Verify" onPress={handleVerify} />
      </View>
    </BackgroundImage>
  );
};

export default OTPVerificationScreen;
