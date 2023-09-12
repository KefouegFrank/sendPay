import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import AsyncStorage from "@react-native-async-storage/async-storage";

import { Intro } from "./app/screens/Intro";
import Onboarding from "./app/screens/Onboarding";
import PhoneNumberInputScreen from "./app/screens/PhoneNumberInputScreen ";
import OTPVerificationScreen from "./app/screens/OTPVerificationScreen";

const Stack = createStackNavigator();

const App = () => {
  //   const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  //   useEffect(() => {
  //     async function checkAppFirstLaunch() {
  //       try {
  //         const appData = await AsyncStorage.getItem("isAppFirstLaunched");
  //         console.log(appData);
  //         if (appData === null) {
  //           // If the app is launched for the first time, navigate to Intro
  //           setIsAppFirstLaunched(true);
  //           await AsyncStorage.setItem("isAppFirstLaunched", "false");
  //         } else {
  //           // If not the first launch, navigate to Onboarding
  //           setIsAppFirstLaunched(false);
  //         }
  //       } catch (error) {
  //         console.error("Error checking app first launch:", error);
  //       }
  //     }

  //     checkAppFirstLaunch();
  //   }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PhoneNumberInputScreen"
          component={PhoneNumberInputScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTPVerificationScreen"
          component={OTPVerificationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});
export default App;
