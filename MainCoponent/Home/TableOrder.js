import React, {Component} from 'React';
import {View,Text,TouchableOpacity,TextInput,StyleSheet,Image} from 'react-native';
import {connect} from 'react-redux';
import {tableOrder,timeTrue} from '../../Src/Actions/index'
import Axios from 'axios'
import styles from './TableOrderStyle';
import { ScrollView } from 'react-native-gesture-handler';


class TableOrder extends Component{
    
    render(){
  
        return(
            <View style={styles.logo}>
                {/* <View style={{flex:1,zIndex:2, backgroundColor:'#0cf',justifyContent:'center',alignItems:'center',opacity:0.1}} ><Text>dbsjhbdjhs</Text></View> */}
                <ScrollView style={{flex:1}} >
                    <View style={styles.container} >
                        <View style={styles.headerContainer}>
                            <Image style={styles.logoHeader} source={require('../../assets/inu.png')} />
                            <Text style={styles.textHeader} >Doggo Cafee</Text>
                        </View>
                        <View style={styles.bodyContainer} >
                            <Text style={styles.textTableNumber}>Table Number</Text>
                            <TextInput 
                            keyboardType='number-pad'
                            placeholder='0'
                            style={styles.inputOrder} 
                            onChangeText={(text)=>{
                                this.props.tableOrder(text)
                            }} />
                            <TouchableOpacity 
                            onPress={()=>{
                                this.props.navigation.navigate('ListMenus')
                            }}
                            style={styles.inputSubmit}>
                                <Text>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

header = (state)=>{
    return{
        
        tableNumber : state.tableNumber,
        
    }
}


export default connect(header,{tableOrder,timeTrue})(TableOrder);
