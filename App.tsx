import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Exercise1DiscountCalculation } from "./src/components/Exercise1DiscountCalculation";
import { Exercise2SumAverageGrades } from "./src/components/Exercise2SumAverageGrades";
import { Exercise3PriceTransformationMap } from "./src/components/Exercise3PriceTransformationMap";
import { Exercise4StudentGradesAverage } from "./src/components/Exercise4StudentGradesAverage";
import { Exercise5ProductsPriceFilter } from "./src/components/Exercise5ProductsPriceFilter";
import { Exercise6ProductSearchArray } from "./src/components/Exercise6ProductSearchArray";
import { Exercise7ObjectTypingInterfaces } from "./src/components/Exercise7ObjectTypingInterfaces";
import { Exercise8OptionalParametersProduct } from "./src/components/Exercise8OptionalParametersProduct";
import { Exercise9CounterArrayStatistics } from "./src/components/Exercise9CounterArrayStatistics";
import { Exercise10ProductsPriceSorting } from "./src/components/Exercise10ProductsPriceSorting";

const App = () => {
  return (
    <ScrollView>
       <Exercise1DiscountCalculation />
      <Exercise2SumAverageGrades />
      <Exercise3PriceTransformationMap />
      <Exercise4StudentGradesAverage />
      <Exercise5ProductsPriceFilter />
      <Exercise6ProductSearchArray />
      <Exercise7ObjectTypingInterfaces />
      <Exercise8OptionalParametersProduct />
      <Exercise9CounterArrayStatistics />
      <Exercise10ProductsPriceSorting />
    </ScrollView>
  );
};

export default App;
