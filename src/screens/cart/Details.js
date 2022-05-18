import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CustomText from '../../components/CustomText';

export default function Details({title, titleProduct, description, sellerLogo, sellerName, price}) {
  return (
    <>
      <CustomText style={styles.details}> {title} </CustomText>
      <CustomText style={styles.title}> {titleProduct} </CustomText>
      <View style={styles.salesman}>
        <Image source={sellerLogo} style={styles.sellerLogo} />
        <CustomText style={styles.sellerName}> {sellerName} </CustomText>
      </View>

      <CustomText style={styles.description}> {description} </CustomText>
      <CustomText style={styles.price}> {price} </CustomText>
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
