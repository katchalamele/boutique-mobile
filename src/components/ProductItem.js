import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const ProductItem = ({ product, navigation }) => {
  const goToDetails = () => {
    navigation.navigate("Product", { product });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToDetails}>
      <Image
        source={{ uri: product.mainPicture }}
        style={{
          width: "100%",
          height: 125,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      />
      <View>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.category}>{product.category.name}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View style={styles.bottomView}>
          <Text style={styles.price}>{product.price / 100}€</Text>
          <Button
            onPress={() => console.log("Pressed2")}
            style={styles.cartBtn}
          >
            <Icon name="shopping-cart" size={20} color="white" />
          </Button>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  icon: {
    backgroundColor: "#ecf0fa",
    width: "80%",
    height: "50%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  name: { fontWeight: "bold" },
  category: { color: "grey", fontSize: 10 },
  bottomView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "85%",
    marginVertical: 10,
  },
  cartBtn: {
    width: 5,
    height: 30,
    backgroundColor: "#3080ad",
    justifyContent: "center",
    borderRadius: 10,
  },
  price: {
    fontWeight: "bold",
  },
});

export default ProductItem;
