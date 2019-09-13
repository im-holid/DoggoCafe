import React , {Component} from 'React';
import {View,TouchableOpacity} from 'react-native';
import TableOrder from './TableOrder';
import { connect } from 'react-redux';



class Orders extends Component{
    render(){
        
        
        return(
                
            
                <View style={{flex:1}}>
                    <TableOrder navigation={this.props.navigation}  />
                </View>
            )
    }
}

Storage = (state) => {
    return {
        tableNumber : state.tableNumber
    }
}


export default connect(Storage, null)(Orders);
