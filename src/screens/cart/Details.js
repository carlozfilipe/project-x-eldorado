import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import sellerLogo from '../../../assets/logo.png';
import CustomText from '../../components/CustomText';

export default function Details() {
  return (
    <>
      <CustomText style={styles.details}>Detalhes do Carrinho</CustomText>
      <CustomText style={styles.title}>Kit IoT</CustomText>
      <View style={styles.salesman}>
        <Image source={sellerLogo} style={styles.sellerLogo} />
        <CustomText style={styles.sellerName}>Nuvem's Shopping</CustomText>
      </View>

      <CustomText style={styles.description}>
        Um kit IoT que revoluciona a vida dos estudantes
      </CustomText>
      <CustomText style={styles.price}>R$ 99,00</CustomText>
    </>
  );
}

const styles = StyleSheet.create({
  details: {
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 35,
    textAlign: 'center',
  },

  title: {
    color: '#ffa500',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 35,
    textAlign: 'center',
  },

  sellerName: {
    color: '#a3a3a3',
    fontSize: 18,
    lineHeight: 26,
    marginLeft: 10,
  },

  description: {
    color: '#a1a1a1',
    fontSize: 16,
    marginLeft: 20,
  },

  price: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingHorizontal: 10,
  },

  sellerLogo: {
    width: 32,
    height: 32,
    marginLeft: 10,
  },

  salesman: {
    flexDirection: 'row',
    padding: 10,
  },
});
