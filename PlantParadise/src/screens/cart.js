import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useCart } from '../contexts/cartContext';
import PlantItemCart from '../../components/cartItem';
import { GlobalStyles } from '../../constants/styles';

function CartScreen() {
  const { cart } = useCart();

  return (
    <View style={styles.container}>
      {cart.length > 0 ? (
        <FlatList
          overScrollMode="never"
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <PlantItemCart planta={item} />}
        />
      ) : (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
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
  },
});

export default CartScreen;
