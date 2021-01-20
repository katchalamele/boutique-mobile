import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

import Header from "./Header";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header title="Nos produits phares" navigation={navigation} />
        <CategoryList navigation={navigation} />
        <ProductList navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
