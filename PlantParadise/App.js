import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import Initial from './src/screens/initial';
import Home from './src/screens/home';
import Favorites from './src/screens/favorites';
import Cart from './src/screens/cart';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function HomeTab() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="Favorites" component={Favorites} />
      <BottomTabs.Screen name="Cart" component={Cart} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Inicial"
            component={Initial}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeTab}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
