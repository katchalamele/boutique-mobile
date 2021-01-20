import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-native-paper";

import HomeScreen from "./src/components/HomeScreen";
import ProductDetail from "./src/components/ProductDetail";
import CategoryScreen from "./src/components/CategoryScreen";
import CartScreen from "./src/components/CartScreen";
import SearchResultScreen from "./src/components/SearchResultScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Product" component={ProductDetail} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="SearchResult" component={SearchResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
