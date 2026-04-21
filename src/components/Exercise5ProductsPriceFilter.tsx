import React, { useEffect } from "react";
import { View, Text } from "react-native";

export const Exercise5ProductsPriceFilter = () => {
  const prices = [5, 120, 35, 200, 18, 75, 9, 140, 55, 300];

  // Function to filter prices below maximum using filter
  const filterByMaxPrice = (prices: number[], maxPrice: number): number[] => {
    return prices.filter((price) => price < maxPrice);
  };

  const maxPrice = 100;
  const filteredProducts = filterByMaxPrice(prices, maxPrice);

  useEffect(() => {
    console.log('\n--- EJERCICIO 5 ---');
    console.log(`Precios originales: [${prices.join(', ')}]`);
    console.log(`Precio máximo: $${maxPrice}`);
    console.log(`Productos dentro del rango: ${filteredProducts.length}`);
    console.log(`Valores: [${filteredProducts.join(', ')}]\n`);
  }, []);

  return (
    <View style={{ marginTop: 80, alignItems: "center", paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 15 }}>
        Ejercicio 5: Filtrado por Precio
      </Text>
      <Text style={{ fontSize: 13, marginBottom: 5 }}>
        Precio máximo: ${maxPrice}
      </Text>
      <Text style={{ fontSize: 13, marginBottom: 5 }}>
        Productos en rango: {filteredProducts.length}
      </Text>
      <Text style={{ fontSize: 13, fontWeight: "bold" }}>
        Valores: [{filteredProducts.join(', ')}]
      </Text>
    </View>
  );
};
