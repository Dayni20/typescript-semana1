import React, { useEffect } from "react";
import { View, Text } from "react-native";

export const Exercise5ProductsPriceFilter = () => {
  const prices = [5, 120, 35, 200, 18, 75, 9, 140, 55, 300];

  // Function to filter prices below maximum using filter
  const filterByMaxPrice = (prices: number[], maxPrice: number): number[] => {
    return prices.filter((price) => price < maxPrice);
  };

  useEffect(() => {
    const maxPrice = 100;
    const filteredProducts = filterByMaxPrice(prices, maxPrice);

    console.log('\n--- EJERCICIO 5 ---');
    console.log(`Precios originales: [${prices.join(', ')}]`);
    console.log(`Precio máximo: $${maxPrice}`);
    console.log(`Productos dentro del rango: ${filteredProducts.length}`);
    console.log(`Valores: [${filteredProducts.join(', ')}]\n`);
  }, []);

  return (
    <View style={{ marginTop: 80, alignItems: "center" }}>
      <Text style={{ fontSize: 13, fontWeight: "bold", marginBottom: 15 }}>
        Ejercicio 5: Filtrado de Productos por Precio - Respuesta en Consola
      </Text>
    </View>
  );
};
