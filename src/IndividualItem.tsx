import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  itemName: string;
  itemCategory: string;
  itemPrice: string;
  isStocked: boolean
}

export const IndividualItem: React.FC<Props> = ({
  itemName,
  itemCategory,
  itemPrice,
  isStocked
}) => {

  const outOfStock = {
    color: 'red'
  } as React.CSSProperties

  return (
      <tr>
        <td>{itemCategory}</td>
        <td style={isStocked? {}:outOfStock} >{itemName}</td>
        <td>{itemPrice}</td>
      </tr>
  );
};
