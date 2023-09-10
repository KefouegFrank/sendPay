import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { Animated, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import splash1 from "../../assets/images/splash1.png";
import { useNavigation } from "@react-navigation/native";

const MINIMUM_TIME_IN_MS_FOR_INTRO = 200;

export const Intro = () => {
  const [isWaiting, setIsWaiting] = useState(true);
  const [onboarding, setOnboarding] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsWaiting(false);
    }, 1000);

    const random = Math.random();

    // Fake call
    if (random < 0.5) {
      // 50% of the time we fake onboarding successful
      setOnboarding(true);
    } else {
      setOnboarding(false); // 50% of the time we fake onboarding unsuccessful
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (isWaiting) {
      return;
    }
    if (onboarding) {
      navigation.navigate("Main", {});
    } else {
      navigation.navigate("Onboarding", {});
    }
  }, [isWaiting, onboarding, navigation]);

  return (
    <SafeAreaView style={style.container}>
      <Animated.View>
        <ImageBackground source={splash1} style={style.image}></ImageBackground>
      </Animated.View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
});
