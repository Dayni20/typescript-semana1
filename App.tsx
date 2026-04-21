import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Exercise1DiscountCalculation } from "./src/screens/Exercise1DiscountCalculation";
import { Exercise2SumAverageGrades } from "./src/screens/Exercise2SumAverageGrades";
import { Exercise3PriceTransformationMap } from "./src/screens/Exercise3PriceTransformationMap";
import { Exercise4StudentGradesAverage } from "./src/screens/Exercise4StudentGradesAverage";
import { Exercise5ProductsPriceFilter } from "./src/screens/Exercise5ProductsPriceFilter";
import { Exercise6ProductSearchArray } from "./src/screens/Exercise6ProductSearchArray";
import { Exercise7ObjectTypingInterfaces } from "./src/screens/Exercise7ObjectTypingInterfaces";

const App = () => {
  return (
    <ScrollView>
      {/* <Exercise1DiscountCalculation />
      <Exercise2SumAverageGrades />
      <Exercise3PriceTransformationMap />
      <Exercise4StudentGradesAverage />
      <Exercise5ProductsPriceFilter /> */}
      <Exercise6ProductSearchArray />
      <Exercise7ObjectTypingInterfaces />
    </ScrollView>
  );
};

export default App;
