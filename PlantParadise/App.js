import React, { useContext } from 'react';
import AuthContextProvider from './src/contexts/auth-context';
import { FavoriteProvider } from './src/contexts/favoriteContext';
import { CartProvider } from './src/contexts/cartContext';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from './src/contexts/auth-context';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import Initial from './src/screens/initial';
import SignIn from './src/screens/signin';
import SignUp from './src/screens/signup';
import Home from './src/screens/home';
import Details from './src/screens/details';
import Profile from './src/screens/profile';
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
          headerTitleStyle: {
            fontSize: 24,
            marginLeft: 10,
            fontFamily: 'PoppinsBold',
          },
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
          headerTitleStyle: {
            fontSize: 24,
            marginLeft: 10,

            fontFamily: 'PoppinsBold',
          },
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

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicial"
        component={Initial}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Sign In',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 14,
            fontFamily: 'PoppinsBold',
          },
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'Sign Up',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 14,
            marginLeft: 10,
            fontFamily: 'PoppinsBold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <CartProvider>
      <FavoriteProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerTitleAlign: 'center' }}
          />
        </Stack.Navigator>
      </FavoriteProvider>
    </CartProvider>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </>
  );
}

export default function App() {
  const [LoadedFont] = useFonts({
    PoppinsRegular: Poppins_400Regular,
    PoppinsBold: Poppins_700Bold,
  });

  if (!LoadedFont) {
    return;
    <View />;
  }

  return (
    <AuthContextProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </AuthContextProvider>
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
