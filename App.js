//import screens
import MainScreen from "./screens/MainScreen";
import FoodDelivery from "./screens/FoodDelivery";

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
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Searchbar from "./components/Searchbar";

enableScreens();
export default function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  });
  const Stack = createNativeStackNavigator();

  function FoodDeliveryrightComponent() {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            paddingRight: 15,
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="heart-outline"
              color="#FF1493"
              size={25}
              style={{
                marginRight: 15,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Fontisto name="shopping-basket" color="#FF1493" size={23} />
          </TouchableOpacity>
        </View>
      </>
    );
  }

  function FoodDeliveryleftComponent() {
    return (
      <>
        <View>
          <Text style={{ color: "#FF1493", fontWeight: "bold" }}>Home </Text>
          <Text style={{ color: "black" }}>Restaurant Delivery</Text>
        </View>
      </>
    );
  }
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
            <NavigationContainer>
              <Stack.Navigator initialRouteName="MainScreen">
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="MainScreen"
                  component={MainScreen}
                />
                <Stack.Screen
                  options={{
                    title: "Food Delivery",
                    headerRight: FoodDeliveryrightComponent,
                    headerTitle: FoodDeliveryleftComponent,
                    headerTintColor: "#FF1493",
                  }}
                  name="FoodDelivery"
                  component={FoodDelivery}
                />
                <Stack.Screen
                  options={{
                    title: "Search Bar Foods",
                    headerRight: FoodDeliveryrightComponent,
                    headerTitle: FoodDeliveryleftComponent,
                    headerTintColor: "#FF1493",
                  }}
                  name="Searchbar"
                  component={Searchbar}
                />
              </Stack.Navigator>
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
    backgroundColor: "white",
  },
  loadingFoodpanda: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
});
