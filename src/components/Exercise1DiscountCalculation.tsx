import React, { useEffect } from "react";
import { View, Text } from "react-native";

export const Exercise1DiscountCalculation = () => {
  const finalPrice = (originalPrice: number, discount: number) => {
    const discountCalculated = (originalPrice * discount) / 100;
    return originalPrice - discountCalculated;
  };

  const cases = [
    { price: 80.0, discount: 10 },
    { price: 150.0, discount: 25 },
    { price: 45.0, discount: 5 },
  ];

  useEffect(() => {
    console.log("\n--- EJERCICIO 1 ---");
    cases.forEach((item) => {
      console.log(
        `Precio original: $${item.price.toFixed(2)} — Precio final: $${finalPrice(
          item.price,
          item.discount,
        ).toFixed(2)}`,
      );
    });
    console.log("");
  }, []);

  return (
    <View style={{ marginTop: 80, alignItems: "center", paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 15 }}>
        Ejercicio 1: Cálculo de Descuento
      </Text>
      
      {cases.map((item, index) => (
        <View key={index} style={{ marginBottom: 10, alignItems: "center" }}>
          <Text style={{ fontSize: 13 }}>
            Precio original: ${item.price.toFixed(2)} — Precio final: ${finalPrice(item.price, item.discount).toFixed(2)}
          </Text>
        </View>
      ))}
    </View>
  );
};
