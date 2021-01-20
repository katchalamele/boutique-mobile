import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";

import Header from "./Header";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Nos produits phares" navigation={navigation} />
      <CategoryList navigation={navigation} />
      <ProductList navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
});

export default HomeScreen;
