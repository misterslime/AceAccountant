/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '../src/screens/splashScreen';
import { SignUp } from '../src/screens/signUpScreen';
import { MainPage } from '../src/screens/mainPage';
import { CreateAccount } from '../src/screens/createAccountScreen';
import { ProfileScreen } from '../src/profile/profileScreen';
import { SavingsGoals } from '../src/profile/savings/savingsGoal';
import { NewGoal } from '../src/profile/savings/newGoal';
import { EditGoal } from '../src/profile/savings/editGoal';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Home" component={SplashScreen} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Main" component={MainPage} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="SavingsGoal" component={SavingsGoals} />
            <Stack.Screen name="NewGoal" component={NewGoal} />
            <Stack.Screen name="EditGoal" component={EditGoal} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
