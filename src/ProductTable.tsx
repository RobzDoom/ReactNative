import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IndividualItem } from "./IndividualItem";
import { SearchBar } from "./SearchBar"

export interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

interface Props {
  products: Product[];
  title: string;
}

const ProductTable: React.FC<Props> = ({ products, title }) => {
  const listProduct = products.map((indProdutct) => (
    <IndividualItem
      itemName={indProdutct.name}
      itemCategory={indProdutct.category}
      itemPrice={indProdutct.price}
    />
  ));

  //   let lastCategory: string | null = null
  // debugger
  //   const listProduct = products.map((indProduct) => {
  //     if (lastCategory !== indProduct.category) {
  //       lastCategory = indProduct.category
  //       return <Categories categoryName={indProduct.category} />;
  //     }
  //     lastCategory = indProduct.category
  //   });

  return (
  <>
  <SearchBar />
    <table>
      <tr>
        <th>Department</th>
        <th>Item</th>
        <th>Price</th>
      </tr>
      {listProduct}
    </table>
  </>
  );
};

export { ProductTable };
