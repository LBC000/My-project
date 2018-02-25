import React,{Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';


class Nav extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){

        return(
            <View style={styles.nav}>
                <Text style={styles.navText}>234</Text>
            </View>

        )
    }
}
const styles=StyleSheet.create({
    nav:{
        backgroundColor:'red',
        height:'50%',
        width:300,
    },
    navText:{
        fontSize:20
    }
})
export default Nav