import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {
  compareName,
  getInitialNameSurname,
  getRandomColor,
} from '../../utils/functions';
import themeColors from '../../theme/colors';
import {Health, Man, Mobile, Sms, Woman} from 'iconsax-react-native';
import Button from '../../components/users/ui/button';
import {useDispatch} from 'react-redux';
import {deleteUser} from '../../store/slice/userSlice';
import screenNames from '../../utils/route';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');
const UserDetail = ({route}) => {
  const {userData} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 200,
            borderBottomWidth: 1,
            borderColor: themeColors.BLACK,
          }}>
          <View style={[styles.content, {backgroundColor: getRandomColor()}]}>
            <Text style={styles.identifyBlock}>
              {getInitialNameSurname(userData.name, userData.surname)}
            </Text>
          </View>
          <Text style={styles.identify}>
            {compareName(userData.name, userData.surname)}
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Sms />
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {userData.email}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Mobile />
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {userData.phoneNumber}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Health />
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {userData.age}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            {userData.gender == 'Erkek' ? <Man /> : <Woman />}
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {userData.gender}
            </Text>
          </View>
          <Button title="Update" status="warning" />
          <Button
            title="Delete"
            status="danger"
            onPress={() => {
              dispatch(deleteUser(userData.id));
              navigation.navigate(screenNames.USERS);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  content: {
    borderWidth: 1,
    borderRadius: 24,
    width: width * 0.2,
    height: width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  identifyBlock: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  identify: {fontSize: 18, fontWeight: 500, marginTop: 5},
});
