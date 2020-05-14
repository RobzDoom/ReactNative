import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";

export interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

interface Props {
  productsForAll: Product[];
}

debugger
const FilterableProductTable: React.FC<Props> = ({ productsForAll }) => {
    debugger
const[searchString, setString] = useState('None')

  return (
    <div>
      <SearchBar keysTyped={searchString}/>
      <ProductTable products={productsForAll} />
    </div>
  );
};

const stylesTwo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
  },
});

export {FilterableProductTable};
