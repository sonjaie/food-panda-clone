// Import Screens
//import FoodDelivery from "./FoodDelivery";
import Searchbar from "../components/Searchbar";

// Import Dependencies
import React from "react";
import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function HomeScreen({ navigation }) {
  const yourRestaurantHome = [
    {
      img: require("../assets/home-your-restaurants/burger-king.jpg"),
      name: "Burger King",
      duration: " 25 min",
      location: "Xavier Divisoria",
      food: ["Burger", "Fries", "Beverages", "Rice"],
      fee: "₱ 40 delivery fee",
    },
    {
      img: require("../assets/home-your-restaurants/jollibee.jpg"),
      name: "Jollibee",
      duration: " 20 min",
      location: "CDO NHA Kauswagan",
      food: ["Burger", "Fries", "Beverages", "Rice"],
      fee: "₱ 40 delivery fee",
    },
    {
      img: require("../assets/home-your-restaurants/kfc.jpg"),
      name: "KFC",
      duration: " 15 min",
      location: "SM Downtown KFC",
      food: ["Burger", "Fries", "Beverages", "Rice"],
      fee: "₱ 40 delivery fee",
    },
    {
      img: require("../assets/home-your-restaurants/mcdo.jpg"),
      name: "MCDO",
      duration: " 10 min",
      location: "CDO NHA Kauswagan",
      food: ["Burger", "Fries", "Beverages", "Rice"],
      fee: "₱ 40 delivery fee",
    },
  ];

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

  const cuisinesHome = [
    {
      id: "1",
      img: require("../assets/home-cuisines/asian.png"),
      title: "Asian",
      no_restaurants: "308",
    },
    {
      id: "2",
      img: require("../assets/home-cuisines/burgers.png"),
      title: "Burgers",
      no_restaurants: "29",
    },
    {
      id: "3",
      img: require("../assets/home-cuisines/chicken.png"),
      title: "Chicken",
      no_restaurants: "96",
    },
    {
      id: "4",
      img: require("../assets/home-cuisines/pizza.png"),
      title: "Pizza",
      no_restaurants: "32",
    },
    {
      id: "5",
      img: require("../assets/home-cuisines/cake.png"),
      title: "Cakes",
      no_restaurants: "47",
    },
    {
      id: "6",
      img: require("../assets/home-cuisines/filipino.png"),
      title: "Filipino",
      no_restaurants: "226",
    },
    {
      id: "7",
      img: require("../assets/home-cuisines/fish.png"),
      title: "Fish",
      no_restaurants: "2",
    },
    {
      id: "8",
      img: require("../assets/home-cuisines/fruit.png"),
      title: "Fruit",
      no_restaurants: "4",
    },
    {
      id: "9",
      img: require("../assets/home-cuisines/french.png"),
      title: "French",
      no_restaurants: "2",
    },
  ];
  return (
    <>
      <ScrollView>
        <View
          style={{
            //paddingTop: 5,
            width: "90%",
            alignSelf: "center",
          }}
        >
          {/* Search bar */}
          {/* <Searchbar /> */}
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
          {/* start of food delivery button */}
          <TouchableOpacity onPress={() => navigation.navigate("FoodDelivery")}>
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
              <View style={styles.homeScreenBtnTxt}>
                <Text style={styles.homeScreenBtnTxtHeader}>Food Delivery</Text>
                <Text style={styles.homeScreenBtnTxtDescription}>
                  Order food you love
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          {/* end of food delivery button */}
          <View
            style={{
              marginBottom: 15,
              //flex: 1,
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
                  <View style={styles.homeScreenBtnTxt}>
                    <Text style={styles.homeScreenBtnTxtHeader}>Shops</Text>
                    <Text style={styles.homeScreenBtnTxtDescription}>
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
                    <View style={styles.homeScreenBtnTxt}>
                      <Text style={styles.homeScreenBtnTxtHeader}>Pick-up</Text>
                      <Text style={styles.homeScreenBtnTxtDescription}>
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
                    <View style={styles.homeScreenBtnTxt}>
                      <Text style={styles.homeScreenBtnTxtHeader}>Dine-in</Text>
                      <Text style={styles.homeScreenBtnTxtDescription}>
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
            <Text style={styles.homeScreenTxtHeader}>Your Restaurants</Text>
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
                  const foodAddstring = items.food.join(", ");
                  return (
                    <TouchableOpacity>
                      <ImageBackground
                        key={index}
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
                              paddingLeft: 5,
                            }}
                          >
                            {items.duration}
                          </Text>
                        </View>
                      </ImageBackground>
                      <View style={{ marginTop: 10 }}>
                        <Text
                          numberOfLines={1}
                          ellipsizeMode="tail"
                          style={{ fontWeight: "bold", width: 250 }}
                        >
                          {items.name} - {items.location}
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
                        <Text style={{ fontWeight: "bold" }}>{items.fee}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          {/* End of Your Restaurants */}
          {/* Start of Promo Card */}
          <View style={{ paddingBottom: 30, paddingTop: 15 }}>
            <TouchableOpacity>
              <ImageBackground
                style={{
                  width: "100%",
                  height: 100,
                  borderRadius: 15,
                  overflow: "hidden",
                  borderWidth: 0.5,
                  marginRight: 15,
                }}
                source={require("../assets/home-your-restaurants/discount-card.png")}
              >
                <View
                  style={{
                    position: "absolute",
                    bottom: 20,
                    left: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "black",
                      fontWeight: "bold",
                      width: 150,
                      paddingLeft: 8,
                    }}
                  >
                    Become a pro
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "black",
                      //fontWeight: "bold",
                      width: 150,
                      paddingLeft: 8,
                    }}
                  >
                    for monthly FREE deliveries
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          {/* End of Promo Card */}
          {/* Start of Daily Deals */}
          <View style={{ paddingBottom: 15 }}>
            <Text style={styles.homeScreenTxtHeader}>Your Daily Deals</Text>
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
          {/* End of Daily Deals */}
          {/* Start of Cuisines */}
          <View style={{ paddingBottom: 15, paddingTop: 15 }}>
            <Text style={styles.homeScreenTxtHeader}>Cuisines</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <FlatList
                contentContainerStyle={{ alignSelf: "flex-start" }}
                numColumns={Math.ceil(cuisinesHome.length / 2)}
                keyExtractor={(item) => item.id}
                data={cuisinesHome}
                renderItem={({ item }) => (
                  <View style={{ marginBottom: 15 }}>
                    <TouchableOpacity>
                      <ImageBackground
                        style={{
                          width: 200,
                          height: 100,
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
                            bottom: 20,
                            left: 5,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 20,
                              color: "white",
                              fontWeight: "bold",
                              width: 150,
                              paddingLeft: 8,
                            }}
                          >
                            {item.title}
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              color: "black",
                              //fontWeight: "bold",
                              width: 150,
                              paddingLeft: 8,
                            }}
                          >
                            {item.no_restaurants} restaurants
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </ScrollView>
          </View>
          {/* End of Cuisines */}
          {/* Start of pandapicks */}
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.homeScreenTxtHeader}>pandapicks</Text>
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
                  const foodAddstring = items.food.join(", ");
                  return (
                    <TouchableOpacity>
                      <ImageBackground
                        key={index}
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
                              paddingLeft: 5,
                            }}
                          >
                            {items.duration}
                          </Text>
                        </View>
                      </ImageBackground>
                      <View style={{ marginTop: 10 }}>
                        <Text
                          numberOfLines={1}
                          ellipsizeMode="tail"
                          style={{ fontWeight: "bold", width: 250 }}
                        >
                          {items.name} - {items.location}
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
                        <Text style={{ fontWeight: "bold" }}>{items.fee}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          {/* End of pandapicks */}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  homeScreenViewPerItem: {},
  homeScreenBtnTxt: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  homeScreenBtnTxtHeader: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  homeScreenBtnTxtDescription: {
    fontSize: 15,
    color: "white",
  },
  homeScreenTxtHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
});
