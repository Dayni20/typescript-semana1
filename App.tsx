import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Exercise1DiscountCalculation } from "./src/screens/Exercise1DiscountCalculation";
import { Exercise2SumAverageGrades } from "./src/screens/Exercise2SumAverageGrades";
import { Exercise3PriceTransformationMap } from "./src/screens/Exercise3PriceTransformationMap";

const App = () => {
  return (
    <View>
      {/* <Exercise1DiscountCalculation />
      <Exercise2SumAverageGrades /> */}
      <Exercise3PriceTransformationMap />
    </View>
  );
};

export default App;
