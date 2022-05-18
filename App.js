import { StatusBar, StyleSheet, SafeAreaView, View, FlatList } from 'react-native';
import TopImage from './src/screens/cart/TopImage';
import Details from './src/screens/cart/Details';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import CustomText from './src/components/CustomText';
import Mocks from './src/mocks/cart';
import Item from './src/screens/cart/Item';
import RelatedItem from './src/screens/cart/RelatedItem';

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
        <FlatList
          data={Mocks.items.list}
          renderItem={Item}
          keyExtractor={({name}) => name}
          ListHeaderComponent={
            () => {
              return (
                <>
                  <TopImage {...Mocks.topImage} />
                  <Details {...Mocks.details} />
                  <CustomText style={styles.title}>
                    {Mocks.items.title}
                  </CustomText>
                </>
              )
            }
          }
          ListFooterComponent={
            () => {
              return (
              <>
                <CustomText style={styles.title}>
                    {Mocks.relatedItems.title}
                </CustomText>
                <FlatList
                  data={Mocks.relatedItems.list}
                  renderItem={RelatedItem}
                  keyExtractor={({name}) => name}
                />
              </>
              )
            }
          }
        />

        
        <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  title: {
    color: '#ffa500',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
    fontSize: 25,
    marginLeft: 20
  }
})
