import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function PlantDetail({ route }) {
  const { planta } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={planta.imagem} style={styles.imagem} />
      </View>
      <Text>{planta.nome}</Text>
      <Text>{planta.preco}</Text>
      <Text>{planta.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primaryBackground,
  },
  imageContainer: {
    width: '100%',
    height: 247,
  },
  imagem: {
    width: '100%',
    height: '100%',
  },
});

export default PlantDetail;
