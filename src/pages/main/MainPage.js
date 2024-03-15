import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect} from '@react-navigation/native';
import HallTab from './tabs/hall/HallTab';
import MsgTab from './tabs/MsgTab';
import NetTab from './tabs/NetTab';
import MineTab from './tabs/MineTab';
import {MainNavigationContext} from '../../base/constant/AppContext';
import {StatusBar} from 'react-native';

const NavigatorContract = createBottomTabNavigator();

const buildScreen = ({name, component, labelName, labelIcon}) => {
  // noinspection JSUnusedGlobalSymbols
  return (
    <NavigatorContract.Screen
      name={name}
      component={component}
      options={{
        tabBarLabel: labelName,
        tabBarIcon: ({color}) => (
          <MaterialIcons name={labelIcon} color={color} size={24} />
        ),
      }}
    />
  );
};

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
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
      return () => {
        StatusBar.setTranslucent(false);
      };
    }, []),
  );

  return (
    <MainNavigationContext.Provider value={props.navigation}>
      <NavigatorContract.Navigator
        backBehavior={'none'}
        screenOptions={{header: () => null}}>
        {buildScreen({
          name: 'hall',
          component: HallTab,
          labelName: '大厅',
          labelIcon: 'home',
        })}
        {buildScreen({
          name: 'msg',
          component: MsgTab,
          labelName: '消息',
          labelIcon: 'chat',
        })}
        {buildScreen({
          name: 'net',
          component: NetTab,
          labelName: '网络',
          labelIcon: 'wifi',
        })}
        {buildScreen({
          name: 'mine',
          component: MineTab,
          labelName: '我的',
          labelIcon: 'person',
        })}
      </NavigatorContract.Navigator>
    </MainNavigationContext.Provider>
  );
};

export default MainPage;
