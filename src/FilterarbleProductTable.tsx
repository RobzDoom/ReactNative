import React, { Props } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class FilterableTable extends React.Component{
    constructor(props: any){
        super(props)
    }

    render(){
        return(
           <View style={stylesTwo.container}>
               <h4>Hello This is Border</h4>
           </View>
        )
    }
}


const stylesTwo = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
      borderWidth: 1
    },
  });

  export{FilterableTable}