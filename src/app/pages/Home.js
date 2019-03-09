import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
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
import Header from '../components/Header';
import localization from '../localization/localization';

// import Menu from '../../Imag/Artboard1/Menu.png';
// import Back from '../../Imag/Artboard1/Back.png';
import BG from '../../Imag/Artboard5/BG.png';
import ButtonBGO from '../../Imag/Artboard5/ButtonBGO.png';
import ButtonBGS from '../../Imag/Artboard5/ButtonBGS.png';
import ButtonBGG from '../../Imag/Artboard5/ButtonBGG.png';
import Arrow from '../../Imag/Artboard5/Arrow.png';

class Artboard5 extends Component{

    constructor(props) {
         super()
    }

    render () {
         return (
            <ImageBackground source={BG}  style={styles.pageBG}>
                {/* HEADER */}
                <Header title=" " backScreen="SignIn" drawer={true}/>
                {/* <View style={styles.header}>
                    <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('SignIn')}}>
                        <Image source={Back} style={styles.image4_5}/>
                    </TouchableOpacity>
                    <View style={styles.rowCenter}>
                        <Text style={styles.textHeader}> </Text>
                        <TouchableOpacity  onPress={()=>{this.props.navigation.toggleDrawer()}}>
                            <Image source={Menu} style={styles.image6_5}/>
                        </TouchableOpacity>
                    </View>
                </View> */}

                <View style={{marginHorizontal:wp('15%'), marginVertical:wp('14%'), justifyContent:'center', alignItems:'center'}}>

                    <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('OrderNav')}}>
                        <Image source={ButtonBGO} style={{position:'absolute', right:wp('0%'), width:wp('66.5%'), height:hp('13.4%'), resizeMode:'contain', opacity:0.9}}/>
                        <View style={{justifyContent:'center', alignItems:'center', width:wp('66.5%'), height:hp('13.4%'), marginBottom:hp('5%'),}}>
                                <Text style={{color:'white', fontSize:wp('7%'), fontWeight:'bold'}}>{localization.ordinary}</Text>
                                <Text style={{color:'black', fontSize:wp('4%'), fontWeight:'bold'}}>{localization.ordinaryDesc}</Text>
                                <Image source={Arrow} style={{position:'relative', top:hp('-4.5%'), left:wp('-26%'), width:wp('3%'), height:wp('3%'), resizeMode:'contain', transform:[{rotateZ:I18nManager.isRTL?'180deg':'0deg'}]}}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('OrderNav')}}>
                        <Image source={ButtonBGS} style={{position:'absolute', right:wp('0%'), width:wp('66.5%'), height:hp('13.4%'), resizeMode:'contain', opacity:0.9}}/>
                        <View style={{justifyContent:'center', alignItems:'center', width:wp('66.5%'), height:hp('13.4%'), marginBottom:hp('5%'),}}>
                            <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'white', fontSize:wp('7%'), fontWeight:'bold'}}>{localization.classic}</Text>
                                <Text style={{color:'black', fontSize:wp('4%'), fontWeight:'bold'}}>{localization.classicDesc}</Text>
                                <Image source={Arrow} style={{position:'relative', top:hp('-4.5%'), left:wp('-26%'), width:wp('3%'), height:wp('3%'), resizeMode:'contain', transform:[{rotateZ:I18nManager.isRTL?'180deg':'0deg'}]}}/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('OrderNav')}}>
                        <Image source={ButtonBGG} style={{position:'absolute', right:wp('0%'), width:wp('66.5%'), height:hp('13.4%'), resizeMode:'contain', opacity:0.9}}/>
                        <View style={{justifyContent:'center', alignItems:'center', width:wp('66.5%'), height:hp('13.4%'), marginBottom:hp('5%'),}}>
                            <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'white', fontSize:wp('7%'), fontWeight:'bold'}}>{localization.gold}</Text>
                                <Text style={{color:'black', fontSize:wp('4.0%'), fontWeight:'bold', height:hp('3%')}}>{localization.excellent}</Text>
                                <Text style={{color:'black', fontSize:wp('4.0%'), fontWeight:'bold', height:hp('3%')}}>{localization.goldDesc}</Text>
                                <Image source={Arrow} style={{position:'relative', top:hp('-5.5%'), left:wp('-26%'), width:wp('3%'), height:wp('3%'), resizeMode:'contain', transform:[{rotateZ:I18nManager.isRTL?'180deg':'0deg'}]}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                </View>

            </ImageBackground>
         )
    }
}

export default Artboard5

const styles = StyleSheet.create({
    header:{
        height:hp('7%'),
        backgroundColor:"#A07532",
        justifyContent:'space-between',
        alignItems:'center',
        padding:wp('5%'),
        flexDirection:'row'
    },
    image4_5:{
        width:wp('4.5%'), 
        height:wp('4.5%'), 
        resizeMode:'contain'
    },
    rowCenter:{
        justifyContent:'center', 
        alignItems:'center', 
        flexDirection:'row'
    },
    textHeader:{
        color:'white', 
        fontSize:wp('4.5%'), 
        marginHorizontal:wp('3%'), 
        fontWeight:'bold'
    },
    image6_5:{
        width:wp('6.5%'), 
        height:wp('6.5%'), 
        resizeMode:'contain'
    },
    pageBG:{
        flex: 1,
        resizeMode: 'stretch',
    },
    package:{
        width:wp('68%'),
        height:hp('12%'),
        resizeMode:'contain',
        marginBottom:hp('4%'),
    }
});