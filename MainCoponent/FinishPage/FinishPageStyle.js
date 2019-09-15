import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    parentContainer : {
        flex:1,
        backgroundColor:'#140d06',
    },
            mainComponent:{
                alignItems:'center',
                justifyContent:'center',
            },
                    textBottom:{
                        color : '#ad8925',
                        fontWeight : 'bold',
                        textShadowColor: 'rgba(61, 48, 13, 0.2)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10
                    }
})

export default styles;