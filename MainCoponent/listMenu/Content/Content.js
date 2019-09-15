import React, { Component } from 'React';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image} from 'react-native';
import styles from './ContentStyle'
import { connect } from 'react-redux';
import {loadMenuState, getMenus, getActiveMenu,addOrder,removeOrder,getSubTotalAndQty,scrollFooter,endScrollFooter} from '../../../Src/Actions'
import Axios from 'axios'
import {Icon} from 'native-base'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
 


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
            x:0,
            orientation: isPortrait() ? 0 : 1,
            date : '',
            screenWidth : Dimensions.get('window').width,
            scrollTriger : 0,
        }
    }
    

    componentDidMount() {
        
        
        Axios.get(`${this.props.ipAdress}menus`).then((res)=>{
            this.props.getMenus(res.data)
        }).then(()=>{
            setTimeout(()=>{
                this.props.loadMenuState()
            },3000)
            
        })

        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        this.setState({
            date:date + '/' + month + '/' + year + ' ' + hours + ':' + min
        })
        
    }
    componentDidUpdate(){
        !this.state.orientation?
        this.scrollContent.scrollTo({x:this.state.screenWidth*(this.props.activeMenu),animated:true})   : null
    }

   

    goTo=(receivedData)=>{
        receivedData == (this.state.screenWidth*2) ? this.props.getActiveMenu(2):
        receivedData == (this.state.screenWidth*1) ? this.props.getActiveMenu(1):
        receivedData == (this.state.screenWidth*0) ? this.props.getActiveMenu(0): null
        
        
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
            
            
            <View style={{flex:6.8,marginTop:10}} >
                <ScrollView
                style={{flex:1}}
                ref={(ref)=>{
                    this.scrollContent=ref
                    
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onScroll={(value)=>{
                    let data = value.nativeEvent.contentOffset.x
                    this.goTo(data)
                }}
                pagingEnabled={true}
                >
                    <ScrollView 
                    onScroll={()=>{
                        this.props.scrollFooter()
                    }}
                    onScrollBeginDrag={()=>this.props.endScrollFooter()}
                    onMomentumScrollEnd={()=>{
                        this.props.endScrollFooter()
                    }}
                    style={{
                        flex    :1,
                        width   :this.state.screenWidth
                        }}
                    >
                {this.props.menus.map((item,key)=>{
                return item.categoryId!=this.props.activeMenu ?
                (
                        <View style={styles.listMenu} key={key} >
                            <TouchableOpacity 
                            onPress={()=>{
                                this.props.removeOrder(item.id)
                                this.props.order.forEach((check)=>{
                                    check.id==item.id?
                                    this.props.getSubTotalAndQty((item.price*-1),-1):
                                    null
                                })
                                this.setState({x:1})
                            }}
                            style={styles.minus} >
                                <AntDesign style={styles.addRemove} name='minus' />
                            </TouchableOpacity>
                            <View style={styles.childMenu} >
                            {this.props.order.map((index,key)=>{    return index.id==item.id ?(
                                <Text key={key}
                                style={{backgroundColor:'#1e1409',fontSize:20,paddingHorizontal:4,borderRadius:10,marginRight:-160,marginBottom:-27,zIndex:20,color:'#ad8925'}}
                                >
                                {index.qty}
                                </Text>
                            ):null
                            })}
                                <Image style={styles.imageMenu} source={{uri:item.images}} />
                                <Text style={styles.menuName} >{item.name}</Text>
                                <Text style={styles.menuPrice} >Rp {this.currency(item.price)}</Text>
                            </View>
                            <TouchableOpacity 
                            onPress={()=>{
                                this.props.addOrder({...item,transactionID:this.props.transaction.id})
                                this.props.getSubTotalAndQty(item.price,1)
                                this.setState({x:1})
                            }}
                            style={styles.minus} >
                                <AntDesign style={styles.addRemove} name='plus' />
                            </TouchableOpacity>
                        </View>
                )
                :null
                })}
                    </ScrollView>


                    <ScrollView
                    onScroll={()=>{
                        this.props.scrollFooter()
                    }}
                    onScrollBeginDrag={()=>this.props.endScrollFooter()}
                    onMomentumScrollEnd={()=>{
                        this.props.endScrollFooter()
                    }}
                    style={{
                        flex    :1,
                        width   :this.state.screenWidth
                        }}
                    style={{
                        flex    :1,
                        width   :this.state.screenWidth
                        }}>
                            
                {this.props.menus.map((item,key)=>{
                    return item.categoryId==this.props.activeMenu ? (
                        <View style={styles.listMenu} key={key} >
                            <TouchableOpacity 
                            onPress={()=>{
                                this.props.removeOrder(item.id)
                                this.props.order.forEach((check)=>{
                                    check.id==item.id?
                                    this.props.getSubTotalAndQty((item.price*-1),-1):
                                    null
                                })
                                
                                this.setState({x:1})
                            }}
                            style={styles.minus} >
                                <AntDesign style={styles.addRemove} name='minus' />
                            </TouchableOpacity>
                            <View style={styles.childMenu} >
                            {this.props.order.map((index,key)=>{    return index.id==item.id ?(
                                <Text key={key}
                                style={{backgroundColor:'#140d06',color: '#ad8925',fontSize:20,paddingHorizontal:4,borderRadius:10,marginRight:-160,marginBottom:-27,zIndex:20}}
                                >{index.qty}</Text>
                            ):null
                            })}
                                <Image style={styles.imageMenu} source={{uri:item.images}} />
                                <Text style={styles.menuName} >{item.name}</Text>
                                <Text style={styles.menuPrice} >Rp {this.currency(item.price)}</Text>
                            </View>
                            <TouchableOpacity 
                            onPress={()=>{
                                this.props.addOrder({...item,transactionID:this.props.transaction.id})
                                this.props.getSubTotalAndQty(item.price,1)
                                this.setState({x:1})
                            }}
                            style={styles.minus} >
                                <AntDesign style={styles.addRemove} name='plus' />
                            </TouchableOpacity>
                        </View>
                    )
                :null
                
                })}
                    </ScrollView>
                    

                    <ScrollView
                    onScroll={()=>{
                        this.props.scrollFooter()
                    }}
                    onScrollBeginDrag={()=>this.props.endScrollFooter()}
                    onMomentumScrollEnd={()=>{
                        this.props.endScrollFooter()
                    }}
                    style={{
                        flex    :1,
                        width   :this.state.screenWidth
                        }}
                    style={{
                        flex    :1,
                        width   :this.state.screenWidth
                        }}>
                            
                {this.props.menus.map((item,key)=>{
                    return item.categoryId==this.props.activeMenu ? (
                        <View style={styles.listMenu} key={key} >
                            <TouchableOpacity 
                            onPress={()=>{
                                this.props.removeOrder(item.id)
                                this.props.order.forEach((check)=>{
                                    check.id==item.id?
                                    this.props.getSubTotalAndQty((item.price*-1),-1):
                                    null
                                })
                                
                                this.setState({x:1})
                            }}
                            style={styles.minus} >
                                <AntDesign style={styles.addRemove} name='minus' />
                            </TouchableOpacity>
                            <View style={styles.childMenu} >
                            {this.props.order.map((index,key)=>{    return index.id==item.id ?(
                                <Text key={key}
                                style={{backgroundColor:'#140d06',color: '#ad8925',fontSize:20,paddingHorizontal:4,borderRadius:10,marginRight:-160,marginBottom:-27,zIndex:20}}
                                >{index.qty}</Text>
                            ):null
                            })}
                                <Image style={styles.imageMenu} source={{uri:item.images}} />
                                <Text style={styles.menuName} >{item.name}</Text>
                                <Text style={styles.menuPrice} >Rp {this.currency(item.price)}</Text>
                            </View>
                            <TouchableOpacity
                            onPress={()=>{
                                this.props.addOrder({...item,transactionID:this.props.transaction.id})
                                this.props.getSubTotalAndQty(item.price,1)
                                this.setState({x:1})
                            }}
                            style={styles.minus} >
                                <AntDesign style={styles.addRemove} name='plus' />
                            </TouchableOpacity>
                        </View>
                    )
                :null
                
                })}
                    </ScrollView>

                  
                </ScrollView>
            </View>
            
            )
            
            :
            
            
            (
                //Landscape
                <View>
                    <Text>Landscape</Text>
                </View>
            )
        )}
}

Storage = (state) => {
    return {
        ipAdress    :state.ipAdress,
        menus       :state.menus,
        activeMenu  :state.activeMenu,
        order       :state.order,
        transaction :state.transactionToPost
    }
}


export default connect(Storage, {
    loadMenuState, getMenus, getActiveMenu, addOrder, removeOrder, getSubTotalAndQty, scrollFooter, endScrollFooter
})(Content);
