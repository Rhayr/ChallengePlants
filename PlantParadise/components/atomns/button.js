import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const Button = ({ children, onClick, style }) => {
  return (
    <View style={style}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onClick}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
  },
  buttonText: {
    color: GlobalStyles.colors.primary0,
    textAlign: 'center',
    fontSize: 24,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.secondaryColor,
    borderRadius: 8,
  },
});

export default Button;
