import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../constants/styles';
import { FontAwesome } from '@expo/vector-icons';

export default function Profile() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 10 }}
        >
          <FontAwesome name="angle-left" size={26} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.containerItens}>
        <View style={styles.image}></View>
        <View style={styles.containerTexts}>
          <Text style={styles.userName}>User </Text>
          <Text style={styles.userEmail}>E-mail</Text>
        </View>
      </View>
      <View style={styles.cartBar}>
        <Text style={styles.cartTotal}>Sign out</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary0,
  },
  containerItens: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerTexts: {
    marginHorizontal: 24,
    marginVertical: 12,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'gray',
    marginBottom: 15,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
  },
  cartBar: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '83%',
  },
  cartTotal: {
    fontSize: 18,
  },
});
