import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

const ProductDetail = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <Button title="Back" onPress={navigation.goBack} />
      <Text>{route.params.product.name}</Text>
    </SafeAreaView>
  );
};

export default ProductDetail;
