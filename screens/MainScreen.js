import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottonNav from "../components/BottonNav";
import HeaderNav from "../components/HeaderNav";

export default function MainScreen({ navigation }) {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };
  return (
    <>
      <View>
        <HeaderNav navigation={navigation} />
      </View>
      <BottonNav />
    </>
  );
}

const styles = StyleSheet.create({});
