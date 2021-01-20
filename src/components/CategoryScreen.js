import React from "react";
import { SafeAreaView } from "react-native";

import Header from "./Header";

const CategoryScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <Header title={route.params.category.name} navigation={navigation} />
    </SafeAreaView>
  );
};

export default CategoryScreen;
