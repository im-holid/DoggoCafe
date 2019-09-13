import React, {Component} from 'React';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {StatusBar} from 'react-native'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './Src/Reducers'


import Orders from './MainCoponent/Home/Orders';
import ListMenus from './MainCoponent/listMenu/ListMenus';
import ViewBill from './MainCoponent/ViewBill/ViewBills'


const MainNavigator = createAppContainer(createStackNavigator({
    Home :{
      screen : ListMenus,
      navigationOptions :{
        header : null
      }
    },
    ListMenus :{
        screen : ListMenus,
        navigationOptions :{
          header : null
        }
    },
    ViewBill :{
      screen : ViewBill,
      navigationOptions :{
        header : null
      }
  },

}))








export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <StatusBar backgroundColor='#322110' barStyle='light-content' />
        <MainNavigator navigation={this.props.navigation} />
      </Provider>
    );
  }
}

