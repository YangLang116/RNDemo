import * as React from 'react';
import {useRef, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import HtmlView from 'react-native-htmlview';
import serviceApi from '../../../base/api/ServiceApi';
import FitStatusBarComponent from '../../../base/component/FitStatusBarComponent';

const NetTab = () => {
  const inputRef = useRef('');
  const [content, setContent] = useState('');
  return (
    <FitStatusBarComponent style={{flex: 1}}>
      <View style={styles.page}>
        <View style={styles.head}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              ref={inputRef}
              placeholder={'Search...'}
            />
          </View>
          <Button
            title={'GET'}
            onPress={async () => {
              const keyword = inputRef.current.value;
              if (keyword !== '') {
                const response = await serviceApi.doGet('/search', {
                  type: 'content',
                  q: keyword,
                });
                setContent(await response.text());
              }
            }}
          />
        </View>
        <HtmlView value={content} />
      </View>
    </FitStatusBarComponent>
  );
};

const styles = StyleSheet.create({
  page: {
    width: '100%',
    flex: 1,
  },
  head: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 24,
  },
  inputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
    marginRight: 20,
  },
  input: {
    width: '100%',
  },
});

export default NetTab;
