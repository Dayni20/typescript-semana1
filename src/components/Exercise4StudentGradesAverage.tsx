import React, { useEffect } from "react";
import { View, Text } from "react-native";

// Interface for students array
interface Student {
  nombre: string;
  edad: number;
  calificacion: number;
}

export const Exercise4StudentGradesAverage = () => {
  const students: Student[] = [
    { nombre: "Carlos", edad: 20, calificacion: 9 },
    { nombre: "María", edad: 19, calificacion: 7 },
    { nombre: "Luis", edad: 21, calificacion: 8 },
    { nombre: "Ana", edad: 18, calificacion: 10 },
    { nombre: "Pedro", edad: 22, calificacion: 6 }
  ];

  // Function to calculate average of grades
  const calculateAverage = (students: Student[]): number => {
    const sum = students.reduce((accumulator, student) => {
      return accumulator + student.calificacion;
    }, 0);
    return parseFloat((sum / students.length).toFixed(2));
  };

  const average = calculateAverage(students);
  const status = average >= 7 ? "APROBÓ" : "NECESITA REFUERZO";

  useEffect(() => {
    console.log('\n--- EJERCICIO 4 ---');
    console.log('Estudiantes:');
    students.forEach((student) => {
      console.log(`  - ${student.nombre}: ${student.calificacion}`);
    });
    console.log(`\nPromedio del grupo: ${average}`);
    console.log(`El grupo ${status}\n`);
  }, []);

  return (
    <View style={{ marginTop: 80, alignItems: "center", paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 15 }}>
        Ejercicio 4: Promedio de Calificaciones
      </Text>
      {students.map((student, index) => (
        <Text key={index} style={{ fontSize: 12, marginBottom: 3 }}>
          {student.nombre}: {student.calificacion}
        </Text>
      ))}
      <Text style={{ fontSize: 13, marginTop: 10, fontWeight: "bold" }}>
        Promedio: {average}
      </Text>
      <Text style={{ fontSize: 13, color: average >= 7 ? "green" : "red" }}>
        El grupo {status}
      </Text>
    </View>
  );
};
