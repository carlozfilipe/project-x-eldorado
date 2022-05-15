import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import TopImage from './src/components/TopImage';
import Details from './src/components/Details';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TopImage />
      <Details />
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
