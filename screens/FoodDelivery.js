// import screens
import Searchbar from "../components/Searchbar";

//import dependencies
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";

export default function FoodDelivery({ navigation }) {
  // data
  const yourRestaurantHome = [
    {
      id: "1",
      img: require("../assets/home-your-restaurants/burger-king.jpg"),
      name: "Burger King",
      duration: " 25 min",
      location: "Xavier Divisoria",
      food: ["Burger", "Fries", "Beverages", "Rice"],
      fee: "₱ 40 delivery fee",
    },
    {
      id: "2",
      img: require("../assets/home-your-restaurants/jollibee.jpg"),
      name: "Jollibee",
      duration: " 20 min",
      location: "CDO NHA Kauswagan",
      food: ["Burger", "Fries", "Beverages", "Rice"],
      fee: "₱ 40 delivery fee",
    },
    {
      id: "3",
      img: require("../assets/home-your-restaurants/kfc.jpg"),
      name: "KFC",
      duration: " 15 min",
      location: "SM Downtown KFC",
      food: ["Burger", "Fries", "Beverages", "Rice"],
      fee: "₱ 40 delivery fee",
    },
    {
      id: "4",
      img: require("../assets/home-your-restaurants/mcdo.jpg"),
      name: "MCDO",
      duration: " 10 min",
      location: "CDO NHA Kauswagan",
      food: ["Burger", "Fries", "Beverages", "Rice"],
      fee: "₱ 40 delivery fee",
    },
  ];

  // food items
  function foodDeliveryDeals({ item }) {
    return (
      <>
        <View>
          <TouchableOpacity>
            <Image
              style={{
                width: 125,
                height: 150,
                borderRadius: 15,
                overflow: "hidden",
                borderWidth: 0.5,
                marginRight: 5,
              }}
              source={item.img}
            ></Image>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  return (
    <View style={{ paddingBottom: 15, paddingRight: 15, paddingLeft: 15 }}>
      {/* Search Bar */}
      <View
        style={{
          borderWidth: 1,
          marginBottom: 20,
          borderColor: "grey",
          borderRadius: 25,
          marginTop: 15,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Searchbar")}
          style={{
            flexDirection: "row",
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 15,
            alignItems: "center",
          }}
        >
          <AntDesign
            name="search1"
            color="#FF1493"
            size={20}
            style={
              {
                //marginRight: 15,
              }
            }
          />
          <Text style={{ paddingLeft: 15, color: "grey" }}>
            Search for shops & restaurants
          </Text>
        </TouchableOpacity>
      </View>
      {/* Search Bar */}
      {/* daily deals */}
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FlatList
            contentContainerStyle={{ alignSelf: "flex-start" }}
            numColumns={Math.ceil(yourRestaurantHome.length / 1)}
            data={yourRestaurantHome}
            renderItem={foodDeliveryDeals}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </View>
      {/* daily deals */}
      {/* Epid Deal today */}
      <View>
        <Text style={styles.homeScreenTxtHeader}>
          Epic Deal - 50% off TODAY ONLY
        </Text>
        <TouchableOpacity>
          <ImageBackground
            style={{
              width: 250,
              height: 150,
              borderRadius: 15,
              overflow: "hidden",
              borderWidth: 0.5,
              marginRight: 15,
            }}
            source={require("../assets/home-your-restaurants/burger-king.jpg")}
          >
            <View
              style={{
                position: "absolute",
                bottom: 10,
                left: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  color: "black",
                  fontWeight: "bold",
                  borderWidth: 1,
                  backgroundColor: "white",
                  borderRadius: 15,
                  width: 60,
                  paddingLeft: 5,
                }}
              >
                25 min
              </Text>
            </View>
          </ImageBackground>
          <View style={{ marginTop: 10 }}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{ fontWeight: "bold", width: 250 }}
            >
              Burger King - Xavier Divisoria
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                fontWeight: "bold",
                width: 250,
                color: "grey",
                marginTop: 8,
              }}
            >
              Burger, Fries, Beverages, Rice
            </Text>
            <Text style={{ fontWeight: "bold" }}>₱ 40 delivery fee</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* Epid Deal today */}
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreenTxtHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 15,
  },
});
