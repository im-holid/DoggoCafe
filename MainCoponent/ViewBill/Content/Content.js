import React, { Component } from 'React';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image} from 'react-native';
import {NavigationEvents} from 'react-navigation'
import { connect } from 'react-redux';
import {getTransactionId, removeOrder, addOrder, clearCurrentOrder , clearOrder,getSubTotalAndQty, dismissOrderFilter, postItemsTransaction} from '../../../Src/Actions'
import Axios from 'axios'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import styles from './ContentStyle';
 


class Content extends Component {
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
            orientation :   isPortrait() ? 0 : 1,
            screenWidth :   Dimensions.get('window').width,
            a           :   true,
            orderTrigger:   0,
            
        }
    }
    
    

    postOrder=(item)=>{
        item.map((index)=>{
            this.props.postItemsTransaction(index.price*index.qty,this.props.transaction.tax,this.props.transaction.id)
            Axios.post(`${this.props.ipAdress}order`,{
                'menuID'        :   index.id,
                'transactionID' :   index.transactionID,
                'qty'           :   index.qty,
                'price'         :   index.price,
                'status'        :   0
            }).then((res)=>{
                
                setTimeout(() => {
                    Axios.patch(`${this.props.ipAdress}order/${res.data.messages}`,{
                        'status'    :   1
                    })
                }, 10000)
                
            }).catch((err)=>{
                console.log(err)
                
            })
        })
        
    }
    stopTimes=()=>{
        this.props.stopTimer()
    }

    filtering=(compare)=>{
        const showUndismiss = this.props.dismissOrder.reduce((value,filter)=>{
            compare.id==filter ?value = false:null
            return value
        },true)
        return showUndismiss
    }
    indicator=(value)=>{
        let x=0
        value.map((item)=>{
            item.status==1? x+=1:null
        })
        return x==0?false:x==value.length? true:false
    }

    goTo=(receivedData)=>{
        console.log(receivedData)
        return receivedData >= (this.state.screenWidth/14) ? 
        true : false
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
                //Potrait
            <View style={styles.parentContainer} >
                <NavigationEvents
                onWillFocus={() =>{
                    
                }}
                />
                <View style={styles.backButton}>
                    <TouchableOpacity 
                    onPress={()=>{
                        this.stopTimes()
                        this.props.navigation.navigate('ListMenus')}
                    }
                    style={styles.backTouchable} >
                        <AntDesign name='arrowleft' style={styles.back} />
                    </TouchableOpacity>
                    <Text style={styles.backText} >
                        Doggo Cafe
                    </Text>
                    
                    {this.indicator(this.props.orderByTransaction)?
                        this.props.orderByTransaction.length==this.props.dismissOrder.length?null:
                        (<TouchableOpacity 
                        onPress={()=>{
                            this.props.orderByTransaction.map((index)=>{
                                this.props.dismissOrderFilter(index.id,index.status)
                            })
                        }}
                        style={styles.dismissAll}>
                            <Text style={styles.dismissAllText} >
                                Dismiss All
                            </Text>
                        </TouchableOpacity>        )
                        : null
                    }  
                    
                </View>
                <ScrollView style={styles.scrollView} >
                    <View style={styles.scrollContainer} >
                    {/* Order From DB */}
                    {this.props.orderByTransaction.map((index,swipe=false)=>
                        this.filtering(index)? (

                            
                                   <ScrollView
                                   key={index.id}
                                   ref={(ref)=>{
                                    this.scrollContent=ref
                                    
                                    }}
                                   scrollEnabled={index.status==0?false:true}
                                   pagingEnabled={true}
                                   horizontal={true}
                                   decelerationRate={0.2}
                                   onScrollEndDrag={(value)=>{
                                    let data = value.nativeEvent.contentOffset.x
                                    data>=this.state.screenWidth/2?
                                    this.props.dismissOrderFilter(index.id,index.status):null
                                   }}
                                   scrollEventThrottle={10}
                                   showsHorizontalScrollIndicator={false}
                                   >
                                    <View  style={[styles.mapOrderContainer,{width:this.state.screenWidth}]}>
                                        <View>
                                            <Image style={styles.orderImage} source={{
                                                uri:this.props.menus[index.menuID-1].images
                                                }} />
                                        </View>
                                        <View style={styles.orderNamePriceContainer} >
                                            <Text style={styles.orderName} >{
                                                this.props.menus[index.menuID-1].name
                                            }</Text>
                                            <Text style={styles.orderPrice} >Total : Rp {this.currency(index.price*index.qty)}</Text>
                                        </View>
                                        <View style={styles.orderButtonContainer}>
                                            <View style={styles.orderMinusPlusContainer} >
                                            
                                                {index.status==0?null:
                                                
                                                (
                                                    <TouchableOpacity
                                                    onPress={()=>{
                                                        this.props.dismissOrderFilter(index.id,index.status)
                                                    }}
                                                    >    
                                                        <Text style={styles.orderText} >DISMISS</Text>
                                                    </TouchableOpacity>
                                                )}
                                                
                                            </View>
                                            <View style={styles.orderButton}>
                                                <Text style={styles.qty}>{
                                                    index.status==0? 'Cooking' : 'Sent'
                                                }</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View
                                    style={{width:(this.state.screenWidth)}}
                                    ></View>
                                    </ScrollView>

                        ):null
                    
                    )}

                        {/* Not yet ordered by users */}
                    {this.props.order.map((index,key)=>(
                            <View key={key} style={styles.mapOrderContainer}>
                                <View>
                                    <Image style={styles.orderImage} source={{uri:index.images}} />
                                </View>
                                <View style={styles.orderNamePriceContainer} >
                                    <Text style={styles.orderName} >{index.name}</Text>
                                    <Text style={styles.orderPrice} >Rp {this.currency(index.price)}</Text>
                                </View>
                                {this.state.orderTrigger!=0? null:(
                                <View style={styles.orderButtonContainer}>
                                    <View style={styles.orderMinusPlusContainer} >
                                        <TouchableOpacity
                                        onPress={()=>{
                                            this.props.removeOrder(index.id)
                                            this.props.getSubTotalAndQty((index.price*-1),-1)
                                            this.setState({a:1})
                                        }}
                                        >
                                            <AntDesign  name='minus' style={styles.orderMinusPlus} />
                                        </TouchableOpacity>
                                        <Text style={styles.qty} >{index.qty}</Text>
                                        <TouchableOpacity
                                         onPress={()=>{
                                            this.props.addOrder({...index,transactionID:this.props.transaction.id})
                                            this.props.getSubTotalAndQty(index.price,1)
                                            this.setState({x:1})
                                        }}
                                        >
                                                <AntDesign  name='plus' style={styles.orderMinusPlus} />
                                        </TouchableOpacity>
                                        
                                    </View>
                                    
                                    <TouchableOpacity 
                                    onPress={()=>{
                                        let x =[]
                                        x = [...x,index]
                                        this.setState({orderTrigger:4})
                                        this.orderTimer=setInterval(() => {
                                            this.setState({orderTrigger:this.state.orderTrigger-1})
                                            this.state.orderTrigger==0?
                                            (
                                                this.postOrder(x),
                                                this.props.clearCurrentOrder(index.id),
                                                this.setState({orderTrigger:0}),
                                                clearInterval(this.orderTimer)
                                            ):null
                                        }, 1000);
                                        
                                        

                                    }}
                                    style={styles.orderButton} >
                                        <Text style={styles.orderText} >ORDER</Text>
                                    </TouchableOpacity>
                                    
                                </View>
                                )}
                       </View>
                    
                    ))}
                        </View>
                </ScrollView>
                {this.props.order.length<=1&&this.state.orderTrigger==0?null:
                this.state.orderTrigger==0?
                (
                <TouchableOpacity
                onPress={()=>{
                    this.setState({orderTrigger:7})
                    this.orderTimer=setInterval(() => {
                        this.setState({orderTrigger:this.state.orderTrigger-1})
                        this.state.orderTrigger==0?
                        (
                            this.postOrder(this.props.order),
                            this.props.clearOrder(),
                            this.setState({orderTrigger:0}),
                            clearInterval(this.orderTimer)
                        ):null
                    }, 1000);

                    
                    
                }}
                style={styles.orderAll}
                >
                    <Text style={styles.orderAllText}>
                        ORDER ALL
                    </Text>
                </TouchableOpacity>
                ):(
                    <TouchableOpacity
                onPress={()=>{
                    clearInterval(this.orderTimer)
                    this.setState({orderTrigger:0})
                }}
                style={styles.orderAll}
                >

                    <Text style={styles.orderAllText}>
                        {this.state.orderTrigger}
                    </Text>
                    <Text style={styles.orderAllText}>
                        Cancel Order
                    </Text>
                </TouchableOpacity>
                )
            }
            </View>
                ):
            (

                //Landscape
            <View>
                <Text></Text>
            </View>
            )
            )
    }
}

store = (state) => {
    return {
        ipAdress            :   state.ipAdress,
        menus               :   state.menus,
        order               :   state.order,
        transaction         :   state.transactionToPost,
        orderByTransaction  :   state.orderByTransaction,
        dismissOrder        :   state.orderToDismiss
    }
}


export default connect(store, {
    getTransactionId, removeOrder, addOrder, clearCurrentOrder , clearOrder, getSubTotalAndQty, dismissOrderFilter, postItemsTransaction
})(Content);
