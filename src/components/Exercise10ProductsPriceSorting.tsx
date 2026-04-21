import React, { useEffect } from "react";
import { View, Text } from "react-native";

// Interface for products
interface Product {
  nombre: string;
  precio: number;
}

export const Exercise10ProductsPriceSorting = () => {
  const products: Product[] = [
    { nombre: "Audífonos", precio: 45 },
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Monitor", precio: 350 },
    { nombre: "Teclado", precio: 60 },
    { nombre: "Cargador", precio: 15 }
  ];

  // Function to sort products from lowest to highest price
  const sortAscending = (products: Product[]): Product[] => {
    return [...products].sort((a, b) => a.precio - b.precio);
  };

  // Function to sort products from highest to lowest price
  const sortDescending = (products: Product[]): Product[] => {
    return [...products].sort((a, b) => b.precio - a.precio);
  };

  const productsAscending = sortAscending(products);
  const productsDescending = sortDescending(products);

  useEffect(() => {
    console.log('\n--- EJERCICIO 10 ---');
    
    console.log('Orden ASCENDENTE (menor a mayor precio):');
    productsAscending.forEach((product, index) => {
      console.log(`  ${index + 1}. ${product.nombre} - $${product.precio.toFixed(2)}`);
    });
    
    console.log('\nOrden DESCENDENTE (mayor a menor precio):');
    productsDescending.forEach((product, index) => {
      console.log(`  ${index + 1}. ${product.nombre} - $${product.precio.toFixed(2)}`);
    });
    
    console.log('');
  }, []);

  return (
    <View style={{ marginTop: 80, alignItems: "center", paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 15 }}>
        Ejercicio 10: Ordenamiento de Productos
      </Text>
      <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 10 }}>
        Orden Ascendente:
      </Text>
      {productsAscending.map((product, index) => (
        <Text key={index} style={{ fontSize: 12, marginBottom: 2 }}>
          {index + 1}. {product.nombre} - ${product.precio.toFixed(2)}
        </Text>
      ))}
      <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 10 }}>
        Orden Descendente:
      </Text>
      {productsDescending.map((product, index) => (
        <Text key={index} style={{ fontSize: 12, marginBottom: 2 }}>
          {index + 1}. {product.nombre} - ${product.precio.toFixed(2)}
        </Text>
      ))}
    </View>
  );
};
