import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import CustomText from '../../components/CustomText';

const width_base = Dimensions.get('screen').width;

export default function TopImage({title, image}) {
  return (
    <>
      <Image source={image} style={styles.topImage} />
      <CustomText style={styles.titleCar}> {title} </CustomText>
    </>
  );
}

const styles = StyleSheet.create({
  topImage: {
    width: '100%',
    height: (582 / 772) * width_base,
  },

  titleCar: {
    position: 'absolute',
    paddingVertical: 60,
    textAlign: 'center',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
  },
});
