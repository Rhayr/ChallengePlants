import React, { useState } from 'react';
import { useCart } from '../src/contexts/cartContext';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { FontAwesome } from '@expo/vector-icons';

function PlantItemCart({ planta }) {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const isInCart = cart.some((item) => item.id === planta.id);
  const navigation = useNavigation();

  const cartItem = cart.find((item) => item.id === planta.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const [pressedButton, setPressedButton] = useState(null);

  const totalPrice = (planta.preco * quantity).toFixed(2);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.infoContainer}
        onPress={() => navigation.navigate('Details', { planta })}
      >
        <Image source={planta.imagem} style={styles.imagem} />
        <View>
          <Text style={styles.nome}>{planta.nome}</Text>
          <Text style={styles.preco}>${totalPrice}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={[
            styles.circleButton,
            pressedButton === 'minus' ? styles.pressed : styles.notPressed,
          ]}
          onPressIn={() => setPressedButton('minus')}
          onPressOut={() => setPressedButton(null)}
          onPress={() => decreaseQuantity(planta.id)}
        >
          <FontAwesome
            name="minus"
            size={10}
            color={
              pressedButton === 'minus'
                ? 'white'
                : GlobalStyles.colors.primaryColor
            }
          />
        </TouchableOpacity>

        <Text style={styles.quantityText}>{quantity}</Text>

        <TouchableOpacity
          style={[
            styles.circleButton,
            pressedButton === 'plus' ? styles.pressed : styles.notPressed,
          ]}
          onPressIn={() => setPressedButton('plus')}
          onPressOut={() => setPressedButton(null)}
          onPress={() => increaseQuantity(planta.id)}
        >
          <FontAwesome
            name="plus"
            size={10}
            color={
              pressedButton === 'plus'
                ? 'white'
                : GlobalStyles.colors.primaryColor
            }
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => removeFromCart(planta.id)}
        style={styles.trashButton}
      >
        <FontAwesome
          name="trash-o"
          size={22}
          color={GlobalStyles.colors.primaryColor}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.secondaryBackground,
    borderRadius: 8,
    height: 72,
    marginHorizontal: 24,
    paddingRight: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    height: 72,
    flex: 1,
  },
  imagem: {
    width: 92,
    height: '100%',
    borderRadius: 8,
  },
  nome: {
    fontSize: 16,
    marginLeft: 8,
    paddingVertical: 8,
    marginRight: 64,
  },
  preco: {
    marginLeft: 8,
    fontWeight: 'bold',
  },
  removeIconContainer: {
    position: 'absolute',
    bottom: 17,
    right: 20,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  quantityChange: {
    fontSize: 15,
    paddingHorizontal: 8,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  trashButton: {
    marginLeft: 10,
  },
  circleButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primaryColor,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primaryColor,
  },
  notPressed: {
    backgroundColor: 'white',
  },
});

export default PlantItemCart;
