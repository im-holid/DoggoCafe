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

    currency=(x)=>{
        let a = x //12.345.678.910
        let b =a
        let c =[]
        let d =''
        while (b>=1000) {
            c = [b%1000,...c]
            b = Math.floor(b/1000)
        }
        c = [b,...c]
        if(c.length==1){
            d = d+`${c[0]}`
        }else{
            d = d+`${c[0]}`
        for(let i=1;i<c.length;i++){
            c[i]<10?  d=d+`.00${c[i]}`:
            c[i]<100? d=d+`.0${c[i]}`:
            d = d+`.${c[i]}`
        }}
        return d
    }

   
    render() {
        
        return (
            !this.state.orientation ? (  
            <View style={styles.mainContainer} >
                <View style={styles.textContainer} >
                    <View style={[styles.textChildContainer,{borderBottomWidth:1}]}>
                        <Text style={styles.totalText}>Estimation + Tax</Text>
                        <Text style={styles.equalText}>=</Text>
                        <Text style={styles.amountText}>Rp {this.currency(this.props.transaction.subTotal+(this.props.transaction.subTotal*this.props.transaction.tax))}</Text>
                    </View>
                    <View style={styles.textChildContainer}>
                        <Text style={styles.totalText}>Sub Total</Text>
                        <Text style={styles.equalText}>=</Text>
                        <Text style={styles.amountText}>Rp {this.currency(this.props.postTransaction.subTotal)}</Text>
                    </View>
                    <View style={styles.textChildContainer}>
                        <Text style={styles.totalText}>Tax 10%</Text>
                        <Text style={styles.equalText}>=</Text>
                        <Text style={styles.amountText}>Rp {this.currency(this.props.postTransaction.tax)}</Text>
                    </View>
                    <View style={styles.textChildContainer}>
                        <Text style={styles.totalText}>Total</Text>
                        <Text style={styles.equalText}>=</Text>
                        <Text style={styles.amountText}>Rp {this.currency(this.props.postTransaction.total)}</Text>
                    </View>
                </View>
                {this.props.orderByTransaction.length==0?null:(
                <TouchableOpacity 
                onPress={()=>{
                    this.unMountAll()
                    this.props.navigation.navigate('FinishPage')
                }}
                style={styles.callBillContainer} >
                    <Text style={styles.callBillText}>Call Bill</Text>
                </TouchableOpacity>
                )}
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
        transaction         :   state.transactionToPost,
        orderDB             :   state.orderFromDBReducer,
        postTransaction     :   state.postTransaction,
        orderByTransaction  :   state.orderByTransaction,
    }
}


export default connect(store, {
    getTransactionId
})(Footer);
