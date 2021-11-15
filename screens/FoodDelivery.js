//import Data
import { yourRestaurantHome, yourDailyDealsHome } from "../api/Db";

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

  function foodDeliveryEpicDeals({ item }) {
    if (item.epicdeal === "true") {
      return (
        <>
          <View>
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
                source={item.img}
              >
                <View
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 0,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: "white",
                      fontWeight: "bold",
                      borderWidth: 1,
                      borderTopRightRadius: 8,
                      borderBottomRightRadius: 8,
                      backgroundColor: "#FF1493",
                      //borderRadius: 15,
                      width: 70,
                      paddingLeft: 5,
                      paddingTop: 5,
                      paddingBottom: 5,
                    }}
                  >
                    50% OFF
                  </Text>
                </View>
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
                    {item.duration}
                  </Text>
                </View>
              </ImageBackground>
              <View style={{ marginTop: 10 }}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{ fontWeight: "bold", width: 250 }}
                >
                  {item.location}
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
                  {item.food}
                </Text>
                <Text style={{ fontWeight: "bold" }}> {item.fee}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      );
    }
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
            numColumns={Math.ceil(yourDailyDealsHome.length / 1)}
            data={yourDailyDealsHome}
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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FlatList
            contentContainerStyle={{ alignSelf: "flex-start" }}
            numColumns={Math.ceil(yourRestaurantHome.length / 1)}
            data={yourRestaurantHome}
            renderItem={foodDeliveryEpicDeals}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
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
