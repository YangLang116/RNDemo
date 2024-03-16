import * as React from 'react';
import {useCallback} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {
  callNativeMethod,
  listenMsgFromNative,
} from '../../../../../modules/ProtocolModule';

const SecondTab = props => {
  const {navigation} = props;
  useFocusEffect(
    useCallback(() => {
      const emitterSubscription = listenMsgFromNative('msg', msg => {
        console.log(msg);
      });
      return () => {
        emitterSubscription.remove();
      };
    }, []),
  );
  return (
    <View style={styles.page}>
      <Text style={styles.text}>Second Tab</Text>
      <TouchableHighlight
        style={styles.btn}
        onPress={() => navigation.navigate('first')}>
        <Text>Pre</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.btn}
        onPress={() => {
          callNativeMethod('log', {msg: 'log from rn'})
            .then(msg => {
              console.log(msg);
            })
            .catch(err => {
              console.log(err.toString());
            });
        }}>
        <Text>Show Native Log</Text>
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
});

export default SecondTab;
