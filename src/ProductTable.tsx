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
}

const ProductTable: React.FC<Props> = ({ products }) => {
  const listProduct = products.map((indProdutct) => (
    <IndividualItem
      itemName={indProdutct.name}
      itemCategory={indProdutct.category}
      itemPrice={indProdutct.price}
      isStocked={indProdutct.stocked}
    />
  ));
  return (
  <>
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
