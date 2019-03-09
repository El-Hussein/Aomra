// Drawer Nav for all links with default home page 
// profile, books, settings, conditions, call_us, exit

import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import {
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {I18nManager} from 'react-native';
import Home from '../pages/Home';
// import Profile from '../pages/Profile';
import Books from '../pages/Books';
import Settings from '../pages/Settings';
import ContentDrawerComponent from '../components/ContentDrawerCompnent';
import Conditions from '../pages/Conditions';
import Call_Us from '../pages/Call_Us';
// import Exit from '../pages/Exit';

import OrderNav from '../navigators/OrderNavigator';

export default RootNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Home,
            navigationOption:{
                title:"Home",
                header: null, 
            }
        },
        Profile: {
            screen: Settings,
            navigationOption:{
                title:"Profile", 
            }
        },
        Books: {
            screen: Books,
            navigationOption:{
                title:"Books", 
            }
        },
        Settings: {
            screen: Settings,
            navigationOption:{
                title:"Settings", 
            }
        },
        Exit: {
            screen: Conditions,
            navigationOption:{
                title:"Exit", 
            }
        },
        Call_Us: {
            screen: Call_Us,
            navigationOption:{
                title:"Call_Us", 
            }
        },
        Conditions: {
            screen: Conditions,
            navigationOptions: {
                title:'Conditions'
            }
        },
        
        
        OrderNav: {
            screen: OrderNav,
            navigationOptions: {
                title:'OrderNav'
            }
        },
    },
    {
        showsVerticalScrollIndicator: true,
        contentComponent:props => <ContentDrawerComponent {...props}/> ,
        drawerPosition: !I18nManager.isRTL? 'right':'left',
        drawerWidth:wp('85%'),
    }
)
