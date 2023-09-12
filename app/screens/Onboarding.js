import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  // Footer,
} from "react-native";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#282534", white: "#fff" };

const slides = [
  {
    id: "1",
    image: require("../../assets/images/12470247_Wavy_Tech-03_Single-05.jpg"),
    title: "Best Digital Solution",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", // Corrected typo in "Lorem ipsum..."
  },
  {
    id: "2",
    image: require("../../assets/images/12470247_Wavy_Tech-03_Single-05.jpg"),
    title: "Best Digital Solution",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", // Corrected typo in "Lorem ipsum..."
  },
  {
    id: "3",
    image: require("../../assets/images/6270.jpg"),
    title: "Best Digital Solution",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", // Corrected typo in "Lorem ipsum..."
  },
  {
    id: "4",
    image: require("../../assets/images/6270.jpg"),
    title: "Best Digital Solution",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", // Corrected typo in "Lorem ipsum..."
  },
];
const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={item.image}
        style={{ height: 200, width, resizeMode: "contain" }} // Fix the height value here
      />
      <Text style={styles.title}>{item.title} </Text>
      <Text style={styles.subtitle}>{item.subtitle} </Text>
    </View>
  );
};

const Onboarding = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  // Handle the "NEXT" button press
  const handleNext = () => {
    if (currentSlideIndex === slides.length - 1) {
      // If on the last slide, navigate to the GET STARTED screen
      navigation.navigate("Login"); // Replace "GetStarted" with the appropriate screen name
    } else {
      // If not on the last slide, increment the slide index to go to the next slide
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  // Handle the "SKIP" button press
  const handleSkip = () => {
    // Navigate to the last slide (GET STARTED) regardless of the current slide
    setCurrentSlideIndex(slides.length - 1);
  };

  const onScroll = (event) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const slideIndex = Math.round(xOffset / width);
    setCurrentSlideIndex(slideIndex);
  };

  const Footer = () => {
    const isLastSlide = currentSlideIndex === slides.length - 1;

    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        <View style={{ marginBottom: 20 }}>
          {isLastSlide ? (
            // Show the GET STARTED button on the last slide
            <View style={{ height: 50 }}>
              <TouchableOpacity
                style={[styles.btn]}
                onPress={() => navigation.replace("Login")}
              >
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: "transparent",
                    borderColor: COLORS.white,
                    borderWidth: 1,
                  },
                ]}
                onPress={handleSkip}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: COLORS.white,
                  }}
                >
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{ width: 50 }} />
              <TouchableOpacity style={[styles.btn]} onPress={handleNext}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>NEXT</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FlatList
        pagingEnabled
        data={slides}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
        onScroll={onScroll} // Add this onScroll event handler
        scrollEventThrottle={16} // Adjust this value as needed
        initialScrollIndex={currentSlideIndex} // Set the initial scroll index/ Adjust this value as needed
      />
      <Footer />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: 300,
    lineHeight: 23,
    textAlign: "center",
  },
  indicator: {
    height: 2.5,
    width: 10,
    padding: 2,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 50,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
