import React from 'react';
import Login from './app/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAccount from './app/CreateAccount';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#292D32',
          headerTitleStyle: {
            fontWeight: '500',
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ title: 'Create Account' }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
