import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';
import TopImage from './src/screens/cart/TopImage';
import Details from './src/screens/cart/Details';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Mocks from './src/mocks/cart';

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular, 
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <View />
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopImage {...Mocks.topImage} />
      <Details {...Mocks.details} />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
