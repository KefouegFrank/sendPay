import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import splash1 from "../../assets/images/splash1.png";
import { useNavigation } from "@react-navigation/native";
import styles from "../Styles/IntroStyles";

export const Intro = () => {
  const [isWaiting, setIsWaiting] = useState(true);
  const [onboarding, setOnboarding] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setIsWaiting(false);
    }, 5000); // Increase the delay to 5000 milliseconds (5 seconds)

    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      useNativeDriver: false,
    }).start(() => {
      // Animation completed, navigate to the next screen
      navigateToNextScreen();
    });
  }, [fadeAnim]);

  const navigateToNextScreen = () => {
    // You can implement logic here to decide which screen to navigate to
    // For now, I'll navigate to the "Onboarding" screen
    navigation.navigate("Onboarding", {});
  };

  return (
    <ImageBackground source={splash1} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <View>
          <Image source={splash1} style={styles.image}></Image>
        </View>
        <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
          <Text style={[styles.logoText, styles.firstText]}>send</Text>
          <Animated.Text
            style={[styles.logoText, styles.secondText, { opacity: fadeAnim }]}
          >
            Pay
          </Animated.Text>
        </Animated.View>
      </SafeAreaView>
    </ImageBackground>
  );
};
