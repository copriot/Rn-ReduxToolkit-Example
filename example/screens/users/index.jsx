import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import UserCard from '../../components/users/userCard';
import FloatAction from '../../components/users/ui/floatAction';
import screenNames from '../../utils/route';

const Users = ({navigation}) => {
  const {users} = useSelector(state => state.userSlice);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListEmptyComponent={
          <Text
            style={{
              fontSize: 20,
              color: 'red',
              fontWeight: 'bold',
              marginHorizontal: 'auto',
            }}>
            User has not been added yet!
          </Text>
        }
        data={users}
        renderItem={({item}) => <UserCard userData={item} />}
      />
      <FloatAction
        onPress={() => navigation.navigate(screenNames.ADDNEWUSER)}
      />
    </View>
  );
};

export default Users;
