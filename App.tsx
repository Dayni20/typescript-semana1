import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ejercicio1CalculoDescuento } from './src/screens/Ejercicio1CalculoDescuento';
import { Ejercicio2SumaPromedioNotas } from './src/screens/Ejercicio2SumaPromedioNotas';

const App = () => {
  return (
    <View>
      {/* <Ejercicio1CalculoDescuento/> */}
      <Ejercicio2SumaPromedioNotas/>
    </View>
  );
};

export default App;
