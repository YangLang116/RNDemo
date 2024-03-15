import * as React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import FitStatusBarComponent from '../../../base/component/FitStatusBarComponent';

const MsgTab = () => {
  return (
    <FitStatusBarComponent style={{flex: 1}}>
      <WebView source={{uri: 'https://www.baidu.com'}} style={styles.page} />
    </FitStatusBarComponent>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});

export default MsgTab;
