import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import ComingSoonScreen from "./src/screens/ComingSoonScreen"
import ConfirmPinScreen from "./src/screens/ConfirmPinScreen"
import EnterPinScreen from "./src/screens/EnterPinScreen"
import IntroScreen from "./src/screens/IntroScreen"
import LoginScreen from "./src/screens/LoginScreen"
import MainScreen from "./src/screens/MainScreen"
import MenuScreen from "./src/screens/MenuScreen"
import NewpasswordScreen from "./src/screens/NewpasswordScreen"
import OrdersDetailScreen from "./src/screens/OrdersDetailScreen"
import OrdersScreen from "./src/screens/OrdersScreen"
import OtpScreen from "./src/screens/OtpScreen"
import ResetpasswordScreen from "./src/screens/ResetpasswordScreen"
import ResturantsScreen from "./src/screens/ResturantsScreen"
import SetPinScreen from "./src/screens/SetPinScreen"
import SignupScreen from "./src/screens/SignupScreen"
import SuccessfullOrderScreen from "./src/screens/SuccessfullOrderScreen"


const navigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Intro: IntroScreen,
    Signup: SignupScreen,
    Login: LoginScreen,
    Newpassword: NewpasswordScreen,
    Otp: OtpScreen,
    Resetpassword: ResetpasswordScreen,
    SetPin: SetPinScreen,
    ConfirmPin: ConfirmPinScreen,
  }),
  mainFlow: createBottomTabNavigator({
  }),
})

export default createAppContainer(navigator);