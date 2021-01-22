import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { getProductsByCategoryApi } from "../api/boutiquedkmAPI";

const CategotyItem = ({ category, navigation }) => {
  const goToDetails = () => {
    navigation.navigate("ProductList", {
      title: category.name,
      query: getProductsByCategoryApi(category.id),
      filterByName: { placeholder: `Rechercher dans ${category.name}...` },
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToDetails}>
      <View style={styles.icon}>
        <Icon name="fire" size={25} color="orange"></Icon>
      </View>
      <Text style={styles.name}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 150,
    elevation: 3,
    marginRight: 15,
    marginBottom: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  icon: {
    backgroundColor: "#ecf0fa",
    width: "80%",
    height: "50%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {},
});

export default CategotyItem;
