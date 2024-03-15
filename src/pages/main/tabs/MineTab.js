import * as React from 'react';
import {useContext, useEffect, useRef, useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import appStorage from '../../../base/storage';
import {MainNavigationContext} from '../../../base/constant/AppContext';
import Toast from 'react-native-easy-toast';

const cacheKey = 'cacheKey';

const MineTab = () => {
  const toastRef = useRef();
  const [cacheValue, updateCacheValue] = useState('');

  useEffect(() => {
    appStorage
      .load({key: cacheKey, autoSync: false})
      .then(ret => {
        updateCacheValue(ret);
      })
      .catch(err => {
        toastRef.current?.show(err.toString());
      });
  }, []);

  const mainNavigation = useContext(MainNavigationContext);
  return (
    <View style={styles.page}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://source.unsplash.com/300x150',
          width: 300,
          height: 150,
        }}
      />
      <Text style={styles.text}>Mine Tab</Text>
      <TouchableHighlight
        style={styles.btn}
        onPress={() => mainNavigation.navigate('home')}>
        <Text>打开个人详情页面</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.btn}
        onPress={() => mainNavigation.navigate('setting')}>
        <Text>打开设置页面</Text>
      </TouchableHighlight>
      <View style={styles.storageContainer}>
        <Text>异步Storage值： </Text>
        <Text>{cacheValue}</Text>
        <Button
          title={'UPDATE'}
          onPress={() => {
            const newDate = new Date().toDateString();
            appStorage
              .save({key: cacheKey, data: newDate})
              .then(_ => {
                toastRef.current?.show('update success');
              })
              .catch(err => {
                toastRef.current?.show(err.toString());
              });
          }}
        />
      </View>
      <Toast ref={toastRef} />
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
  image: {
    position: 'absolute',
    top: 0,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    marginTop: 20,
  },
  storageContainer: {
    columnGap: 20,
    alignItems: 'center',
    marginTop: 40,
  },
});

export default MineTab;
