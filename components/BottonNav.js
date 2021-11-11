// import screens
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CartScreen from "../screens/CartScren";
// import dependencies
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
// import { NavigationContainer } from "@react-navigation/native";

class BottonNav extends React.Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            lazy: true,
          }}
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: "#694fad" }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cart" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </>
    );
  }
}

export default BottonNav;

const styles = StyleSheet.create({});
