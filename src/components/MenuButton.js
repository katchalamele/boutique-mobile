import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Menu, Divider } from "react-native-paper";

const MenuButton = ({ navigation }) => {
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
        <Button onPress={openMenu}>
          <Icon name="bars" size={30} color="black" />
        </Button>
      }
    >
      <Menu.Item onPress={goHome} title="Accueil" />
      <Divider />
      <Menu.Item onPress={goCart} title="Panier" />
    </Menu>
  );
};

export default MenuButton;
