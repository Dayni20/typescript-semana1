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

  useEffect(() => {
    console.log('\n--- EJERCICIO 8 ---');
    
    // Test 1: Only name
    console.log(describeProduct("Audífonos"));
    
    // Test 2: Name and price
    console.log(describeProduct("Audífonos", 45.00));
    
    // Test 3: All parameters
    console.log(describeProduct("Audífonos", 45.00, "Electrónico"));
    
    console.log('');
  }, []);

  return (
    <View style={{ marginTop: 80, alignItems: "center" }}>
      <Text style={{ fontSize: 13, fontWeight: "bold", marginBottom: 15 }}>
        Ejercicio 8: Parámetros Opcionales - Respuesta en Consola
      </Text>
    </View>
  );
};
