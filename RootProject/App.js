
// import React, { Component } from 'react';
// import { StatusBar } from 'react-native';
// import { Font, AppLoading } from 'expo';
// import { View, Examples } from '@shoutem/ui';

// export default class App extends React.Component {
//   state = {
//     fontsAreLoaded: false,
//   };

//   async componentWillMount() {
//     await Font.loadAsync({
//       'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
//       'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
//       'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
//       'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
//       'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
//       'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
//       'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
//       'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
//       'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
//       'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
//       'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
//     });

//     this.setState({ fontsAreLoaded: true });
//   }

//   render() {
//     if (!this.state.fontsAreLoaded) {
//       return <AppLoading />;
//     }

//     return (
//       <View styleName="flexible">
    
//         <Examples />
//         <StatusBar barStyle="default" hidden={false} />
//       </View>
//     );
//   }
// }


'use strict';
 
import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
 
import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput
} from 'react-native';
 
class HelloWorld extends Component {
  state = {
    text: 'http://facebook.github.io/react-native/',
  };
 
  render() {
    return (
      <View style={styles.container}>
        {/* <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
        /> */}
        <QRCode
          value={this.state.text}
          size={200}
          bgColor='purple'
          fgColor='white'/>
      </View>
    );
  };
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
 
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});
 
AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
 
module.exports = HelloWorld;