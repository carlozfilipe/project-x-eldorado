import { 
  Image, 
  StatusBar, 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  Dimensions,
  View 
} from 'react-native';
import topImage from './assets/topImage.png';
import sellerLogo from './assets/logo.png';

const width_base = Dimensions.get('screen').width;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={topImage} style={styles.topImage} />
      <Text style={styles.titleCar}>Carrinho</Text>

      <Text style={styles.details}>Detalhes do Carrinho</Text>
      <Text style={styles.title}>Kit IoT</Text>
      <View style={styles.salesman}>
        <Image source={sellerLogo} style={styles.sellerLogo} />
        <Text style={styles.sellerName}>Nuvem's Shopping</Text>
      </View>  
      <Text style={styles.description}>Um kit IoT que revoluciona a vida dos estudantes</Text>
      <Text style={styles.price}>R$ 99,00</Text>
  
      <StatusBar />
    </SafeAreaView>     
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topImage: {
    width: '100%',
    height: 582 / 772 * width_base,
  },
  titleCar: {
    position: 'absolute',
    paddingVertical: 60,
    textAlign: 'center',
    width: '100%', 
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40
  },
  details: {
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 35,
    textAlign: 'center'
  },
  title: {
    color: '#ffa500',
    fontWeight: 'bold',
    lineHeight: 35,
    textAlign: 'center'
  },
  sellerName: {
    color: '#a3a3a3',
    fontSize: 18,
    lineHeight: 26,
    marginLeft: 10
  },
  description: {
    color: '#a1a1a1',
    fontSize: 20
  },
  sellerLogo: {
    width: 32,
    height: 32,
    marginLeft: 10
  },
  salesman: {
    flexDirection: 'row',
    padding: 10
  }
});
