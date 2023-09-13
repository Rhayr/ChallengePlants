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
        <Image source={{ uri: planta.image }} style={styles.imagem} />
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>{planta.category}</Text>
      </View>
      <View>
        <Text style={styles.textContainer}>{planta.title}</Text>
      </View>
      <View style={styles.precoContainer}>
        <Text style={styles.precoo}>${planta.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={[
              styles.circleButton,
              isDecrementPressed ? styles.pressed : styles.notPressed,
            ]}
            onPressIn={() => setIsDecrementPressed(true)}
            onPressOut={() => setIsDecrementPressed(false)}
            onPress={decrementQuantity}
          >
            <FontAwesome
              name="minus"
              size={10}
              color={
                isDecrementPressed ? 'white' : GlobalStyles.colors.primaryColor
              }
            />
          </TouchableOpacity>

          <Text style={styles.quantityText}>{quantity}</Text>

          <TouchableOpacity
            style={[
              styles.circleButton,
              isIncrementPressed ? styles.pressed : styles.notPressed,
            ]}
            onPressIn={() => setIsIncrementPressed(true)}
            onPressOut={() => setIsIncrementPressed(false)}
            onPress={incrementQuantity}
          >
            <FontAwesome
              name="plus"
              size={10}
              color={
                isIncrementPressed ? 'white' : GlobalStyles.colors.primaryColor
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.descricaoText}>{planta.description}</Text>
      <View style={styles.cartBar}>
        <View style={styles.containerCartBar}>
          <Text style={styles.totalText}>Total price</Text>
          <Text style={styles.cartTotal}>
            ${(planta.price * quantity).toFixed(2)}
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
    fontFamily: 'PoppinsBold',
  },
  categoryContainer: {
    marginHorizontal: 24,
  },
  categoryText: {
    fontFamily: 'PoppinsRegular',
    color: 'gray',
    fontSize: 16,
    marginTop: 12,
  },
  precoo: {
    fontSize: 20,
    fontFamily: 'PoppinsBold',
  },
  totalText: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
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

  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },

  descricaoText: {
    marginHorizontal: 24,
    color: 'gray',
    fontFamily: 'PoppinsRegular',
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
  circleButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primaryColor,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primaryColor,
  },
  notPressed: {
    backgroundColor: 'white',
  },
  trashButton: {
    marginLeft: 10,
  },
});

export default PlantDetail;
