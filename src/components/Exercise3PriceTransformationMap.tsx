import React, { useEffect } from "react";
import { View, Text } from "react-native";

export const Exercise3PriceTransformationMap = () => {
  const prices = [10, 25, 40, 15, 60, 30, 5, 80, 20, 50];
  const exchangeRate = 0.93;

  // Function that converts prices using map
  const convertPrices = (prices: number[], exchangeRate: number): number[] => {
    return prices.map((price) => parseFloat((price * exchangeRate).toFixed(2)));
  };

  const convertedPrices = convertPrices(prices, exchangeRate);

  useEffect(() => {
    console.log('\n--- EJERCICIO 3 ---');
    console.log(`Precios originales (USD): [${prices.join(', ')}]`);
    console.log(`Tasa de cambio: ${exchangeRate}`);
    console.log(`Precios convertidos: [${convertedPrices.join(', ')}]\n`);
  }, []);

  return (
    <View style={{ marginTop: 80, alignItems: "center", paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 15 }}>
        Ejercicio 3: Transformación de Precios
      </Text>
      <Text style={{ fontSize: 13, marginBottom: 5 }}>
        Precios originales (USD): [{prices.join(', ')}]
      </Text>
      <Text style={{ fontSize: 13, marginBottom: 5 }}>
        Tasa de cambio: {exchangeRate}
      </Text>
      <Text style={{ fontSize: 13, fontWeight: "bold" }}>
        Precios convertidos: [{convertedPrices.join(', ')}]
      </Text>
    </View>
  );
};
