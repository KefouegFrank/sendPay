// // components/OnboardingFooter.js
// import React from "react";
// import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

// const OnboardingFooter = ({
//   navigation,
//   currentSlideIndex,
//   handleNext,
//   handleSkip,
// }) => {
//   const isLastSlide = currentSlideIndex === slides.length - 1;

//   return (
//     <View style={styles.footerContainer}>
//       <View style={styles.indicatorContainer}>
//         {slides.map((_, index) => (
//           <View
//             key={index}
//             style={[
//               styles.indicator,
//               currentSlideIndex == index && {
//                 backgroundColor: COLORS.white,
//                 width: 25,
//               },
//             ]}
//           />
//         ))}
//       </View>
//       <View style={styles.buttonsContainer}>
//         {isLastSlide ? (
//           <View style={styles.getStartedButton}>
//             <TouchableOpacity
//               style={styles.btn}
//               onPress={() => navigation.replace("Login")}
//             >
//               <Text style={styles.buttonText}>GET STARTED</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <View style={styles.navigationButtons}>
//             <TouchableOpacity
//               style={[styles.btn, styles.skipButton]}
//               onPress={handleSkip}
//             >
//               <Text style={styles.buttonText}>SKIP</Text>
//             </TouchableOpacity>
//             <View style={{ width: 50 }} />
//             <TouchableOpacity style={styles.btn} onPress={handleNext}>
//               <Text style={styles.buttonText}>NEXT</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   footerContainer: {
//     height: height * 0.25,
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//   },
//   indicatorContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 20,
//   },
//   indicator: {
//     height: 2.5,
//     width: 10,
//     padding: 2,
//     backgroundColor: "grey",
//     marginHorizontal: 3,
//     borderRadius: 2,
//   },
//   buttonsContainer: {
//     marginBottom: 20,
//   },
//   getStartedButton: {
//     height: 50,
//   },
//   btn: {
//     flex: 1,
//     height: 50,
//     borderRadius: 50,
//     backgroundColor: COLORS.white,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonText: {
//     fontWeight: "bold",
//     fontSize: 15,
//   },
//   skipButton: {
//     backgroundColor: "transparent",
//     borderColor: COLORS.white,
//     borderWidth: 1,
//   },
//   navigationButtons: {
//     flexDirection: "row",
//   },
// });

// export default OnboardingFooter;
