import React, { Props } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class LoggingButton extends React.Component {
    handleClick() {
      console.log('this is:', this);
    }
  
    render() {
      // This syntax ensures `this` is bound within handleClick
      return (
        <button onClick={() => this.handleClick()}>
          Click me
        </button>
      );
    }
  }

  export {LoggingButton}