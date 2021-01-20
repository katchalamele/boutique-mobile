import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";

import MenuButton from "./MenuButton";
import Search from "./Search";

const Header = ({ title, navigation, searchBar, color }) => {
  const searchBarState = searchBar === undefined ? true : searchBar;
  const fontColor = color === undefined ? "black" : color;
  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        {navigation.canGoBack() && (
          <Icon.Button
            onPress={navigation.goBack}
            style={[styles.btn, { borderColor: fontColor }]}
            name="arrow-left"
            size={25}
            color={fontColor}
            iconStyle={{ marginRight: 0 }}
            borderRadius={20}
            backgroundColor="transparent"
          />
        )}
        <MenuButton navigation={navigation} color={fontColor} />
        {!navigation.canGoBack() && (
          <Icon.Button
            name="user-circle"
            size={25}
            color={fontColor}
            iconStyle={{ marginRight: 0 }}
            backgroundColor="transparent"
          />
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      {searchBarState && <Search navigation={navigation} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: Platform.OS === "android" ? 25 : 5,
  },
  menuBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },
  btn: {
    borderWidth: 1,
    height: 60,
    width: 60,
    justifyContent: "center",
  },
});

export default Header;
