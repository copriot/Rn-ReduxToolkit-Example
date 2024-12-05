import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Users from '../screens/users';
import screenNames from '../utils/route';
import AddNewUser from '../screens/users/addNewUser';
import UserDetail from '../screens/users/userDetail';

const Stack = createNativeStackNavigator();
const RouteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screenNames.USERS} component={Users} />
      <Stack.Screen name={screenNames.ADDNEWUSER} component={AddNewUser} />
      <Stack.Screen name={screenNames.USERDETAIL} component={UserDetail} />
    </Stack.Navigator>
  );
};

export default RouteNavigation;
