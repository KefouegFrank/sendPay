import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
import TextInputField from "../Components/TextInputField/TextInputField";
import PrimaryButton from "../Components/PrimaryButton/PrimaryButton";

const PhoneNumberInputScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigation(); //get the navigation object

  const handleContinue = () => {
    // Add validation logic for phone number

    // For now, let's assume OTP is sent successfully
    navigation.navigate("OTPVerificationScreen", { phoneNumber });
  };

  return (
    <BackgroundImage source={require("../assets/images/6270.jpg")}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={[styles.logoText, styles.firstText]}>Send</Text>
          <Text style={styles.logoText}>Pay</Text>
        </View>

        <Text style={styles.message}>
          Please enter your phone number for account verification:
        </Text>
        <TextInputField
          placeholder="Phone Number"
          keyboardType="numeric"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
        />
        <PrimaryButton title="Continue" onPress={handleContinue} />
      </View>
    </BackgroundImage>
  );
};

export default PhoneNumberInputScreen;

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Background color with opacity
  },
  message: {
    fontSize: 18,
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffffff",
  },
  firstText: {
    marginRight: 2,
  },
};
