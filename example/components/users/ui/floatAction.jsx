import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {UserAdd} from 'iconsax-react-native';
import themeColors from '../../../theme/colors';

const {width, height} = Dimensions.get('screen');
const FloatAction = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <UserAdd size="48" color="#2ccce4" />
    </TouchableOpacity>
  );
};

export default FloatAction;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.2,
    height: width * 0.2,
    position: 'absolute',
    borderWidth: 2,
    borderColor: themeColors.SAXBLUE,
    borderRadius: 999,
    bottom: width * 0.05,
    right: width * 0.05,
  },
});
