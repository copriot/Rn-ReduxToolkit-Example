import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RouteNavigation from './example/router/routeNavigation';
import {Provider} from 'react-redux';
import {store} from './example/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RouteNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
