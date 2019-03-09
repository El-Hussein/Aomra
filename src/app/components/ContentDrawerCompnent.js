import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    I18nManager
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

import localization from '../localization/localization';

import DrawerBGBottom from '../../Imag/Artboard11/DrawerBGBottom.png';
import DrawerBGTop from '../../Imag/Artboard11/DrawerBGTop.png';
import Body from '../../Imag/Artboard11/Body.png';

class Artboard3 extends Component{

    constructor(props) {
         super();
         this.state= {
             list:[
                 {name:localization.home, icon:require('../../Imag/Artboard11/Home.png'), active:true, link:'Home'},
                 {name:localization.profile, icon:require('../../Imag/Artboard11/Profile.png'), active:false, link:'Profile'},
                 {name:localization.books, icon:require('../../Imag/Artboard11/Books.png'), active:false, link:'Books'},
                 {name:localization.settings, icon:require('../../Imag/Artboard11/Settings.png'), active:false, link:'Settings'},
                 {name:localization.termsConditions, icon:require('../../Imag/Artboard11/Conditions.png'), active:false, link:'Conditions'},
                 {name:localization.callUs, icon:require('../../Imag/Artboard11/Call.png'), active:false, link:'Call_Us'},
                 {name:localization.exit, icon:require('../../Imag/Artboard11/Exit.png'), active:false, link:'Exit'},
             ]
         }
    }

    render () {
        mar = !I18nManager.isRTL?{left:wp('-15%')}:{right:wp('-15%')}
        return (
            <View>
                <Image source={DrawerBGBottom} style={[{width:wp('100%'), height:hp('100%'), zIndex:-1, position:'absolute'}, mar]}/>
                <ImageBackground source={DrawerBGTop}  style={{height:hp('25%'), width:wp('85%'), resizeMode: 'contain', justifyContent:'center', alignItems:'center'}}>
                    <Image source={Body} style={{width:'18%', height:wp('15.5%'), borderRadius:wp('10%'), backgroundColor:'red', marginBottom:wp('1%')}}/>
                    <Text style={{fontWeight:'bold', fontSize:wp('4.2%'), color:'black'}}> محمد عبدالله إبراهيم </Text>
                    <Text style={{fontWeight:'bold', fontSize:wp('4.2%'), color:'white'}}> الرياض </Text>
                </ImageBackground>
                
                <View style={{marginTop:hp('1.5%')}}>
                    <FlatList 
                    data={this.state.list}
                    renderItem={({item}) =>{
                        if(item.active){
                            activeStyle=StyleSheet.create({
                                AC:{backgroundColor:'#EDEDED'}
                            });
                        }else{
                            activeStyle=StyleSheet.create({
                                AC:{}
                            });
                        }
                        return (
                        <TouchableOpacity disabled={item.active} onPress={()=>this.props.navigation.navigate(item.link)} style={[{justifyContent:'center', flexDirection:'row', alignItems:'center', height:hp('7.5%'), width:wp('100%')}, activeStyle.AC]}>
                            <Text style={{fontWeight:'bold', fontSize:wp('4.5%'), color:'black', textAlign:'right', width:wp('55%')}}> {item.name} </Text>
                            <Image source={item.icon} style={{width:wp('5%'), height:wp('4%'), resizeMode:'contain', paddingHorizontal:wp('10%')}}/>
                        </TouchableOpacity>
                        )
                    }
                    }
                    keyExtractor={item => toString(item.name)}
                    />
                </View>

            </View>
         )
    }
}

export default Artboard3
