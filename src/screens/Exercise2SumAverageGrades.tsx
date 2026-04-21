import React, { useEffect } from "react";
import { View, Text } from "react-native";

export const Exercise2SumAverageGrades = () => {
  const grades = [8, 7, 9, 6, 10, 8, 7, 9, 5, 8];

const sumGrades = (grades: number[]): number => {
  let sum = 0;
  for (const grade of grades) {
    sum += grade;
  }
  return sum;
};

  const averageGrades = (grades: number[]): number => {
    const sum = sumGrades(grades);
    const average = sum / grades.length;
    return parseFloat(average.toFixed(2));
  };

  useEffect(() => {
    const sum = sumGrades(grades);
    const average = averageGrades(grades);

    console.log('\n--- EXERCISE 2 ---'); 
    console.log(`Suma total de notas: ${sum}`);
    console.log(`Promedio de notas: ${average}\n`);
  }, []);

  return (
    <View style={{ marginTop: 80, alignItems: "center" }}>
      <Text style={{ fontSize: 13, fontWeight: "bold", marginBottom: 15 }}>
        Ejercicio 2: Suma y Promedio de Notas - Respuesta en Consola
      </Text>
    </View>
  );
};
