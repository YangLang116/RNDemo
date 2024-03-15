import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {isiOS} from '../../utils/PlatformUtils';
import * as React from 'react';

const FitStatusBarComponent = props => {
  if (isiOS()) {
    return <SafeAreaView style={styles.iOSPage}>{props.children}</SafeAreaView>;
  } else {
    return <View style={styles.androidPage}>{props.children}</View>;
  }
};

const styles = StyleSheet.create({
  iOSPage: {
    flex: 1,
    backgroundColor: 'white',
  },
  androidPage: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
  },
});

export default FitStatusBarComponent;
