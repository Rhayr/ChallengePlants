import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/auth-context';
import { createUser } from '../util/auth';
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

export default function SignUp() {
  const navigation = useNavigation();

  const authCtx = useContext(AuthContext);

  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

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
  const [confirmPassword, setConfirmPassword] = useState('');

  const isEmailValid = email.includes('@');
  const isPasswordValid = password.length > 6;

  const handleSubmit = async () => {
    if (!isEmailValid) {
      Alert.alert('Invalid E-mail', 'Please, enter a valid e-mail address.');
      return;
    }

    if (!isPasswordValid) {
      Alert.alert(
        'Invalid Password',
        'The password must have more than 6 characters.'
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Confirmation Error', 'Passwords do not match!');
      return;
    }

    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Registration Error',
        'There was an error during registration. Please try again later.'
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>E-MAIL</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Type your e-mail address"
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
      <Text style={styles.label}>PASSWORD CONFIRMATION</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Type your password again"
        secureTextEntry={true}
        style={styles.input}
      />
      <Button onClick={handleSubmit} style={styles.buttonSigns}>
        Sign Up
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
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  buttonSigns: {
    backgroundColor: GlobalStyles.colors.primaryColor,
    marginVertical: 8,
    borderRadius: 8,
  },
});
