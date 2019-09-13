import React, { Component } from 'React';
import { View, Text, ScrollView, TouchableOpacity, Dimensions,Modal} from 'react-native';
import { connect } from 'react-redux';
import {getTransactionId} from '../../../Src/Actions'
import Axios from 'axios'
import {Icon} from 'native-base'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import styles from './FooterStyle';
 


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
    
    unMountAll=()=>{
        this.props.stopTimer()
    }

   
    render() {
        
        return (
            !this.state.orientation ? (  
            <View style={styles.mainContainer} >
                <View style={styles.textContainer} >
                    <View style={[styles.textChildContainer,{borderBottomWidth:1}]}>
                        <Text style={styles.totalText}>Estimation + tax</Text>
                        <Text style={styles.equalText}>=</Text>
                        <Text style={styles.amountText}>{this.props.transaction.subTotal+(this.props.transaction.subTotal*this.props.transaction.tax)}</Text>
                    </View>
                    <View style={styles.textChildContainer}>
                        <Text style={styles.totalText}>Sub Total</Text>
                        <Text style={styles.equalText}>=</Text>
                        <Text style={styles.amountText}>{this.props.postTransaction.subTotal}</Text>
                    </View>
                    <View style={styles.textChildContainer}>
                        <Text style={styles.totalText}>Tax 10%</Text>
                        <Text style={styles.equalText}>=</Text>
                        <Text style={styles.amountText}>{this.props.postTransaction.tax}</Text>
                    </View>
                    <View style={styles.textChildContainer}>
                        <Text style={styles.totalText}>Total</Text>
                        <Text style={styles.equalText}>=</Text>
                        <Text style={styles.amountText}>{this.props.postTransaction.total}</Text>
                    </View>
                </View>
                <TouchableOpacity 
                onPress={()=>{
                    this.unMountAll()
                }}
                style={styles.callBillContainer} >
                    <Text style={styles.callBillText}>Call Bill</Text>
                </TouchableOpacity>
            </View>
                ):
            (
            <View>

            </View>
            )
            )
    }
}

store = (state) => {
    return {
        transaction     :   state.transactionToPost,
        orderDB         :   state.orderFromDBReducer,
        postTransaction :   state.postTransaction
    }
}


export default connect(store, {
    getTransactionId
})(Footer);
