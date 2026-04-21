import React, { useEffect } from "react";
import { View, Text } from "react-native";

export const Exercise1DiscountCalculation = () => {
  const finalPrice = (originalPrice: number, discount: number) => {
    const discountCalculated = (originalPrice * discount) / 100;
    return originalPrice - discountCalculated;
  };

  useEffect(() => {
    const cases = [
      { price: 80.0, discount: 10 },
      { price: 150.0, discount: 25 },
      { price: 45.0, discount: 5 },
    ];

    console.log("\n--- EXERCISE 1 ---");
    cases.forEach((item) => {
      console.log(
        `Precio original: $${item.price.toFixed(2)} — Precio final: $${finalPrice(
          item.price,
          item.discount,
        ).toFixed(2)}\n`,
      );
    });
  }, []);

  return (
    <View style={{ marginTop: 80, alignItems: "center" }}>
      <Text style={{ fontSize: 13, fontWeight: "bold", alignItems: "center" }}>
        Ejercicio 1: Cálculo de descuento en una tienda - Respuesta en Consola
      </Text>
    </View>
  );
};
