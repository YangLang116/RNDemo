import * as React from 'react';
import {useCallback, useRef} from 'react';
import {Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {
  callNativeMethod,
  listenMsgFromNative,
} from '../../../../../modules/ProtocolModule';
import {ShapeView} from '../../../../../base/component/native/ShapeView';

const SecondTab = props => {
  const {navigation} = props;
  //直接调用Native方法(setNativeProps)
  const shapeViewRef = useRef();
  const changeShape = useCallback(() => {
    shapeViewRef.current.setNativeProps({circle: false});
  }, []);
  //Native组件回调
  const onChange = useCallback(event => {
    console.log(event.nativeEvent.message);
  }, []);
  //接受Native事件
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
          //调用Native方法
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
      <View style={styles.nativeView}>
        <Text>自定义 Native UI</Text>
        {/*Native UI*/}
        <ShapeView
          ref={shapeViewRef}
          style={styles.shapeView}
          circle={true}
          onChange={onChange}
        />
        <Button title={'Change Shape'} onPress={changeShape} />
      </View>
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
  nativeView: {
    marginTop: 40,
  },
  shapeView: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default SecondTab;
