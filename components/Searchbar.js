//import data
import { yourRestaurantHome } from "../api/Db";

import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header, SearchBar } from "react-native-elements";

export default function Searchbar({ navigation }) {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] =
    useState(yourRestaurantHome);
  const [masterDataSource, setMasterDataSource] = useState(yourRestaurantHome);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name;
        const itemDataUpperCase = itemData.toUpperCase();
        const textData = text.toUpperCase();
        return itemDataUpperCase.indexOf(textData) > -1;
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
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Orders", {
                  itemId: item.id,
                  productName: item.name,
                  duration: item.duration,
                  location: item.location,
                  food: item.food,
                  fee: item.fee,
                  image: item.img,
                  rate: item.rate,
                })
              }
            >
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
        <ScrollView>
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
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
