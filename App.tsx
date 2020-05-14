import React, { Props } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LoggingButton} from "./src/LogInButton";
import {Clock} from "./src/Clock";
import { Welcome } from './src/Welcome';
import {FilterableProductTable} from './src/FilterarbleProductTable'
import {ProductTable, Product} from './src/ProductTable'



export default class App extends React.Component<any>{
  constructor(props: any){
    super(props)
  }
  render()  
  {
    return (
      <View style={styles.container}>
        <FilterableProductTable productsForAll={PRODUCTS}/>
        {/* <ProductTable products={PRODUCTS}></ProductTable>    */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



const PRODUCTS: Product []= [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

const title = "Here Are my Items";