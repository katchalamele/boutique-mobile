import React from "react";
import { SafeAreaView } from "react-native";

import Header from "./Header";

const CartScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header title="Panier" navigation={navigation} searchBar={false} />
    </SafeAreaView>
  );
};

export default CartScreen;
