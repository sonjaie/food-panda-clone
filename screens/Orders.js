//import data
import { yourRestaurantHome } from "../api/Db";

// import dependencies
import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Rating } from "react-native-elements";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default function Orders({ route, navigation }) {
  const productData = route.params;
  //console.log(productData.categories[0]);
  const [Ordercategories, setOrdercategories] = useState(
    productData.categories[0]
  );
  function onSelectedCategory(itemSelected) {
    const orderSelectedCategory = productData.categories.map((e, index) => {
      if (itemSelected.id == e.id) {
        setOrdercategories(e);
        //console.log(e);
      }
    });
  }
  return (
    <>
      <View
        style={{
          borderWidth: 1,
          height: 310,
          borderBottomWidth: 2,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          shadowColor: "grey",
          shadowOffset: {
            width: 1,
            height: 2,
          },
        }}
      >
        <View style={{ height: 150 }}>
          <ImageBackground
            resizeMode="cover"
            style={{
              width: deviceWidth,
              height: 150,
              position: "absolute",
              top: 0,
              right: 0,
              borderBottomRightRadius: 50,
              borderBottomLeftRadius: 50,
              overflow: "hidden",
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
                paddingLeft: 5,
                paddingRight: 5,
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
            <View
              style={{
                position: "absolute",
                top: 50,
                right: 15,
                backgroundColor: "white",
                borderRadius: 60,
                paddingTop: 5,
                paddingLeft: 5,
                paddingRight: 5,
              }}
            >
              <TouchableOpacity>
                <Ionicons
                  name="share-social-outline"
                  color="#FF1493"
                  size={23}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                position: "absolute",
                top: 50,
                right: 60,
                backgroundColor: "white",
                borderRadius: 60,
                paddingTop: 5,
                paddingLeft: 5,
                paddingRight: 5,
              }}
            >
              <TouchableOpacity>
                <MaterialIcons name="group-add" color="#FF1493" size={25} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={{ position: "absolute", top: 160, left: 15 }}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              fontSize: 20,
              color: "black",
              fontWeight: "bold",
              paddingBottom: 5,
            }}
          >
            {productData.productName + " - " + productData.location}
          </Text>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              paddingBottom: 15,
            }}
          >
            <Text>{productData.distance + " away " + " | "}</Text>
            <Text style={{ paddingRight: 2 }}>{productData.rate}</Text>
            <Rating
              readonly="true"
              type="custom"
              ratingCount={productData.rate}
              imageSize={15}
              ratingColor="#FF1493"
              tintColor="rgb(242, 242, 242)"
              ratingBackgroundColor="pink"
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "#FF1493",
                position: "absolute",
                right: 0,
                direction: "rtl",
              }}
            >
              More Info
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              paddingBottom: 15,
            }}
          >
            <Ionicons name="time-outline" color="#FF1493" size={25} />
            <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>
              Delivery: {productData.duration}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#FF1493",
                position: "absolute",
                right: 0,
              }}
            >
              Change
            </Text>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              paddingBottom: 15,
              marginTop: 110,
              paddingLeft: 15,
            }}
          >
            {productData.categories.map((items, index) => {
              // console.log(items);
              return (
                <>
                  <View>
                    <TouchableOpacity
                      onPress={() => onSelectedCategory(items)}
                      key={index}
                    >
                      <Text
                        style={[
                          styles.orderBtnRow,
                          {
                            color:
                              Ordercategories.id == items.id
                                ? "#FF1493"
                                : "black",
                          },
                        ]}
                      >
                        {items.name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View>
        <Text>
          {/* {console.log(Ordercategories.products)} */}
          {Ordercategories.products.map((items, index) => {
            return (
              <>
                <View style={{ flexDirection: "column" }}>
                  <TouchableOpacity key={index}>
                    <View>
                      <Text style={{ marginTop: 20 }}>{items.name}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </>
            );
          })}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  orderBtnRow: {
    paddingRight: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
});
