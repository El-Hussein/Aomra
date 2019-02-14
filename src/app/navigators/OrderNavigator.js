// Order Nav for insert an order it's stack nav with following..
// first Book, then order_recipt, then payment_method and finally thanks screen 

import { createStackNavigator } from 'react-navigation';

import Book from '../pages/Book';
import Thanks from '../pages/Thanks';
import Payment from '../pages/Payment';
import Order_Recipt from '../pages/Order_Recipt';


export default OrderNavigator = createStackNavigator(
    {
        Book: {
            screen: Book,
            navigationOption:{
                title:"Book", 
            }
        },
        Order_Recipt: {
            screen: Order_Recipt,
            navigationOption:{
                title:"Order_Recipt", 
            }
        },
        Payment: {
            screen: Payment,
            navigationOption:{
                title:"Payment", 
            }
        },
        Thanks: {
            screen: Thanks,
            navigationOption:{
                title:"Thanks", 
            }
        },
    },
    {
        navigationOptions:{
            header: null,
        }
    }
)