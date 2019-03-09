import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Header from '../components/Header';
import { RadioButton } from 'react-native-paper';
import localization from '../localization/localization';

import BG from '../../Imag/Artboard6/BG.png';
import ArrowRight from '../../Imag/Artboard6/ArrowRight.png';
import ArrowsS from '../../Imag/Artboard6/ArrowsS.png';
import ButtonBG from '../../Imag/Artboard1/ButtonBG.png';

class Artboard6 extends Component{

    constructor(props) {
        super()
        this.state = {
            ch: 2,
            times:[
                {id:0, dateGo:'الجمعة 25 يناير 2019', dateBack:'السبت 26 يناير 2019'},
                {id:1, dateGo:'الجمعة 25 يناير 2019', dateBack:'السبت 26 يناير 2019'},
                {id:2, dateGo:'الجمعة 25 يناير 2019', dateBack:'السبت 26 يناير 2019'},
            ]
        };
    }

    checked = 2;
    renderItemFlat ({item}){
        return (
        <View style={{width:wp('100%'), margin:hp('1%'), justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
            <View style={{borderRadius:wp('2%'), backgroundColor:'rgba(255,255,255,0.7)', borderColor:'#7E7560', borderWidth:wp('0.2%'), width:wp('42%'), justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:wp('4.2%'), color:'#7E7560', paddingTop:wp('1%'), fontWeight:'700'}}> {localization.travelDate} </Text>
                <Text style={{fontSize:wp('3.8%'), color:'black', paddingBottom:wp('1%'), fontWeight:'700'}}> {item.dateGo} </Text>
            </View>
            <View style={{borderRadius:wp('2%'), backgroundColor:'rgba(255,255,255,0.7)', borderColor:'#7E7560', borderWidth:wp('0.2%'), width:wp('42%'), justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:wp('4.2%'), color:'#7E7560', paddingTop:wp('1%'), fontWeight:'700'}}> {localization.arrivalDate} </Text>
                <Text style={{fontSize:wp('3.8%'), color:'black', paddingBottom:wp('1%'), fontWeight:'700'}}> {item.dateBack} </Text>
            </View>
            <RadioButton
            value={item.id}
            status={this.checked == item.id ? 'checked' : 'unchecked'}
            onPress={() => { 
                this.setState({ ch: item.id }); 
                this.checked = item.id;
            }}
            color='#A07531'
            />
        </View>
        )
    }
    
    render () {
        
         return (
            <ImageBackground source={BG}  style={styles.pageBG}>
                {/* HEADER */}
                <Header title={localization.travelDetails} backScreen="Hoom" drawer={true}/>
                
                
                    
                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('20%')}}>
                   
                <FlatList 
                    data={this.state.times}
                    renderItem={({item})=>this.renderItemFlat({item})}
                    extraData={this.state}
                    keyExtractor={item => toString(item.type)}
                    showsVerticalScrollIndicator={false}
                    // style={{height:hp('80%')}}
                    />
                    

                    
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:wp('30%'), height:hp('10%')}} onPress={()=>{this.props.navigation.navigate('Book1')}}>
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