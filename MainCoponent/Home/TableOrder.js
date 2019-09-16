import React, {Component} from 'React';
import {View,Text,TouchableOpacity,TextInput,StyleSheet,Image} from 'react-native';
import {connect} from 'react-redux';
import {tableOrder,timeTrue} from '../../Src/Actions/index'
import Axios from 'axios'
import styles from './TableOrderStyle';
import { ScrollView } from 'react-native-gesture-handler';


class TableOrder extends Component{
    constructor(props){
        super(props)
        this.state={
            trigger:0
        }
    }

    firstInterval=()=>{
        this.setState({trigger:5})
        interval=setTimeout(() => {
            this.setState({trigger:0})
        }, 5000);
    }
    
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
                            <Text style={[styles.textTableNumber,{fontSize:13,color:'red'}]}>{this.state.trigger==0?
                            null : 'Cannot empty, zero, or more than 20'
                            }</Text>
                            <Text style={styles.textTableNumber}>Table Number</Text>
                            <TextInput 
                            
                            keyboardType='number-pad'
                            placeholder='0'
                            placeholderTextColor='#ad8925'
                            style={styles.inputOrder} 
                            onChangeText={(text)=>{
                                this.props.tableOrder(text)
                                this.setState({trigger:0})
                            }} />
                            <TouchableOpacity 
                            onPress={()=>{
                                (
                                    this.props.tableNumber.number==0||this.props.tableNumber.number==null||
                                    this.props.tableNumber.number>20||
                                    this.props.tableNumber.number<=0)?
                                    this.firstInterval():
                                this.props.navigation.navigate('ListMenus')
                            }}
                            style={styles.inputSubmit}>
                                <Text
                                style={{
                                color : '#ad8925',
                                fontWeight : 'bold',
                                textShadowColor: 'rgba(61, 48, 13, 0.2)',
                                textShadowOffset: {width: -1, height: 1},
                                textShadowRadius: 10
                                }}
                                >Submit</Text>
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
