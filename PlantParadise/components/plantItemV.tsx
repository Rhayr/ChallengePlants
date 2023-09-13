import React, { useState } from 'react';
import { useFavorites } from '../src/contexts/favoriteContext';
import { useCart } from '../src/contexts/cartContext';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

interface Plant {
  id: number;
  image: string;
  title: string;
  price: number;
}
interface PlantItemVProps {
  planta: Plant;
}

function PlantItemVertical({ planta }: PlantItemVProps) {
  const { favorites, toggleFavorite } = useFavorites();
  const { cart, addToCart, removeFromCart } = useCart();
  const isInCart = cart.some((item) => item.id === planta.id);
  const isFavorited = favorites.some((fav) => fav.id === planta.id);
  const navigation = useNavigation();

  const handleCartToggle = () => {
    if (isInCart) {
      removeFromCart(planta.id);
    } else {
      addToCart(planta);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', { planta })}
        style={{ flex: 1 }}
      >
        <Image source={{ uri: planta.image }} style={styles.imagem} />
        <View style={styles.textContainer}>
          <Text style={styles.nome}>{planta.title}</Text>
          <Text style={styles.preco}>${planta.price.toFixed(2)}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.favoriteIconContainer}>
        <TouchableOpacity onPress={() => toggleFavorite(planta)}>
          <FontAwesome
            name={isFavorited ? 'heart' : 'heart-o'}
            size={22}
            color={isFavorited ? GlobalStyles.colors.primaryColor : 'black'}
          />
        </TouchableOpacity>
      </View>

      <View
        style={[styles.cartButton, isInCart ? styles.cartButtonSelected : {}]}
      >
        <TouchableOpacity onPress={handleCartToggle}>
          <Ionicons
            name="cart"
            size={22}
            color={isInCart ? 'white' : 'black'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primaryBackground,
    borderRadius: 8,
    elevation: 3,
    height: 279,
    marginHorizontal: 24,
    marginVertical: 8,
  },
  imagem: {
    width: '100%',
    height: 209,
    marginBottom: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  textContainer: {
    marginHorizontal: 10,
  },
  nome: {
    fontSize: 16,
    fontFamily: 'PoppinsBold',
  },
  preco: {
    fontSize: 14,
    fontFamily: 'PoppinsRegular',
  },
  favoriteIconContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  cartButton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  cartButtonSelected: {
    backgroundColor: GlobalStyles.colors.primaryColor,
  },
});

export default PlantItemVertical;
