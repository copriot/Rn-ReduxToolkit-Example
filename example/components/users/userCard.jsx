import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Pressable,
} from 'react-native';
import {
  compareName,
  getInitialNameSurname,
  getRandomColor,
} from '../../utils/functions';
import themeColors from '../../theme/colors';
import {ArrowRight, EmojiHappy} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import screenNames from '../../utils/route';

const {width, height} = Dimensions.get('screen');
const UserCard = ({userData}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(screenNames.USERDETAIL, {userData: userData})
      }
      style={styles.container}>
      <View>
        <View style={[styles.content, {backgroundColor: getRandomColor()}]}>
          <Text style={styles.identifyBlock}>
            {getInitialNameSurname(userData.name, userData.surname)}
          </Text>
        </View>
      </View>
      <View style={{padding: 10, flex: 1}}>
        <Text style={styles.identify}>
          {compareName(userData.name, userData.surname)}
        </Text>
        <Text style={styles.identify}>{userData.email}</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ArrowRight size={24} color="black" />
      </View>
    </Pressable>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: themeColors.WHITE,
    padding: 10,
    borderRadius: 8,
    marginTop: 4,
  },
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
  identify: {fontSize: 18, fontWeight: 500},
});
