import React, { Component } from 'React';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, BackHandler, Alert} from 'react-native';
import { connect } from 'react-redux';
import {getTransactionId, timeRun} from '../../../Src/Actions'
import Axios from 'axios'
import {Icon} from 'native-base'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import styles from './FooterStyle';
import { NavigationEvents } from 'react-navigation';
 


class Footer extends Component {
    constructor(props){
        super(props)

        const isPortrait = () => {
            const dim = Dimensions.get('screen');
            return dim.height >= dim.width;
          };
      
          // Event Listener for orientation changes
          Dimensions.addEventListener('change', () => {
            this.setState({
              orientation: isPortrait() ? 0 : 1
            });
          });

        this.state={
            orientation: isPortrait() ? 0 : 1,
            screenWidth : Dimensions.get('window').width,
        }
    }

    // 
    componentDidMount() {
        Axios.get(`${this.props.ipAdress}transaction/${this.props.transaction.id}`).then((res)=>
        { 
            if(res.data==="") {
                Axios.post(`${this.props.ipAdress}transaction`,{
                "tableNumber": this.props.tableNumber.number
            }).then((res)=>{
                Axios.get(`${this.props.ipAdress}transaction/${res.data.id}`).
                then((res)=>{
                    this.props.getTransactionId(res.data.id,res.data.tax)
                })
            })}
            
            
        }).catch((err)=>{
            console.log(err)
            
        })

        
        
    }
    stopTimes=()=>{
        this.props.stopTimer()
    }
    
   
    render() {
        
        return (
            !this.state.orientation ?   
            (this.props.order.length!=0||this.props.orderByTransaction!=0) && this.props.footerCheck ?   
            (

                <TouchableOpacity 
                onPress={()=>{
                    this.stopTimes()
                    this.props.navigation.navigate('ViewBill')
                }}
                style={styles.footerContainer} >
                        
                    <Text style={styles.items} >{this.props.transaction.totalQty} Items | Est + tax| Rp {this.props.transaction.subTotal+(this.props.transaction.subTotal*this.props.transaction.tax)}</Text>
                    <Ionicons name='md-basket' style={styles.icon} />
                </TouchableOpacity>
            ):null:
            (
            <View>
                <Text>Landscape</Text>
            </View>
            )
            )
    }
}

store = (state) => {
    return {
        ipAdress            :   state.ipAdress,
        times               :   state.times,
        tableNumber         :   state.tableNumber,
        order               :   state.order,
        transaction         :   state.transactionToPost,
        footerCheck         :   state.footerCheck,
        orderByTransaction  :   state.orderByTransaction
    }
}


export default connect(store, {
    getTransactionId, timeRun
})(Footer);
