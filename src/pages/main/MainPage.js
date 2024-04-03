import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useFocusEffect} from '@react-navigation/native';
import HallTab from './tabs/hall/HallTab';
import MsgTab from './tabs/MsgTab';
import NetTab from './tabs/NetTab';
import {MainNavigationContext} from '../../base/constant/AppContext';
import {Image, StatusBar, StyleSheet} from 'react-native';
import {isAndroid} from '../../utils/PlatformUtils';

const NavigatorContract = createBottomTabNavigator();

const MainPage = props => {
  useFocusEffect(
    React.useCallback(() => {
      console.log('MainPage onResume');
      return () => {
        console.log('MainPage onPause');
      };
    }, []),
  );

  //设置状态栏
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      if (isAndroid()) {
        StatusBar.setTranslucent(true);
        StatusBar.setBackgroundColor('transparent');
      }
      return () => {
        if (isAndroid()) {
          StatusBar.setTranslucent(false);
        }
      };
    }, []),
  );

  return (
    <MainNavigationContext.Provider value={props.navigation}>
      <NavigatorContract.Navigator
        backBehavior={'none'}
        screenOptions={{headerShown: false}}>
        <NavigatorContract.Screen
          name="hall"
          component={HallTab}
          options={{
            tabBarLabel: '大厅',
            tabBarIcon: () => (
              <Image
                source={require('../../assets/main.png')}
                style={styles.icon}
              />
            ),
          }}
        />
        <NavigatorContract.Screen
          name="msg"
          component={MsgTab}
          options={{
            tabBarLabel: '消息',
            tabBarIcon: () => (
              <Image
                source={require('../../assets/chat.png')}
                style={styles.icon}
              />
            ),
          }}
        />
        <NavigatorContract.Screen
          name="net"
          component={NetTab}
          options={{
            tabBarLabel: '网络',
            tabBarIcon: () => (
              <Image
                source={require('../../assets/network.png')}
                style={styles.icon}
              />
            ),
          }}
        />
        <NavigatorContract.Screen
          name="mine"
          component={HallTab}
          options={{
            tabBarLabel: '我的',
            tabBarIcon: () => (
              <Image
                source={require('../../assets/personal.png')}
                style={styles.icon}
              />
            ),
          }}
        />
      </NavigatorContract.Navigator>
    </MainNavigationContext.Provider>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});
