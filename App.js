
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import LoadableComponent from './src/utils/loadable';
import store from './src/store';
import { useColorScheme } from 'react-native';

const Stack = createStackNavigator();

// Loadable components for code-splitting
const SplashScreen1 = LoadableComponent(() => import('./src/views/splashscreen/splashScreen'));

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="SplashScreen1"
                        component={() => <SplashScreen1 isDarkMode={isDarkMode} />} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
