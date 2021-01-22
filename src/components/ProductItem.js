import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";

const ProductItem = ({ product, navigation, size }) => {
  const styles = size === "big" ? stylesBig : stylesSmall;
  const goToDetails = () => {
    navigation.navigate("Product", { product });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToDetails}>
      <Image source={{ uri: product.mainPicture }} style={styles.image} />
      <View>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.category}>{product.category.name}</Text>
      </View>
      {size === "big" && (
        <Text style={styles.description}>{product.shortDescription}</Text>
      )}
      <View style={{ flex: 1, width: "100%", justifyContent: "flex-end" }}>
        <View style={styles.bottomView}>
          <Text style={styles.price}>{product.price / 100}€</Text>
          <Icon.Button
            name="shopping-cart"
            onPress={() => console.log("Pressed2")}
            style={styles.cartBtn}
            iconStyle={{ marginRight: 0 }}
            size={15}
            color="white"
            backgroundColor="#3080ad"
            borderRadius={10}
          >
            {size === "big" && (
              <Text style={{ color: "#fff" }}> Ajouter au panier </Text>
            )}
          </Icon.Button>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const stylesBig = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 400,
    elevation: 5,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.44,
    shadowRadius: 4.22,
  },
  image: {
    width: "100%",
    minHeight: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  name: {
    fontWeight: "bold",
    fontSize: 22,
    marginHorizontal: 10,
    marginTop: 10,
  },
  category: { color: "grey", fontSize: 15, marginHorizontal: 10 },
  description: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  bottomView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginHorizontal: 10,
  },
  cartBtn: {
    justifyContent: "center",
  },
  price: {
    fontWeight: "bold",
    fontSize: 22,
  },
});

const stylesSmall = StyleSheet.create({
  container: {
    width: 150,
    minHeight: 225,
    elevation: 3,
    marginRight: 15,
    marginBottom: 10,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  image: {
    width: "100%",
    height: 125,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  name: { fontWeight: "bold" },
  category: { color: "grey", fontSize: 10 },
  bottomView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginHorizontal: 10,
  },
  cartBtn: {
    width: 35,
    height: 35,
    justifyContent: "center",
  },
  price: {
    fontWeight: "bold",
  },
});

export default ProductItem;
