import React from "react";
import { TextInput, StyleSheet } from "react-native";

const TextInputField = ({ placeholder, onChangeText, value }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 15,
    marginBottom: 20,
  },
});

export default TextInputField;
