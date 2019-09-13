import React, { Component } from 'React';
import { View, Text, TouchableOpacity, Image,Dimensions } from 'react-native';
import { connect } from 'react-redux';
import {timeRun,getCategories,getActiveMenu} from '../../../Src/Actions'
import Axios from 'axios'
import styles from './HeaderStyle';


class Header extends Component{
    constructor(props){
        super(props)
        this.props.tableNumber.number==0?
        this.props.navigation.navigate('Orders'):null

        

        const isPortrait = () => {
            const dim = Dimensions.get('screen');
            return dim.height >= dim.width;
          };
      
          // orientation changes
          Dimensions.addEventListener('change', () => {
            this.setState({
              orientation: isPortrait() ? 0 : 1
            });
          });

        this.state={
            orientation: isPortrait() ? 0 : 1,   
        }}

    componentDidMount(){
        

        Axios.get(`${this.props.ipAdress}categories`).then((res)=>{
            this.props.getCategories(res.data)
        })
    }
    componentWillUnmount(){
        
    }
    


    render(){
        
        
        return (
            !this.state.orientation ? (
                // Potrait
            <View style={styles.headContainer} >
                
                
                <View style={styles.flex1Container}>
                    
                    <View style={styles.tableAndTimeContainer} >
                        <Text style={styles.tableAndTime} >
                        Table Number #{this.props.tableNumber.number}
                        </Text>
                        <Image source={require('../../../assets/inu.png')} style={styles.logo} />
                        <Text style={styles.tableAndTime} >
                        Time Spent  {
                            Math.floor(this.props.times.time/60)<10?
                            '0'+Math.floor(this.props.times.time/60):
                            Math.floor(this.props.times.time/60)} 
                            :
                            {(this.props.times.time-(Math.floor(this.props.times.time/60)*60))<10?
                            '0'+(this.props.times.time-(Math.floor(this.props.times.time/60)*60)):
                            this.props.times.time-(Math.floor(this.props.times.time/60)*60)    
                        }
                        </Text>
                    </View>
                    
                    <View style={styles.logoContainer} >
                        <Text style={styles.logoText}>
                            Doggo Cafe
                        </Text>
                    </View>

                    <View style={styles.menuContainer} >
                        <TouchableOpacity 
                        onPress={()=>this.props.getActiveMenu(0)}
                        style={styles.childMenus} 
                        >
                            <Text 
                            style={this.props.activeMenu==0?
                                styles.menuTextActive:
                                styles.menuText
                            } 
                            >
                                All Menus
                            </Text>
                        </TouchableOpacity>
                        {this.props.categories.map((item)=>(
                            <TouchableOpacity 
                            key={item.id}
                            onPress={()=>this.props.getActiveMenu(item.id)}
                            style={styles.childMenus}
                            >
                                <Text 
                                style={this.props.activeMenu==item.id?
                                    styles.menuTextActive:
                                    styles.menuText
                                }
                                >
                                    {item.name}s
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                </View>
            </View>
        ):(
            // Landscape
            <View>
                <Text>
                    Landscape
                </Text>
            </View>
        ))
    }
}
reducerStore = (state) => {
    return {
        ipAdress        :state.ipAdress,
        tableNumber     : state.tableNumber,
        times           : state.times,
        categories      : state.categories,
        activeMenu      : state.activeMenu,
    }
}


export default connect(reducerStore, 
    {timeRun,getCategories,getActiveMenu}
    )
    (Header);