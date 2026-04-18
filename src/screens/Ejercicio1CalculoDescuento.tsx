import React, { useEffect } from "react";
import { View, Text } from "react-native";

export const Ejercicio1CalculoDescuento = () => {

  const precioFinal = (precioOriginal: number, descuento: number) => {
    const descuentoCalculado = (precioOriginal * descuento) / 100;
    return precioOriginal - descuentoCalculado;
  };

  useEffect(() => {
    const casos = [
      { precio: 80.0, descuento: 10 },
      { precio: 150.0, descuento: 25 },
      { precio: 45.0, descuento: 5 },
    ];
    
    casos.forEach((item) => {
      console.log(
        `Precio original: $${item.precio.toFixed(2)} — Precio final: $${precioFinal(
          item.precio,
          item.descuento,
        ).toFixed(2)}`,
      );
    });
  }, []);
  
  return (
    <View style={{ marginTop: 80, alignItems: "center" }}>
      <Text style={{ fontSize: 13, fontWeight: "bold",alignItems: "center"}}>
        Cálculo de descuento en una tienda - Respuesta en Consola
      </Text>
    </View>
  );
};