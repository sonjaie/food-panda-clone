//import dependencies
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, SearchBar } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

function centerComponent() {
  return (
    <>
      <Text style={{ color: "#FF1493", fontWeight: "bold" }}>Home </Text>
      <Text style={{ color: "black" }}>Olape Compund St. Michael St</Text>
    </>
  );
}

function rightComponent() {
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingRight: 10,
        }}
      >
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="heart-outline"
            color="#FF1493"
            size={25}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Fontisto name="shopping-basket" color="#FF1493" size={23} />
        </TouchableOpacity>
      </View>
    </>
  );
}

export default function HeaderNav() {
  return (
    <>
      <View>
        <Header
          containerStyle={{
            borderBottomWidth: 2,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            shadowColor: "grey",
            shadowOffset: {
              width: 1,
              height: 2,
            },

            elevation: 6,
            marginBottom: 2,
          }}
          backgroundColor="white"
          placement="left"
          leftComponent={{
            size: 30,
            icon: "menu",
            color: "#FF1493",
            onPress: () => console.log("center"),
          }}
          centerComponent={{
            text: centerComponent(),
          }}
          rightComponent={{ text: rightComponent() }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
