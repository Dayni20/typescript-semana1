import React, { useEffect } from "react";
import { View, Text } from "react-native";

export const Exercise3PriceTransformationMap = () => {
  const prices = [10, 25, 40, 15, 60, 30, 5, 80, 20, 50];

  // Function that converts prices using map
  const convertPrices = (prices: number[], exchangeRate: number): number[] => {
    return prices.map((price) => parseFloat((price * exchangeRate).toFixed(2)));
  };

  useEffect(() => {
    const exchangeRate = 0.93;
    const convertedPrices = convertPrices(prices, exchangeRate);

    console.log('\n--- EXERCISE 3 ---');
    console.log(`Precios originales (USD): [${prices.join(', ')}]`);
    console.log(`Tasa de cambio: ${exchangeRate}`);
    console.log(`Precios convertidos: [${convertedPrices.join(', ')}]\n`);
  }, []);

  return (
    <View style={{ marginTop: 80, alignItems: "center" }}>
      <Text style={{ fontSize: 13, fontWeight: "bold", marginBottom: 15 }}>
        Ejercicio 3: Transformación de Precios con Map - Respuesta en Consola
      </Text>
    </View>
  );
};
