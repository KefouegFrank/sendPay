import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import styles from "../Styles/LoginStyles";

export const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.myText}>Login</Text>
    </View>
  );
};

export default Login;
