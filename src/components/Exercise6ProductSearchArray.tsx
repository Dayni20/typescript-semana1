import React, { useEffect } from "react";
import { View, Text } from "react-native";

export const Exercise6ProductSearchArray = () => {
  const catalog = ["Audífonos", "Cargador", "Funda", "Teclado", "Mouse", "Monitor"];

  // Function to search for a product in the catalog
  const searchProduct = (catalog: string[], productName: string): string => {
    const exists = catalog.includes(productName);
    
    if (exists) {
      return `El producto "${productName}" SÍ existe en el arreglo.`;
    } else {
      return `El producto "${productName}" NO existe en el arreglo.`;
    }
  };

  const testProduct1 = "Mouse";
  const testProduct2 = "Laptop";

  useEffect(() => {
    console.log('\n--- EJERCICIO 6 ---');
    console.log(`Catálogo: [${catalog.join(', ')}]\n`);
    console.log(searchProduct(catalog, testProduct1));
    console.log(searchProduct(catalog, testProduct2));
    console.log('');
  }, []);

  return (
    <View style={{ marginTop: 80, alignItems: "center", paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 15 }}>
        Ejercicio 6: Búsqueda de Producto
      </Text>
      <Text style={{ fontSize: 13, marginBottom: 5 }}>
        Catálogo: [{catalog.join(', ')}]
      </Text>
      <Text style={{ fontSize: 12, marginTop: 10 }}>
        {searchProduct(catalog, testProduct1)}
      </Text>
      <Text style={{ fontSize: 12 }}>
        {searchProduct(catalog, testProduct2)}
      </Text>
    </View>
  );
};
