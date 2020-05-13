import React, { Props } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Welcome extends React.Component{
    constructor(props: PersonNameProps){
        super(props)
    }

    render(){
        return(
            <WelcomeText personName="Joe" catName="Shmoe"></WelcomeText>
        )
    }
}


const WelcomeText = (props: PersonNameProps) => {
    return <Text>Hello, {props.personName}. This is my cat, {props.catName}.</Text>;
   }
  

  interface PersonNameProps {
    personName: string;
    catName: string
  };

  export {Welcome}


//   class LoggingButton extends React.Component {
//     handleClick() {
//       console.log('this is:', this);
//     }
  
//     render() {
//       // This syntax ensures `this` is bound within handleClick
//       return (
//         <button onClick={() => this.handleClick()}>
//           Click me
//         </button>
//       );
//     }
//   }