import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import { getProductsFromApi } from "../api/boutiquedkmAPI";
import ProductItem from "./ProductItem";

const ProductList = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  const loadProducts = () => {
    if (!products.length || nextPage) {
      const json = getProductsFromApi(nextPage);
      json
        .then((data) => {
          setProducts([...products, ...data["hydra:member"]]);
          setNextPage(data["hydra:view"]["hydra:next"]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(loadProducts, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nos produits</Text>
      <FlatList
        horizontal={true}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem product={item} navigation={navigation}></ProductItem>
        )}
        style={styles.list}
        onEndReached={loadProducts}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 30 },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 30,
    marginBottom: 10,
  },
  list: { paddingStart: 30, paddingTop: 10 },
});

export default ProductList;
