import React, { Props } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FilterableProductTable } from "./FilterarbleProductTable"

export interface Keys{
    keysTyped: string
    fn1: (textChnage: string) => void
}

export const SearchBar: React.FC<Keys> = ({keysTyped, fn1}) => {
  
  
  // const handleFilterTextChange = (e:any) =>{
  //   fn1();
  // }


const handledFilterTexhChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
  fn1(e.target.value.toString());
  console.log("Search Component:" + e.target.value);
}


  return (
    <>
      <div>Search Bar</div>
      <input placeholder="Search Item here" onChange={handledFilterTexhChange}></input>
      <div>This is what im typing on Search: {keysTyped}</div>
    </>
  );
};
