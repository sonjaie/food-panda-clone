import React from "react";
import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

export default function HomeScreen() {
  const yourRestaurantHome = [
    {
      img: require("../assets/home-your-restaurants/burger-king.jpg"),
      name: "burger-king",
      duration: " 25 min",
    },
    {
      img: require("../assets/home-your-restaurants/jollibee.jpg"),
      name: "jollibee",
      duration: " 20 min",
    },
    {
      img: require("../assets/home-your-restaurants/kfc.jpg"),
      name: "kfc",
      duration: " 15 min",
    },
    {
      img: require("../assets/home-your-restaurants/mcdo.jpg"),
      name: "mcdo",
      duration: " 10 min",
    },
  ];
  return (
    <>
      <ScrollView>
        <View
          style={{
            paddingTop: 15,
            width: "90%",
            alignSelf: "center",
          }}
        >
          {/* start of food delivery button */}
          <TouchableOpacity>
            <ImageBackground
              style={{
                width: "100%",
                height: 200,
                borderRadius: 15,
                overflow: "hidden",
                borderWidth: 0.5,
                marginBottom: 15,
              }}
              source={require("../assets/button-img/food-delivery.png")}
            >
              <View
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                }}
              >
                <Text
                  style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
                >
                  Food Delivery
                </Text>
                <Text style={{ fontSize: 15, color: "white" }}>
                  Order food you love
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          {/* end of food delivery button */}
          <View
            style={{
              marginBottom: 15,
              flex: 1,
              flexDirection: "row",
            }}
          >
            {/* start of shoping button */}
            <View style={{ width: "50%", paddingRight: 5 }}>
              <TouchableOpacity>
                <ImageBackground
                  //resizeMode="cover"
                  style={{
                    width: "100%",
                    height: 300,
                    borderRadius: 15,
                    overflow: "hidden",
                    borderWidth: 0.5,
                  }}
                  source={require("../assets/button-img/shopping.png")}
                >
                  <View
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 15,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Shops
                    </Text>
                    <Text style={{ fontSize: 15, color: "white" }}>
                      Groceries and more
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            {/* end of shopping button */}
            <View style={{ width: "100%" }}>
              {/* start of pick up button */}
              <View style={{ width: "50%", paddingLeft: 5, marginBottom: 8 }}>
                <TouchableOpacity>
                  <ImageBackground
                    //resizeMode="cover"
                    style={{
                      width: "100%",
                      height: 200,
                      borderRadius: 15,
                      overflow: "hidden",
                      borderWidth: 0.5,
                    }}
                    source={require("../assets/button-img/pick-up.png")}
                  >
                    <View
                      style={{
                        position: "absolute",
                        bottom: 20,
                        left: 15,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        Pick-up
                      </Text>
                      <Text style={{ fontSize: 15, color: "white" }}>
                        Get unli savings
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              {/* end of pick up button */}
              {/* start of Dine in button */}
              <View
                style={{
                  width: "50%",
                  paddingLeft: 5,
                }}
              >
                <TouchableOpacity>
                  <ImageBackground
                    //resizeMode="cover"
                    style={{
                      width: "100%",
                      height: 90,
                      borderRadius: 15,
                      overflow: "hidden",
                      borderWidth: 0.5,
                    }}
                    source={require("../assets/button-img/dine-in.png")}
                  >
                    <View
                      style={{
                        position: "absolute",
                        bottom: 20,
                        left: 15,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        Dine-in
                      </Text>
                      <Text style={{ fontSize: 15, color: "white" }}>
                        25% OFF and more
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              {/* end of Dine in button */}
            </View>
          </View>
          {/* Your Restaurants */}
          <View style={{ marginBottom: 15 }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 15 }}
            >
              Your Restaurants
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  width: "80%",
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                {yourRestaurantHome.map((items, index) => {
                  return (
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
                        source={items.img}
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
                              paddingLeft: 8,
                            }}
                          >
                            {items.duration}
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          {/* End of Your Restaurants */}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
