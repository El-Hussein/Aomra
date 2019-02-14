// Auth nav with 2 pages sign in and register

import { createStackNavigator } from 'react-navigation';

import SignIn from '../pages/SignIn';
import Register from '../pages/Register';


export default AuthNavigator = createStackNavigator(
    {
        SignIn: {
            screen: SignIn,
            navigationOption:{
                title:"SignIn", 
            }
        },
        Register: {
            screen: Register,
            navigationOption:{
                title:"Register",
                header: null, 
            }
        },
    },
    {
        navigationOptions:{
            header: null,
        }
    }
)