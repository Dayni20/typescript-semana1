import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Exercise1DiscountCalculation } from "./src/screens/Exercise1DiscountCalculation";
import { Exercise2SumAverageGrades } from "./src/screens/Exercise2SumAverageGrades";
import { Exercise3PriceTransformationMap } from "./src/screens/Exercise3PriceTransformationMap";
import { Exercise4StudentGradesAverage } from "./src/screens/Exercise4StudentGradesAverage";
import { Exercise5ProductsPriceFilter } from "./src/screens/Exercise5ProductsPriceFilter";

const App = () => {
  return (
    <ScrollView>
      {/* <Exercise1DiscountCalculation />
      <Exercise2SumAverageGrades />
      <Exercise3PriceTransformationMap /> */}
      <Exercise4StudentGradesAverage />
      <Exercise5ProductsPriceFilter />
    </ScrollView>
  );
};

export default App;
