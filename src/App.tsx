import React from 'react';
import appStore from './base/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './pages/login/LoginPage';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import MainPage from './pages/main/MainPage';
import HomePage from './pages/home/HomePage';
import SettingPage from './pages/setting/SettingPage';

const NavigatorContract = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={appStore}>
      <NavigationContainer>
        <NavigatorContract.Navigator screenOptions={{header: () => null}}>
          <NavigatorContract.Screen name={'login'} component={LoginPage} />
          <NavigatorContract.Screen name={'main'} component={MainPage} />
          <NavigatorContract.Screen name={'home'} component={HomePage} />
          <NavigatorContract.Screen name={'setting'} component={SettingPage} />
        </NavigatorContract.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
