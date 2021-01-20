import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

const CategotyItem = ({ category, navigation }) => {
  const goToDetails = () => {
    navigation.navigate("Category", { category });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToDetails}>
      <View style={styles.icon}>
        <Icon name="pencil" size={25}></Icon>
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
