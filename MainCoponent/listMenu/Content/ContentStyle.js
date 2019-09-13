import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listMenu:{
      flexDirection     :'row',
      alignItems        :'center',
      justifyContent    :'space-around',
      marginHorizontal  :10,
      marginBottom      :10,
  },
        minus:{
            justifyContent      :'center',
            alignItems          :'center',
            backgroundColor     :'#322110',
            borderRadius        :10,
            shadowColor         : "#000",
            shadowOffset        : {
                width       :0,
                height      :-2,
                                },
            shadowOpacity       :0.8,
            shadowRadius        :3.84,
            elevation           :10,
        },
                addRemove:{
                    fontSize    :30,
                    fontWeight  :'bold',
                    color       :'#ad8925',
                    margin      :4,
                    textShadowColor: 'rgba(0, 0, 0, 0.2)',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowRadius: 10
                },
        childMenu:{
            alignItems      :'center',
            justifyContent  :'space-between',
            borderRadius    :10,
            padding         :10,
            backgroundColor :'#322110',
            shadowColor     : "#000",
            shadowOffset    : {
                width: 0,
                height: -2,
                            },
            shadowOpacity   : 0.8,
            shadowRadius    : 3.84,
            elevation       : 10,
        },
                imageMenu:{
                    width           :180,
                    height          :100,
                    borderRadius    :10
                },
                menuName : {
                    fontSize        :16,
                    color           : '#ad8925',
                    marginVertical  :5
                },
                menuPrice : {
                    fontSize    :14,
                    color       :'#ad8925'
                }
})

export default styles;