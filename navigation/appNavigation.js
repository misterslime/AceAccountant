/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '../src/screens/splashScreen';
import { Welcome } from '../src/screens/welcomeScreen';
import { CameraScreen } from  '../src/screens/cameraScreen';
import { OCRResultScreen } from  '../src/screens/ocrResultScreen';
import { MainPage } from '../src/screens/mainPage';
import { CreateAccount } from '../src/screens/createAccountScreen';
import { ProfileScreen } from '../src/profile/profileScreen';
import { SavingsGoals } from '../src/profile/savings/savingsGoal';
import { NewGoal } from '../src/profile/savings/newGoal';
import { EditGoal } from '../src/profile/savings/editGoal';
import { useSelector } from 'react-redux';
import { SignIn } from '../src/screens/signInScreen';
import BudgetTracker from '../src/screens/budgetTracker';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    const {user} = useSelector(state=> state.user);

    if (user){
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="MainPage" component={MainPage} />
                    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                    <Stack.Screen name="SavingsGoal" component={SavingsGoals} />
                    <Stack.Screen name="BudgetTracker" component={BudgetTracker} />
                    <Stack.Screen name="NewGoal" component={NewGoal} />
                    <Stack.Screen name="EditGoal" component={EditGoal} />
                    <Stack.Screen name="Camera" component={CameraScreen} />
                </Stack.Navigator>
            </NavigationContainer>
          );
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="WelcomeApp">
                    <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="SplashScreen" component={SplashScreen} />
                    <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="Welcome" component={Welcome} />
                    <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="SignIn" component={SignIn} />
                    <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="CreateAccount" component={CreateAccount} />
                    <Stack.Screen name="MainPage" component={MainPage} />
                    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                    <Stack.Screen name="SavingsGoal" component={SavingsGoals} />
                    <Stack.Screen name="BudgetTracker" component={BudgetTracker} />
                    <Stack.Screen name="NewGoal" component={NewGoal} />
                    <Stack.Screen name="EditGoal" component={EditGoal} />
                    <Stack.Screen name="CameraScreen" component={CameraScreen} />
                </Stack.Navigator>
            </NavigationContainer>
          );
    }
}
