import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Button from '../../components/atomns/button';
import { useNavigation } from '@react-navigation/native';

function Initial() {
  const navigation = useNavigation();
  const navegarParaSignIn = () => {
    navigation.navigate('SignIn');
  };
  const navegarParaSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/first.png')}
          style={styles.imagem}
        />
      </View>
      <View style={styles.texts}>
        <View>
          <Text style={styles.title}>Plant Paradise</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>
            Find your favorite plants and help the environment
          </Text>
        </View>
      </View>
      <Button onClick={navegarParaSignIn} style={styles.buttonSigns}>
        Sign In
      </Button>
      <Button onClick={navegarParaSignUp} style={styles.buttonSigns}>
        Sign Up
      </Button>
    </View>
  );
}

export default Initial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary0,
  },
  imagem: {
    height: 372,
    width: '100%',
  },
  title: {
    fontSize: 50,
    fontStyle: 'normal',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  texts: {
    paddingLeft: 24,
    paddingRight: 102,
  },
  buttonSigns: {
    backgroundColor: GlobalStyles.colors.primaryColor,
    marginHorizontal: 24,
    marginVertical: 8,
    borderRadius: 8,
  },
});
