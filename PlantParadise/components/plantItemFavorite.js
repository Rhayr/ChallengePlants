import React from 'react';
import { useFavorites } from '../src/data/FavoriteContext';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { FontAwesome } from '@expo/vector-icons';

function PlantFavorite({ planta }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites.some((fav) => fav.id === planta.id);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.infoContainer}
        onPress={() => navigation.navigate('Details', { planta })}
      >
        <Image source={planta.imagem} style={styles.imagem} />
        <View style={styles.textContainer}>
          <Text style={styles.nome}>{planta.nome}</Text>
          <Text style={styles.preco}>${planta.preco.toFixed(2)}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    backgroundColor: GlobalStyles.colors.secondaryBackground,
    borderRadius: 8,
    height: 72,
    marginLeft: 24,
  },
  infoContainer: {
    flexDirection: 'row',
    height: 72,
  },
  imagem: {
    width: 92,
    height: '100%',
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
});

export default PlantFavorite;
