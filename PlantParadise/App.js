import React from 'react';
import { FavoriteProvider } from './src/contexts/favoriteContext';
import { CartProvider } from './src/contexts/cartContext';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';

import Initial from './src/screens/initial';
import SignIn from './src/screens/signin';
import SignUp from './src/screens/signup';
import Home from './src/screens/home';
import Details from './src/screens/details';
import Favorites from './src/screens/favorites';
import Cart from './src/screens/cart';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function HomeTab() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 84,
          backgroundColor: GlobalStyles.colors.primaryBackground,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginTop: -10,
          marginBottom: 15,
        },
        headerTitleAlign: 'center',
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: GlobalStyles.colors.primaryColor,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={30} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: true,
          headerTitleAlign: 'left',
          headerTitleStyle: { fontSize: 24, marginLeft: 10 },
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={30} color={color} />
          ),
          headerStyle: {
            borderBottomWidth: 0,
            elevation: 0,
          },
        }}
      />
      <BottomTabs.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: true,
          headerTitleAlign: 'left',
          headerTitleStyle: { fontSize: 24, marginLeft: 10 },
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" size={30} color={color} />
          ),
          headerStyle: {
            borderBottomWidth: 0,
            elevation: 0,
          },
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <CartProvider>
        <FavoriteProvider>
          <StatusBar style="auto" />
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Inicial"
                component={Initial}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ title: 'Sign In', headerTitleAlign: 'center' }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ title: 'Sign Up', headerTitleAlign: 'center' }}
              />
              <Stack.Screen
                name="Home"
                component={HomeTab}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
          </NavigationContainer>
        </FavoriteProvider>
      </CartProvider>
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
