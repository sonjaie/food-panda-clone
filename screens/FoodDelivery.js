import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Searchbar from "../components/Searchbar";

export default function FoodDelivery({ navigation }) {
  const yourDailyDealsHome = [
    {
      img: require("../assets/home-daily-deals/burger-king.jpg"),
    },
    {
      img: require("../assets/home-daily-deals/jollibee.jpg"),
    },
    {
      img: require("../assets/home-daily-deals/kfc.jpg"),
    },
    {
      img: require("../assets/home-daily-deals/mcdo.jpg"),
    },
  ];
  return (
    <View style={{ paddingBottom: 15, paddingRight: 15, paddingLeft: 15 }}>
      {/* Search Bar */}
      <Searchbar />
      {/* Search Bar */}
      {/* daily deals */}
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              width: "80%",
              flex: 1,
              flexDirection: "row",
            }}
          >
            {yourDailyDealsHome.map((items, index) => {
              return (
                <>
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
                      source={items.img}
                    ></Image>
                  </TouchableOpacity>
                </>
              );
            })}
          </View>
        </ScrollView>
      </View>
      {/* daily deals */}
      {/* Epid Deal today */}
      <View>
        <Text style={styles.homeScreenTxtHeader}>
          Epic Deal - 50% off TOTDAY ONLY
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
