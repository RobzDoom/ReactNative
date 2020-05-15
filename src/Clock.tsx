// import React, { Props } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// class Clock extends React.Component<any,Time>{
//     constructor(props: any) {
//       super(props);
//       this.state = {currentDate: new Date()};
//     }
  
//    timerId!: number; 
  
//     componentDidMount(){
//       this.timerId = setInterval(
//         () => this.tick(),
//         1000
//       )
//     }
  
//     componentWillMount(){
//       clearInterval(this.timerId);
//     }
  
//     tick() {
//       this.setState({
//         currentDate: new Date()
//       });
//     }
    
  
//     render() {
//       return (
//         <div>
//           <h2>It is {this.state.currentDate.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
//   }
  
//   interface PersonNameProps {
//     personName: string;
//     catName: string
//   };
  
//   interface Time {
//      currentDate: Date;
    
//   };
  
//   interface TimerID{
//     id: string;
//   }

//   export {Clock}