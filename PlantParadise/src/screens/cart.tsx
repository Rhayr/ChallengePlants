import React from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { useCart } from '../contexts/cartContext';
import PlantItemCart from '../../components/cartItem';
import { GlobalStyles } from '../../constants/styles';
import Button2 from '../../components/atomns/button2';

function CartScreen() {
  const { cart, clearCart } = useCart();

  function handleCheckout() {
    Alert.alert('Confirmation', 'Your purchase was successful. Thank you!', [
      {
        text: 'OK',
        onPress: () => clearCart(),
      },
    ]);
  }

  const subtotal = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <View style={styles.container}>
      {cart.length > 0 ? (
        <>
          <FlatList
            overScrollMode="never"
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <PlantItemCart planta={item} />}
          />
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}>Subtotal:</Text>
            <Text style={styles.subtotalAmount}>${subtotal}</Text>
          </View>
          <View>
            <Button2 onClick={handleCheckout} style={styles.buttonSigns}>
              Go to Checkout
            </Button2>
          </View>
        </>
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
    fontFamily: 'PoppinsRegular',
  },
  subtotalContainer: {
    backgroundColor: GlobalStyles.colors.secondaryBackground,
    paddingHorizontal: 8,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderRadius: 8,
    marginHorizontal: 26,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primaryColor,
  },
  subtotalText: {
    fontSize: 16,
    fontFamily: 'PoppinsRegular',
  },
  subtotalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'PoppinsRegular',
  },
  buttonSigns: {
    backgroundColor: GlobalStyles.colors.primaryColor,
    marginHorizontal: 26,
    marginTop: 16,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 16,
  },
});

export default CartScreen;
