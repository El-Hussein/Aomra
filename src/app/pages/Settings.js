import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Header from '../components/Header';
import localization from '../localization/localization';

import BG from '../../Imag/Artboard2/BG.png';
import Logo from '../../Imag/Artboard2/Logo.png';
import Name from '../../Imag/Artboard2/Name.png';
import Email from '../../Imag/Artboard2/Email.png';
import Country from '../../Imag/Artboard2/Country.png';
import City from '../../Imag/Artboard2/City.png';
import Address from '../../Imag/Artboard2/Address.png';
import Phone from '../../Imag/Artboard2/Phone.png';
import Lock from '../../Imag/Artboard2/Lock.png';
import ButtonBG from '../../Imag/Artboard1/ButtonBG.png';
import Edit from '../../Imag/Artboard14/Edit.png';


class Artboard2 extends Component{

    constructor(props) {
        super()
        this.state={
            userInfo:{
                name:'محمد عبدالله إبراهيم',
                email:'mohamedabdallah@gmail.com',
                country:'مصر',
                city:'القليوبية',
                address:'طوخ',
                phone:'01023239809',
                password:'الحسين123456',
            }
        }
    }
    render () {
         return (
            <ImageBackground source={BG}  style={styles.pageBG}>
                {/* HEADER */}
                <Header title={localization.signIn} backScreen="Home" drawer={true}/>
                
                
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image source={Logo} style={styles.logo}/>
                </View>
                <SafeAreaView>
                    <View style={{marginHorizontal:wp('10%')}}>
                        <View style={styles.inputBorder} >
                            <Image source={Edit} style={styles.image4}/>  
                            <TextInput
                                style={styles.textInput}
                                placeholder={localization.userName}
                                value={this.state.userInfo.name}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="username"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                            />
                            <Image source={Name} style={styles.image4_5}/>
                        </View>

                        <View style={styles.inputBorder} >
                            <Image source={Edit} style={styles.image4}/> 
                            <TextInput
                                style={styles.textInput}
                                placeholder={localization.email}
                                value={this.state.userInfo.email}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="email"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                            />
                            <Image source={Email} style={styles.image4_5}/>
                        </View>
                        
                        <View style={styles.inputBorder} >
                            <Image source={Edit} style={styles.image4}/> 
                            <TextInput
                                style={styles.textInput}
                                placeholder={localization.country}
                                value={this.state.userInfo.country}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="country"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                            />
                            <Image source={Country} style={styles.image4_5}/>
                        </View>

                        <View style={styles.inputBorder} >
                            <Image source={Edit} style={styles.image4}/> 
                            <TextInput
                                style={styles.textInput}
                                placeholder={localization.city}
                                value={this.state.userInfo.city}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="city"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                            />
                            <Image source={City} style={styles.image4_5}/>
                        </View>

                        <View style={styles.inputBorder} >
                            <Image source={Edit} style={styles.image4}/> 
                            <TextInput
                                style={styles.textInput}
                                placeholder={localization.address}
                                value={this.state.userInfo.address}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="address"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                            />
                            <Image source={Address} style={styles.image4_5}/>
                        </View>

                        <View style={styles.inputBorder} >
                            <Image source={Edit} style={styles.image4}/> 
                            <TextInput
                                style={styles.textInput}
                                placeholder={localization.phoneNumber}
                                value={this.state.userInfo.phone}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="phone"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                            />
                            <Image source={Phone} style={styles.image4_5}/>
                        </View>

                        <View style={styles.inputBorder} >
                            <Image source={Edit} style={styles.image4}/> 
                            <TextInput
                                style={styles.textInput}
                                placeholder={localization.password}
                                value={this.state.userInfo.password}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="password"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                                secureTextEntry={true}
                            />
                            <Image source={Lock} style={styles.image4_5}/>
                        </View>

                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:wp('30%'), height:hp('10%')}}>
                                <Image source={ButtonBG} style={{width:wp('30%'), height:hp('10%'), right:wp('0%'), top:hp('0%'), resizeMode:'contain', justifyContent:'center', position:'absolute'}}/>
                                <View>
                                    <Text style={styles.buttonText}> {localization.agree} </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>

            </ImageBackground>
         )
    }
}

export default Artboard2

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
    image4:{
        width:wp('3.5%'), 
        height:wp('3.5%'), 
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
        width:wp('16%'), 
        height:hp('11%'), 
        margin:wp('1%')
    },
    inputBorder:{
        backgroundColor:'white', 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center', 
        borderWidth:wp('0.3%'), 
        borderRadius:wp('4%'), 
        borderColor:'#C8AF88', 
        marginBottom:hp('1.5%'), 
        paddingHorizontal:wp('2%'),
        height:hp('6%'),
    },
    textInput:{
        width:wp('64%'), 
        padding:0, 
        height:hp('5.5%'), 
        paddingHorizontal:wp('2%'), 
        fontSize:wp('4%'), 
        fontWeight:'600', 
        color:'black',
        textAlign:'right'
    },
    buttonText:{
        color:'white', 
        textAlign:'center', 
        fontSize:wp('5%'), 
        fontWeight:'600'
    },
    pageBG:{
        flex: 1,
        resizeMode: 'stretch',
    }
});