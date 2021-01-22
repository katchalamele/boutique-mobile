import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import Header from "./Header";

const ProductDetailScreen = ({ navigation, route }) => {
  const product = route.params.product;
  return (
    <ImageBackground source={{ uri: product.mainPicture }} style={styles.image}>
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} color="#fff" />
        <View style={styles.descriptionContainer}>
          <View style={styles.description}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title}>{product.name}</Text>
              <Text style={styles.title}>{product.price / 100}€</Text>
            </View>
            <Text style={styles.category}>{product.category.name}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="star" size={20} color="gold" solid />
              <Text style={{ fontWeight: "bold" }}> 4,2 </Text>
              <Text style={{ color: "grey", fontWeight: "bold" }}>
                (127 Notes)
              </Text>
            </View>
            <Text>{product.shortDescription}</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Icon.Button
                name="shopping-cart"
                onPress={() => console.log("Pressed3")}
                style={styles.btn}
                size={15}
                color="white"
                borderRadius={20}
                backgroundColor="#3080ad"
              >
                <Text style={{ color: "white" }}> Ajouter au panier </Text>
              </Icon.Button>
              <Icon.Button
                name="heart"
                onPress={() => console.log("Pressed4")}
                style={[styles.btn, { borderWidth: 1 }]}
                iconStyle={{ marginRight: 0 }}
                size={20}
                color="black"
                borderRadius={20}
                backgroundColor="#fff"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
  },
  image: { flex: 1, height: "50%" },
  descriptionContainer: {
    height: "55%",
    alignItems: "center",
  },
  description: {
    flex: 1,
    backgroundColor: "#fff",
    width: "120%",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: "20%",
    justifyContent: "space-between",
  },
  title: { fontWeight: "bold", fontSize: 22 },
  category: { fontWeight: "bold", color: "grey", fontSize: 15 },
  btn: {
    minHeight: 60,
    paddingHorizontal: 30,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});

export default ProductDetailScreen;
