import React from "react";
import { Searchbar, Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Search = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const goToResult = () => {
    navigation.navigate("SearchResult", {
      title: `Résultat pour ${searchQuery}`,
    });
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Rechercher..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
        noShadow={true}
      />
      <Button onPress={goToResult} style={styles.searchBtn}>
        <Icon name="arrow-right" size={30} color="white"></Icon>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: "#ecf0fa",
    height: 70,
    borderRadius: 20,
    elevation: 3,
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
    width: "20%",
    height: "100%",
    backgroundColor: "#3080ad",
    justifyContent: "center",
    borderRadius: 20,
  },
});

export default Search;
