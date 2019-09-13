import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    footerContainer : {
        position:'absolute',
        bottom:10,
        left:70,
        right:70,
        paddingHorizontal:10,
        paddingVertical : 5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#140d06',
        shadowColor         : "#000",
        shadowOffset        : {
            width       :0,
            height      :-2,
                            },
        shadowOpacity       :0.9,   
        elevation           :20,
        borderRadius : 10,
    },
            items:{
                fontSize:15,
                color : '#ad8925'
            },
            icon:{
                fontSize:20,
                color: '#ad8925'
            }
    

})

export default styles;