import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  itemName: string;
  itemCategory: string;
  itemPrice: string;
}

export const IndividualItem: React.FC<Props> = ({
  itemName,
  itemCategory,
  itemPrice,
}) => {
  return (
      <tr>
        <td>{itemCategory}</td>
        <td>{itemName}</td>
        <td>{itemPrice}</td>
      </tr>
  );
};
