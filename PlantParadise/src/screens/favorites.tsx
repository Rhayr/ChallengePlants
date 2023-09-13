import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFavorites } from '../contexts/favoriteContext';
import PlantFavorite from '../../components/plantItemFavorite';
import { GlobalStyles } from '../../constants/styles';

function FavoritesScreen() {
  const { favorites } = useFavorites();

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          overScrollMode="never"
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <PlantFavorite planta={item} />}
        />
      ) : (
        <Text style={styles.emptyText}>No favorite plants found.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary0,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    fontFamily: 'PoppinsRegular',
  },
});

export default FavoritesScreen;
