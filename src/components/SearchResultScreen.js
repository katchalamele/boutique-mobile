import React from "react";
import { SafeAreaView } from "react-native";

import Header from "./Header";

const SearchResultScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <Header
        title={route.params.title}
        navigation={navigation}
        searchBar={false}
      />
    </SafeAreaView>
  );
};

export default SearchResultScreen;
