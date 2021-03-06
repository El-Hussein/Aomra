/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// import Artboard1 from './app/pages/Artboard1';
// import Artboard2 from './app/pages/Artboard2';
// import Artboard3 from './app/pages/Artboard3';
// import Artboard4 from './app/pages/Artboard4';
// import Artboard5 from './app/pages/Artboard5';
// import Artboard6 from './app/pages/Artboard6';
// import Artboard7 from './app/pages/Artboard7';
// import Artboard8 from './app/pages/Artboard8';
// import Artboard9 from './app/pages/Artboard9';
// import Artboard10 from './app/pages/Artboard10';
// import Artboard11 from './app/pages/Artboard11';
// import Artboard12 from './app/pages/Artboard12';
// import Artboard13 from './app/pages/Artboard13';
// import Artboard14 from './app/pages/Artboard14';
// import SplashScreen1 from './app/pages/SplashScreen1';
// import SplashScreen2 from './app/pages/SplashScreen2';
// import SplashScreen3 from './app/pages/SplashScreen3';
// import SplashScreen4 from './app/pages/SplashScreen4';
// import SplashScreen5 from './app/pages/SplashScreen5';

import React, {Component} from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { I18nManager, AsyncStorage } from 'react-native';
import reducers from './src/app/reducers';
import localization from './src/app/localization/localization';

import SplashScreen2 from './app/pages/SplashScreen2';
import SplashScreen5 from './app/pages/SplashScreen5';
import RootNavigator, {middleware} from './src/app/navigators/RootNavigator';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      rootPage: <SplashScreen2 />,
      language:'en'
    }
    setTimeout(
      ()=>{
        this.setState({
          rootPage: <SplashScreen5 />
        });
      },2000
    )
    setTimeout(
      ()=>{
        this.setState({
          rootPage: <RootNavigator />
        });
      },4000
    )
    localization.setLanguage(this.state.language);
    if(this.state.language=='ar'){
      I18nManager.forceRTL(true);
    }else if(this.state.language=='en'){
      I18nManager.forceRTL(false);
    }
  }

  store = createStore(reducers, {}, applyMiddleware(middleware) );
  
  render() {
    return (
      <Provider store={this.store}>
        {this.state.rootPage}
      </Provider>
    );
  }
}
