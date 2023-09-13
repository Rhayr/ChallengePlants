import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { GlobalStyles } from '../../constants/styles';

interface AddToCartButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

function AddToCartButton({ onPress, style }: AddToCartButtonProps) {
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
