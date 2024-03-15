import * as React from 'react';
import {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {refreshUser, toLoading} from './slice/LoginSlice';
import {createSelector} from '@reduxjs/toolkit';

const getLoginState = state => state.login;

const LoginPage = props => {
  //设置状态栏
  // StatusBar.setHidden(true);
  const timerRef = useRef(0);
  const clearTimer = useCallback(() => {
    const id = timerRef.current;
    if (id > 0) {
      clearTimeout(id);
    }
  }, []);

  const {navigation} = props;
  const dispatch = useDispatch();
  const toLogin = useCallback(
    id => {
      clearTimer();
      dispatch(toLoading());
      timerRef.current = setTimeout(() => {
        const user = {uid: id, name: 'RN'};
        dispatch(refreshUser(user));
        navigation.replace('main');
      }, 2000);
    },
    [clearTimer, dispatch, navigation],
  );

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  const [uid, setUid] = useState('0');
  const isLoading = useSelector(
    createSelector([getLoginState], state => state.isLoading),
  );

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <Text style={styles.slogan}>输入Uid进行登录</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            multiline={false}
            keyboardType={'numeric'}
            placeholder={'input home name'}
            onChangeText={text => setUid(text)}
            textAlignVertical={'center'}
            value={uid}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            const id = parseInt(uid, 10);
            if (id > 0) {
              toLogin(id);
            }
          }}>
          <Text style={styles.loginBtn}>Login</Text>
        </TouchableOpacity>
      </View>
      {isLoading && <ActivityIndicator style={styles.loading} />}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  slogan: {
    fontSize: 24,
    color: 'black',
    marginTop: 44,
  },
  inputContainer: {
    width: '80%',
    marginTop: 20,
    marginBottom: 40,
    backgroundColor: 'transparent',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    fontSize: 18,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  loginBtn: {
    backgroundColor: '#999',
    borderRadius: 5,
    width: 120,
    height: 30,
    lineHeight: 30,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loading: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -30,
    marginTop: -30,
    width: 60,
    height: 60,
  },
});
