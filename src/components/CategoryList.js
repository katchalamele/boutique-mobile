import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import CategotyItem from "./CategoryItem";

import { getCategoriesFromApi } from "../api/boutiquedkmAPI";

const CategoryList = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("une fois enco!!!");
    const json = getCategoriesFromApi();
    json.then((data) => {
      setCategories(data["hydra:member"]);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catégories</Text>
      <FlatList
        horizontal={true}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CategotyItem navigation={navigation} category={item} />
        )}
        style={styles.list}
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

export default CategoryList;
