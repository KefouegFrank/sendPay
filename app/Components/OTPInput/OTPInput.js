import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const OTPInput = ({ otp, onChangeText }) => {
  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.otpInput}
          value={digit}
          onChangeText={(text) => onChangeText(text, index)}
          keyboardType="numeric"
          maxLength={1}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  otpInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    fontSize: 24,
    marginHorizontal: 5,
    textAlign: "center",
    color: "white",
  },
});

export default OTPInput;
