import React from "react";
import { Searchbar, Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const Search = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const goToResult = () => {
    navigation.navigate("SearchResult", {
      title: `Résultat pour "${searchQuery}"`,
    });
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Rechercher..."
        onChangeText={onChangeSearch}
        onSubmitEditing={goToResult}
        value={searchQuery}
        style={styles.search}
        noShadow={true}
      />
      <Icon.Button
        name="arrow-right"
        onPress={goToResult}
        style={styles.searchBtn}
        size={30}
        color="white"
        iconStyle={{ marginRight: 0 }}
        borderRadius={20}
        backgroundColor="#3080ad"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
    backgroundColor: "#ecf0fa",
    height: 70,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  search: {
    height: "100%",
    width: "80%",
    borderRadius: 20,
    backgroundColor: "transparent",
    elevation: 0,
  },
  searchBtn: {
    height: "100%",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Search;
