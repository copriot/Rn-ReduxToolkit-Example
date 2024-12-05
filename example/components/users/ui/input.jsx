import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import themeColors from '../../../theme/colors';

const Input = props => {
  const {title, error} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...props} style={styles.input} />
      {error && (
        <Text
          style={{marginTop: 3, color: themeColors.RED, fontWeight: 'bold'}}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: '600',
    marginBottom: 5,
    color: themeColors.BLACK,
  },
  input: {
    backgroundColor: themeColors.GRAY,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
  },
});
