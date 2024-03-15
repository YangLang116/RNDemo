import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import VersionOptionPage from './items/VersionOptionPage';
import AboutOptionPage from './items/AboutOptionPage';

const DrawerContract = createDrawerNavigator();

const SettingPage = () => {
  return (
    <DrawerContract.Navigator backBehavior={'none'}>
      <DrawerContract.Screen name="about" component={AboutOptionPage} />
      <DrawerContract.Screen name="version" component={VersionOptionPage} />
    </DrawerContract.Navigator>
  );
};

export default SettingPage;
