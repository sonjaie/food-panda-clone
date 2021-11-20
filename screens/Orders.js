import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Rating } from "react-native-elements";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default function Orders({ route, navigation }) {
  const productData = route.params;
  //console.log(productData);

  return (
    <View>
      <View style={{ height: 200 }}>
        <ImageBackground
          resizeMode="cover"
          style={{
            width: deviceWidth,
            height: 180,
            position: "absolute",
            top: 0,
            right: 0,
          }}
          source={productData.image}
        >
          <View
            style={{
              position: "absolute",
              top: 50,
              //bottom: 10,
              left: 15,
              backgroundColor: "white",
              borderRadius: 60,
              paddingTop: 5,
              paddingLeft: 5,
              paddingRight: 5,
              paddingBottom: 5,
            }}
          >
            <TouchableOpacity>
              <Ionicons
                onPress={() => {
                  navigation.goBack();
                }}
                name="arrow-back"
                color="#FF1493"
                size={25}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={{ position: "absolute", top: 180, left: 15 }}>
        <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
          {productData.productName + " - " + productData.location}
        </Text>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Text>{productData.rate}</Text>
          <Rating
            readonly="true"
            type="custom"
            ratingCount={productData.rate}
            imageSize={15}
            ratingColor="#FF1493"
            tintColor="rgb(242, 242, 242)"
            ratingBackgroundColor="pink"
          />
          {/* <MaterialIcons name="star-rate" color="#FF1493" size={15} /> */}
        </View>
        <Text>{productData.food}</Text>
        <Text>{productData.fee}</Text>
        <Text>{productData.duration}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
