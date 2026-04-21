import React, { useEffect } from "react";
import { View, Text } from "react-native";

export const Exercise8OptionalParametersProduct = () => {
  // Function with optional parameters
  const describeProduct = (
    name: string,
    price?: number,
    category?: string
  ): string => {
    let description = `Producto: ${name}`;
    
    if (price !== undefined) {
      description += ` — Precio: $${price.toFixed(2)}`;
    }
    
    if (category !== undefined) {
      description += ` — Categoría: ${category}`;
    }
    
    return description;
  };

  const test1 = describeProduct("Audífonos");
  const test2 = describeProduct("Audífonos", 45.00);
  const test3 = describeProduct("Audífonos", 45.00, "Electrónico");

  useEffect(() => {
    console.log('\n--- EJERCICIO 8 ---');
    console.log(test1);
    console.log(test2);
    console.log(test3);
    console.log('');
  }, []);

  return (
    <View style={{ marginTop: 80, alignItems: "center", paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 15 }}>
        Ejercicio 8: Parámetros Opcionales
      </Text>
      <Text style={{ fontSize: 12, marginBottom: 3 }}>
        {test1}
      </Text>
      <Text style={{ fontSize: 12, marginBottom: 3 }}>
        {test2}
      </Text>
      <Text style={{ fontSize: 12 }}>
        {test3}
      </Text>
    </View>
  );
};
