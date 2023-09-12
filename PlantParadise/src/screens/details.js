import React, { useState, useEffect } from 'react';
import { useFavorites } from '../contexts/favoriteContext';
import { useCart } from '../contexts/cartContext';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AddToCartButton from '../../components/atomns/cartButton';
import { GlobalStyles } from '../../constants/styles';
import { FontAwesome } from '@expo/vector-icons';

function PlantDetail({ navigation, route }) {
  const { planta } = route.params;
  const { favorites, toggleFavorite } = useFavorites();

  const { addToCart } = useCart();

  const isPlantFavorited = favorites.some((fav) => fav.id === planta.id);
  const [isFavorited, setIsFavorited] = useState(isPlantFavorited);
  const [quantity, setQuantity] = useState(1);
  const [isIncrementPressed, setIsIncrementPressed] = useState(false);
  const [isDecrementPressed, setIsDecrementPressed] = useState(false);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(planta);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome
            name="angle-left"
            size={36}
            color="#000"
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            toggleFavorite(planta);
            setIsFavorited((prev) => !prev);
          }}
        >
          <FontAwesome
            name={isFavorited ? 'heart' : 'heart-o'}
            size={24}
            color={isFavorited ? GlobalStyles.colors.primaryColor : '#000'}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, isFavorited]);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={planta.imagem} style={styles.imagem} />
      </View>
      <View>
        <Text style={styles.textContainer}>{planta.nome}</Text>
      </View>
      <View style={styles.precoContainer}>
        <Text style={styles.precoo}>${planta.preco.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={decrementQuantity}
            onPressIn={() => setIsDecrementPressed(true)}
            onPressOut={() => setIsDecrementPressed(false)}
            style={[
              styles.quantityButton,
              isDecrementPressed ? styles.buttonPressed : styles.buttonNormal,
            ]}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            onPress={incrementQuantity}
            onPressIn={() => setIsIncrementPressed(true)}
            onPressOut={() => setIsIncrementPressed(false)}
            style={[
              styles.quantityButton,
              isIncrementPressed ? styles.buttonPressed : styles.buttonNormal,
            ]}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.descricaoText}>{planta.descricao}</Text>
      <View style={styles.cartBar}>
        <View style={styles.containerCartBar}>
          <Text>Total price</Text>
          <Text style={styles.cartTotal}>
            ${(planta.preco * quantity).toFixed(2)}
          </Text>
        </View>
        <AddToCartButton
          style={styles.addToCartButton}
          onPress={handleAddToCart}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primaryBackground,
    paddingBottom: 70,
  },
  imageContainer: {
    width: '100%',
    height: 247,
  },
  imagem: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    fontSize: 28,
    marginHorizontal: 24,
  },
  precoo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  precoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  quantityButtonText: {
    fontSize: 20,
    color: GlobalStyles.colors.primaryColor,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  buttonNormal: {
    backgroundColor: 'white',
    borderColor: GlobalStyles.colors.primaryColor,
    borderWidth: 1,
  },
  buttonPressed: {
    backgroundColor: GlobalStyles.colors.primaryColor,
  },
  descricaoText: {
    marginHorizontal: 24,
  },
  containerCartBar: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  cartBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
  },
  cartTotal: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addToCartButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: GlobalStyles.colors.primaryColor,
    borderRadius: 8,
  },
  addToCartText: {
    color: GlobalStyles.colors.primary0,
    fontSize: 16,
  },
});

export default PlantDetail;
