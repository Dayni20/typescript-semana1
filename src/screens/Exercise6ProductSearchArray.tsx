import React, { useEffect } from "react";
import { View, Text } from "react-native";

export const Exercise6ProductSearchArray = () => {
  const catalog = ["Audífonos", "Cargador", "Funda", "Teclado", "Mouse", "Monitor"];

  // Function to search for a product in the catalog
  const searchProduct = (catalog: string[], productName: string): string => {
    const exists = catalog.includes(productName);
    
    if (exists) {
      return 'El producto "${productName}" SÍ existe en el arreglo.';
    } else {
      return 'El producto "${productName}" NO existe en el arreglo';
    }
  };

  useEffect(() => {
    console.log('\n--- EXERCISE 6 ---');
    console.log(`Catálogo: [${catalog.join(', ')}]\n`);
    
    // Test with existing product
    console.log(searchProduct(catalog, "Mouse"));
    
    // Test with non-existing product
    console.log(searchProduct(catalog, "Laptop"));
    console.log('');
  }, []);

  return (
    <View style={{ marginTop: 80, alignItems: "center" }}>
      <Text style={{ fontSize: 13, fontWeight: "bold", marginBottom: 15 }}>
        Ejercicio 6: Búsqueda de Producto - Respuesta en Consola
      </Text>
    </View>
  );
};
