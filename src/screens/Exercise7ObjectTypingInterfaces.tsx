import React, { useEffect } from "react";
import { View, Text } from "react-native";

// Interface Device
interface Device {
  nombre: string;
  marca: string;
  precio: number;
  disponible: boolean;
}

export const Exercise7ObjectTypingInterfaces = () => {
  const devices: Device[] = [
    { nombre: "iPhone 15", marca: "Apple", precio: 1200, disponible: true },
    { nombre: "Galaxy S24", marca: "Samsung", precio: 950, disponible: false },
    { nombre: "Laptop Dell XPS", marca: "Dell", precio: 1500, disponible: true },
    { nombre: "iPad Pro", marca: "Apple", precio: 800, disponible: true },
    { nombre: "Surface Pro", marca: "Microsoft", precio: 1100, disponible: false }
  ];

  useEffect(() => {
    // Filter only available devices
    const availableDevices = devices.filter(
      (device) => device.disponible
    );

    console.log('\n--- EXECISE 7 ---');
    console.log('Dispositivos disponibles:\n');
    
    availableDevices.forEach((device) => {
      console.log(`  • ${device.nombre} - $${device.precio.toFixed(2)}`);
    });
    
    console.log('');
  }, []);

  return (
    <View style={{ marginTop: 80, alignItems: "center" }}>
      <Text style={{ fontSize: 13, fontWeight: "bold", marginBottom: 15 }}>
        Ejercicio 7: Tipado con Interfaces - Respuesta en Consola
      </Text>
    </View>
  );
};
