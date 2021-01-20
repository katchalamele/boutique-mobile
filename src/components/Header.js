import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

import MenuButton from "./MenuButton";
import Search from "./Search";

const Header = ({ title, navigation, searchBar }) => {
  const searchBarState = searchBar === undefined ? true : searchBar;
  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <MenuButton navigation={navigation} />
        <Button>
          <Icon name="user-circle" size={30} color="black" />
        </Button>
      </View>
      <Text style={styles.title}>{title}</Text>
      {searchBarState && <Search navigation={navigation} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  menuBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 20,
  },
});

export default Header;
