import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Button from '../../components/atomns/button';
import { GlobalStyles } from '../../constants/styles';
import { FontAwesome } from '@expo/vector-icons';
import { login } from '../util/auth';
import { AuthContext } from '../contexts/auth-context';

export default function SignIn() {
  const navigation = useNavigation();

  const authCtx = useContext(AuthContext);

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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailIsValid = email.includes('@');
  const passwordIsValid = password.length > 6;

  const handleSubmit = async () => {
    if (!emailIsValid) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!passwordIsValid) {
      Alert.alert(
        'Invalid Password',
        'Password should be more than 6 characters.'
      );
      return;
    }

    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Login Failed',
        'Please check your credentials or try again later.'
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>E-MAIL</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Type your e-mail"
        style={styles.input}
        keyboardType="email-address"
      />

      <Text style={styles.label}>PASSWORD</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Type your password"
        secureTextEntry={true}
        style={styles.input}
      />

      <Button onClick={handleSubmit} style={styles.buttonSigns}>
        Sign In
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary0,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: 'gray',
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    color: 'black',
  },
  buttonSigns: {
    backgroundColor: GlobalStyles.colors.primaryColor,
    marginVertical: 8,
    borderRadius: 8,
  },
});
