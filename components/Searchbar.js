import React, { useState } from "react";
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
import { Header, SearchBar } from "react-native-elements";

export default function Searchbar() {
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

    {
      id: "5",
      img: require("../assets/home-your-restaurants/mcdo.jpg"),
      name: "MCDO",
      duration: " 10 min",
      location: "CDO NHA Kauswagan",
      food: ["Burger", "Fries", "Beverages", "Rice"],
      fee: "₱ 40 delivery fee",
    },
  ];

  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] =
    useState(yourRestaurantHome);
  const [masterDataSource, setMasterDataSource] = useState(yourRestaurantHome);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        console.log(item.name);
        const itemData = item.name;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item, index }) => {
    //const countResDis = item.length;
    const foodAddstring = item.food.join(", ");
    return (
      <>
        <View style={{ alignItems: "center", paddingBottom: 15 }}>
          <ScrollView>
            <View>
              <TouchableOpacity>
                <ImageBackground
                  key={index}
                  style={{
                    width: 340,
                    height: 150,
                    borderRadius: 15,
                    overflow: "hidden",
                    borderWidth: 0.5,
                    marginRight: 2,
                  }}
                  source={item.img}
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
                    {item.name} - {item.location}
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
                    {foodAddstring}
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>{item.fee}</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* <Text style={styles.itemStyle} onPress={() => getItem(item)}>
            {item.img}
          </Text> */}
          </ScrollView>
        </View>
      </>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  return (
    <>
      <View style={{ flex: 1, paddingTop: 15, backgroundColor: "white" }}>
        <SearchBar
          inputStyle={{
            backgroundColor: "transparent",
            color: "black",
            fontSize: 15,
          }}
          containerStyle={{
            backgroundColor: "transparent",
            borderWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            marginBottom: 5,
          }}
          inputContainerStyle={{
            backgroundColor: "transparent",
            borderWidth: 1,
            borderBottomWidth: 1,
            borderRadius: 15,
          }}
          placeholder="Search for shops & restaurants"
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction("")}
          value={search}
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          // ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
