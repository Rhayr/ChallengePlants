import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { FontAwesome } from '@expo/vector-icons';

function PlantItemVertical({ planta }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={planta.imagem} style={styles.imagem} />
      <View style={styles.textContainer}>
        <Text style={styles.nome}>{planta.nome}</Text>
        <Text style={styles.preco}>${planta.preco}</Text>
      </View>
      <View style={styles.favoriteIconContainer}>
        <TouchableOpacity onPress={() => setIsFavorited(!isFavorited)}>
          <FontAwesome
            name="heart-o"
            size={22}
            color={isFavorited ? GlobalStyles.colors.primaryColor : 'black'}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.cartButton,
          isAddedToCart ? styles.cartButtonSelected : {},
        ]}
      >
        <TouchableOpacity onPress={() => setIsAddedToCart(!isAddedToCart)}>
          <FontAwesome
            name="shopping-cart"
            size={22}
            color={isAddedToCart ? 'white' : 'black'}
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
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 14,
    marginTop: 5,
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
