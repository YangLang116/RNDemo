import * as React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const VersionOptionPage = props => {
  const {navigation} = props;
  return (
    <View style={styles.page}>
      <Text style={styles.text}>Version Page</Text>
      <TouchableHighlight
        style={styles.btn}
        onPress={() => navigation.jumpTo('about')}>
        <Text>pre</Text>
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

export default VersionOptionPage;
