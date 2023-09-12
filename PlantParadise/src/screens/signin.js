import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Button from '../../components/atomns/button';
import { GlobalStyles } from '../../constants/styles';
import { FontAwesome } from '@expo/vector-icons';

export default function SignIn() {
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>E-MAIL</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Type your e-mail"
        style={styles.input}
      />

      <Text style={styles.label}>PASSWORD</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Type your password"
        secureTextEntry={true}
        style={styles.input}
      />

      <Button onPress={handleSubmit} style={styles.buttonSigns}>
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
