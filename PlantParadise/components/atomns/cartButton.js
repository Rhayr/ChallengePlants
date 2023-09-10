import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function AddToCartButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Add to cart</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: GlobalStyles.colors.primaryColor,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginRight: 8,
    borderRadius: 12,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AddToCartButton;
