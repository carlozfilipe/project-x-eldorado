import React from 'react';
import CustomText from '../../components/CustomText';
import { View, Image, StyleSheet } from 'react-native';

export default function RelatedItem({item:{name, image}}) {
  return (
    <>
      <View style={styles.item} key={name}>
        <CustomText style={styles.name}> {name} </CustomText>
        <Image style={styles.image} source={image}/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    paddingVertical: 15,
    alignItems: 'center'
  }, 

  image: {
    width: 50,
    height: 50,
  },
  
  name: {
    fontSize: 18,
    color: '#464646',
    marginLeft: 15,
    lineHeight: 25
  }
})