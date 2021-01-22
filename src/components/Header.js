import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";

import MenuButton from "./MenuButton";

const Header = ({ title, navigation, color, bgColor }) => {
  const fontColor = color ? color : "black";
  const backgroundColor = bgColor ? bgColor : "transparent";
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
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
      <Text style={[styles.title, { color: fontColor }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingBottom: 30,
    paddingTop: Platform.OS === "android" ? 25 : 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
