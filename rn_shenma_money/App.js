import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Nav from './components/nav/Nav';

class App extends Component{
    render(){
        return(
            <View>
                <Nav/>
            </View>
        )
    }
}
export default App


