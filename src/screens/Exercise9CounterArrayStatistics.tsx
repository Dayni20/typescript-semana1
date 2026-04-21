import React, { useEffect } from "react";
import { View, Text } from "react-native";

export const Exercise9CounterArrayStatistics = () => {
  const ages = [17, 23, 15, 30, 25, 19, 28, 16, 22, 35, 18, 29];

  // Function to count total elements
  const countElements = (array: number[]): number => {
    return array.length;
  };

  // Function to count adults (>= 18)
  const countAdults = (ages: number[]): number => {
    return ages.filter((age) => age >= 18).length;
  };

  // Function to count minors (< 18)
  const countMinors = (ages: number[]): number => {
    return ages.filter((age) => age < 18).length;
  };

  useEffect(() => {
    const totalElements = countElements(ages);
    const adults = countAdults(ages);
    const minors = countMinors(ages);

    console.log('\n--- EJERCICIO 9 ---');
    console.log(`Edades de usuarios: [${ages.join(', ')}]\n`);
    console.log(`Total de usuarios: ${totalElements}`);
    console.log(`Usuarios mayores de edad (18+): ${adults}`);
    console.log(`Usuarios menores de edad (<18): ${minors}\n`);
  }, []);

  return (
    <View style={{ marginTop: 80, alignItems: "center" }}>
      <Text style={{ fontSize: 13, fontWeight: "bold", marginBottom: 15 }}>
        Ejercicio 9: Contador y Estadísticas - Respuesta en Consola
      </Text>
    </View>
  );
};
