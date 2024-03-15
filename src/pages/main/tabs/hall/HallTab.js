import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FirstTab from './tabs/FirstTab';
import SecondTab from './tabs/SecondTab';
import FitStatusBarComponent from '../../../../base/component/FitStatusBarComponent';

const NavigatorContract = createMaterialTopTabNavigator();

const buildScreen = ({name, component, title}) => (
  <NavigatorContract.Screen
    name={name}
    component={component}
    options={{title}}
  />
);

const HallTab = () => {
  return (
    <FitStatusBarComponent style={{flex: 1}}>
      <NavigatorContract.Navigator backBehavior={'none'}>
        {buildScreen({name: 'first', component: FirstTab, title: 'First'})}
        {buildScreen({name: 'second', component: SecondTab, title: 'Second'})}
      </NavigatorContract.Navigator>
    </FitStatusBarComponent>
  );
};

export default HallTab;
