import { 
  Image, 
  StatusBar, 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  Dimensions 
} from 'react-native';
import topo from './assets/topo.png';

const width_base = Dimensions.get('screen').width;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.topo} source={topo} />
      <Text>ProjectX</Text>
      <Text>Carlos Filipe</Text>
      <StatusBar />
    </SafeAreaView>     
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topo: {
    width: '100%',
    height: 582/772 * width_base,
  }
});
