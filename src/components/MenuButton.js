import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button, Menu, Divider } from "react-native-paper";
import { StyleSheet } from "react-native";

const MenuButton = ({ navigation, color }) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const goHome = () => {
    closeMenu();
    navigation.navigate("Home");
  };

  const goCart = () => {
    closeMenu();
    navigation.navigate("Cart");
  };

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Icon.Button
          name="bars"
          onPress={openMenu}
          size={25}
          style={[styles.container, { borderColor: color }]}
          iconStyle={{ marginRight: 0 }}
          borderRadius={20}
          color={color}
          backgroundColor="transparent"
        />
      }
    >
      <Menu.Item onPress={goHome} title="Accueil" />
      <Divider />
      <Menu.Item onPress={goCart} title="Panier" />
    </Menu>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MenuButton;
