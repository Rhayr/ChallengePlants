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
    paddingVertical: 3,
    paddingHorizontal: 27,
    marginRight: 8,
    borderRadius: 12,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AddToCartButton;
