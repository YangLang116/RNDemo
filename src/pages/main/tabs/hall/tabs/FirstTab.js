import * as React from 'react';
import {
  BackHandler,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

const FirstTab = props => {
  const {navigation} = props;
  useFocusEffect(
    React.useCallback(() => {
      console.log('FirstTab onResume');
      return () => {
        console.log('FirstTab onPause');
      };
    }, []),
  );
  return (
    <View style={styles.page}>
      <Text style={styles.text}>First Tab</Text>
      <TouchableHighlight
        style={styles.btn}
        onPress={() => navigation.navigate('second')}>
        <Text>Next</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.exitBtn}
        onPress={() => BackHandler.exitApp()}>
        <Text>Exit App</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    marginTop: 20,
  },
  exitBtn: {
    marginTop: 50,
  },
});

export default FirstTab;
