import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { FontAwesome } from '@expo/vector-icons';
import AddToCartButton from './atomns/cartButton';

function PlantItemHorizontal({ planta }) {
  const [isFavorited, setIsFavorited] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={planta.imagem} style={styles.imagem} />
      <View style={styles.textContainer}>
        <Text style={styles.nome}>{planta.nome}</Text>
        <Text style={styles.preco}>${planta.preco}</Text>
        <AddToCartButton onPress={() => {}} />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 8,
    backgroundColor: GlobalStyles.colors.primary0,
    borderRadius: 8,
    elevation: 3,
    height: 140,
    marginLeft: 24,
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
    fontSize: 16,

    marginLeft: 8,
    paddingVertical: 8,
    marginRight: 64,
  },
  preco: {
    marginLeft: 8,
    fontWeight: 'bold',
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
});

export default PlantItemHorizontal;
