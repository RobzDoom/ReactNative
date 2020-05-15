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

interface textName{
    textChange: string
}

const FilterableProductTable: React.FC<Props> = ({ productsForAll }) => {
const[searchString, setString] = useState('None')

const handledTextChange = (searchString: string) =>{
    setString(searchString);
    console.log("Filter Component:" + searchString);
}

  return (
    <div>
      <SearchBar keysTyped={searchString} fn1={handledTextChange}/>
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
