import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function AddToCartButton({ onPress, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>Add to cart</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalStyles.colors.primaryColor,
    paddingHorizontal: 27,
    borderRadius: 12,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
});

export default AddToCartButton;
