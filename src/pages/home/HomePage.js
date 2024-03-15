import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {createSelector} from '@reduxjs/toolkit';

const getLoginState = state => state.login;

const HomePage = () => {
  const user = useSelector(
    createSelector([getLoginState], state => state.user),
  );
  return (
    <View style={styles.page}>
      <Text style={styles.name}>Hello, {user.name}</Text>
      <Text style={styles.uid}>uid: {user.id}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  name: {
    marginTop: 180,
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  uid: {
    color: 'black',
    fontSize: 18,
    marginTop: 10,
  },
});

export default HomePage;
