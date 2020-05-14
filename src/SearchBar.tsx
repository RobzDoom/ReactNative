import React, { Props } from "react";
import { StyleSheet, Text, View } from "react-native";

export interface Keys{
    keysTyped: string
}

export const SearchBar: React.FC<Keys> = ({keysTyped}) => {
  return (
    <>
      <div>Search Bar</div>
      <input placeholder="Search Item here"></input>
      <div>This is what im typing on Search: {keysTyped}</div>
    </>
  );
};
