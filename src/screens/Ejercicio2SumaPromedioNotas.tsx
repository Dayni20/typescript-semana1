import React, { useEffect } from "react";
import { View, Text } from "react-native";

export const Ejercicio2SumaPromedioNotas = () => {
  const notas = [8, 7, 9, 6, 10, 8, 7, 9, 5, 8];

const sumarNotas = (notas: number[]): number => {
  let suma = 0;
  for (const nota of notas) {
    suma += nota;
  }
  return suma;
};

  const promedioNotas = (notas: number[]): number => {
    const suma = sumarNotas(notas);
    const promedio = suma / notas.length;
    return parseFloat(promedio.toFixed(2));
  };

  useEffect(() => {
    const suma = sumarNotas(notas);
    const promedio = promedioNotas(notas);

    console.log('\n--- EJERCICIO 2 ---'); 
    console.log(`Suma total de notas: ${suma}`);
    console.log(`Promedio de notas: ${promedio}\n`);
  }, []);

  return (
    <View style={{ marginTop: 80, alignItems: "center" }}>
      <Text style={{ fontSize: 13, fontWeight: "bold", marginBottom: 15 }}>
        Ejercicio 2: Suma y Promedio de Notas - Respuesta en Consola
      </Text>
    </View>
  );
};
