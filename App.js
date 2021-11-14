//import screens
import BottonNav from "./components/BottonNav";

//import dependencies
import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  ActivityIndicator,
  Text,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import HeaderNav from "./components/HeaderNav";

export default function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  });

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  return (
    <>
      <SafeAreaProvider
        style={loading ? styles.backgroundcolor : styles.backgroundcolor1}
      >
        {loading ? (
          <View style={styles.loadingStyle}>
            <ActivityIndicator size="large" color="pink" />
            <Text style={styles.loadingFoodpanda}>FoodPanda Clone</Text>
          </View>
        ) : (
          <>
            <View>
              <HeaderNav />
            </View>
            <NavigationContainer theme={MyTheme}>
              <BottonNav />
            </NavigationContainer>
          </>
        )}
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "transparent",
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  // },
  loadingStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
    backgroundColor: "#FF1493",
  },
  backgroundcolor: {
    backgroundColor: "#FF1493",
  },
  backgroundcolor1: {
    backgroundColor: "transparent",
  },
  loadingFoodpanda: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
});
