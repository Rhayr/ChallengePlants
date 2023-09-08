import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function PlantItemVertical({ planta }) {
  return (
    <View style={styles.container}>
      <Image source={planta.imagem} style={styles.imagem} />
      <Text style={styles.nome}>{planta.nome}</Text>
      <Text style={styles.preco}>${planta.preco}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  imagem: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descricao: {
    marginTop: 5,
    marginBottom: 5,
  },
  preco: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default PlantItemVertical;
