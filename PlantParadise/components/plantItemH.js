import React from 'react';
import { useFavorites } from '../src/contexts/favoriteContext';
import { useCart } from '../src/contexts/cartContext';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { FontAwesome } from '@expo/vector-icons';
import AddToCartButton from './atomns/cartButton';

function PlantItemHorizontal({ planta }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites.some((fav) => fav.id === planta.id);
  const navigation = useNavigation();
  const { addToCart } = useCart();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.infoContainer}
        onPress={() => navigation.navigate('Details', { planta })}
      >
        <Image source={planta.imagem} style={styles.imagem} />
        <View style={styles.textContainer}>
          <Text style={styles.nome}>{planta.title}</Text>
          <Text style={styles.preco}>${planta.price.toFixed(2)}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.addToCartButtonContainer}>
        <AddToCartButton onPress={() => addToCart(planta)} />
      </View>
      <View style={styles.favoriteIconContainer}>
        <TouchableOpacity onPress={() => toggleFavorite(planta)}>
          <FontAwesome
            name={isFavorited ? 'heart' : 'heart-o'}
            size={22}
            color={isFavorited ? GlobalStyles.colors.primaryColor : 'black'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    backgroundColor: GlobalStyles.colors.primary0,
    borderRadius: 8,
    elevation: 3,
    height: 140,
    marginLeft: 24,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  imagem: {
    width: 150,
    height: 140,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 8,
  },
  nome: {
    fontSize: 14,
    fontFamily: 'PoppinsRegular',
    marginLeft: 8,
    paddingVertical: 8,
    marginRight: 64,
  },
  preco: {
    marginLeft: 8,
    fontSize: 14,
    fontFamily: 'PoppinsBold',
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
  addToCartButtonContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlantItemHorizontal;
