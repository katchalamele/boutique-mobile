import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

import Header from "./Header";
import ProductItem from "./ProductItem";

import { getProductsFromApi } from "../api/boutiquedkmAPI";

class ProductListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      nextPage: this.props.route.params.query,
      text: "",
    };
    this.bgColor = "#3080ad";
  }

  filterByName = () => {
    this.setState(
      {
        products: [],
        nextPage: `${this.props.route.params.query}&name=${this.state.text}`,
      },
      this.loadProducts
    );
  };

  loadProducts = () => {
    if (!this.state.products.length || this.state.nextPage) {
      const json = getProductsFromApi(this.state.nextPage);
      json
        .then((data) => {
          this.setState({
            products: [...this.state.products, ...data["hydra:member"]],
            nextPage: data["hydra:view"]["hydra:next"],
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  componentDidMount = this.loadProducts;

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: this.bgColor, flex: 1 }}>
        <View style={styles.container}>
          <Header
            title={this.props.route.params.title}
            navigation={this.props.navigation}
            color="#fff"
            bgColor={this.bgColor}
          />
          {this.props.route.params.filterByName && (
            <Searchbar
              placeholder={this.props.route.params.filterByName.placeholder}
              onChangeText={(text) => {
                this.setState({ text: text });
              }}
              onSubmitEditing={this.filterByName}
              style={styles.filter}
            />
          )}
          <FlatList
            data={this.state.products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ProductItem
                size="big"
                product={item}
                navigation={this.props.navigation}
              />
            )}
            style={styles.list}
            onEndReached={this.loadProducts}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  filter: {
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 10,
    height: 25,
    backgroundColor: "#ecf0fa",
    borderRadius: 10,
  },
  list: { paddingHorizontal: 30, paddingTop: 10 },
});

export default ProductListScreen;
