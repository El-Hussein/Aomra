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

import BG from '../../Imag/Artboard6/BG.png';
import ArrowRight from '../../Imag/Artboard6/ArrowRight.png';
import ArrowsS from '../../Imag/Artboard6/ArrowsS.png';
import ButtonBG from '../../Imag/Artboard1/ButtonBG.png';

class Artboard6 extends Component{

    constructor(props) {
         super()
    }
    render () {
         return (
            <ImageBackground source={BG}  style={styles.pageBG}>
                {/* HEADER */}
                <Header title={localization.travelDetails} backScreen="Hoom" drawer={true}/>
                
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <View style={{marginTop:hp('2%'), borderColor:'#7E7560', borderWidth:wp('0.2%'), width:wp('84%'), height:hp('5%'), flexDirection:'row'}}>                   
                        <TouchableOpacity disabled={true} style={{flexDirection:'row', width:wp('42%'), height:hp('4.9%'), backgroundColor:'rgba(152, 145, 128, 0.7)', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{textAlignVertical:'center', textAlign:'center', fontSize:wp('4%'), fontWeight:'500', color:'white'}}> {localization.goingComingBack} </Text>
                            <Image source={ArrowsS} style={{width:wp('5%'), height:wp('5%'), resizeMode:'contain'}}/>                        
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row', width:wp('42%'), height:hp('4.9%'), backgroundColor:'rgba(255, 255, 255, 0.7)', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{textAlignVertical:'center', textAlign:'center', fontSize:wp('4%'), fontWeight:'500', color:'#989180'}}> {localization.going} </Text>
                            <Image source={ArrowRight} style={{width:wp('5%'), height:wp('5%'), resizeMode:'contain', transform:[{rotateZ:I18nManager.isRTL?'180deg':'0deg'}]}}/>                        
                        </TouchableOpacity>
                    </View>
                </View>
                    
                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('1%')}}>
                   
                    <View style={{width:wp('84%'), justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                        <View style={{borderRadius:wp('2%'), backgroundColor:'rgba(255,255,255,0.7)', borderColor:'#7E7560', borderWidth:wp('0.2%'), width:wp('42%'), justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:wp('4.2%'), color:'#7E7560', paddingTop:wp('2%'), fontWeight:'700'}}> {localization.goingFrom}  </Text>
                            <TextInput
                                style={{fontSize:wp('4.5%'), color:'black', paddingBottom:wp('2%'), fontWeight:'700'}}
                                placeholder=""
                                value='الرياض'
                                autoCorrect={false}
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{borderRadius:wp('2%'), backgroundColor:'rgba(255,255,255,0.7)', borderColor:'#7E7560', borderWidth:wp('0.2%'), width:wp('42%'), justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:wp('4.2%'), color:'#7E7560', paddingTop:wp('2%'), fontWeight:'700'}}> {localization.backTo} </Text>
                            <TextInput
                                style={{fontSize:wp('4.5%'), color:'black', paddingBottom:wp('2%'), fontWeight:'700'}}
                                placeholder=""
                                value='المدينة'
                                autoCorrect={false}
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{borderRadius:wp('4%'), position:'absolute', justifyContent:'center', alignItems:'center', backgroundColor:'#7E7560', width:wp('8%'), height:wp('8%')}}>
                            <Image source={ArrowsS} style={{resizeMode:'contain', width:wp('6.5%'), height:wp('6.5%')}}/>
                        </View>
                    </View>

                    <View style={{borderRadius:wp('2%'), marginTop:hp('1%'), backgroundColor:'rgba(255,255,255,0.7)', borderColor:'#7E7560', borderWidth:wp('0.2%'), width:wp('84%'), justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:wp('4.2%'), color:'#7E7560', paddingTop:wp('1%'), fontWeight:'700'}}> {localization.numberOfPersons} </Text>
                        <Text style={{fontSize:wp('4.2%'), color:'black', paddingBottom:wp('1%'), fontWeight:'700'}}> فرد واحد </Text>
                    </View>
                       
                    <View style={{width:wp('84%'), margin:hp('1%'), justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                        <TouchableOpacity style={{borderRadius:wp('2%'), backgroundColor:'rgba(255,255,255,0.7)', borderColor:'#7E7560', borderWidth:wp('0.2%'), width:wp('42%'), justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:wp('4.2%'), marginBottom:hp('3.5%'), color:'#7E7560', paddingTop:wp('1%'), fontWeight:'700'}}> {localization.specialDicount} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderRadius:wp('2%'), backgroundColor:'rgba(255,255,255,0.7)', borderColor:'#7E7560', borderWidth:wp('0.2%'), width:wp('42%'), justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:wp('4.2%'), marginBottom:hp('3.5%'), color:'#7E7560', paddingTop:wp('1%'), fontWeight:'700'}}> {localization.Promocode} </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:wp('30%'), height:hp('10%')}} onPress={()=>{alert('if user is already signed in go on else navigate to login page.');this.props.navigation.navigate('Payment')}}>
                            <Image source={ButtonBG} style={{width:wp('30%'), height:hp('10%'), right:wp('0%'), top:hp('0%'), resizeMode:'contain', justifyContent:'center', position:'absolute'}}/>
                                <View>
                                <Text style={styles.buttonText}> {localization.agree} </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                    


            </ImageBackground>
         )
    }
}

export default Artboard6

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
    logo:{
        width:wp('65%'), 
        height:hp('15%'), 
        resizeMode:'contain'
    },
    inputBorder:{
        backgroundColor:'white', 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center', 
        borderWidth:wp('0.3%'), 
        borderRadius:wp('4%'), 
        borderColor:'#F4906B', 
        marginBottom:hp('1.5%'), 
        paddingHorizontal:wp('2%')
    },
    textInput:{
        width:wp('70%'), 
        padding:0, 
        height:hp('5.5%'), 
        paddingHorizontal:wp('2%'), 
        fontSize:wp('4%'), 
        fontWeight:'600', 
        color:'#A3A3A3'
    },
    buttonText:{
        color:'white', 
        textAlign:'center', 
        fontSize:wp('4.5%'), 
        fontWeight:'600'
    },
    social:{
        width:wp('12%'), 
        height:wp('12%'), 
        resizeMode:'contain'
    },
    pageBG:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    }
});