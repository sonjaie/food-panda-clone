//import screens

//import dependencies
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Dimensions,
  Animated,
} from "react-native";
import { Header, SearchBar } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

//import icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default function HeaderNav({ navigation }) {
  // start of function modal
  const [modalY, setmodalY] = useState(new Animated.Value(-deviceHeight));
  const [showY, setshowY] = useState(false);

  function openModal() {
    setshowY(!showY);
    Animated.timing(modalY, {
      duration: 300,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }

  function closeModal() {
    setshowY(!showY);
    Animated.timing(modalY, {
      duration: 500,
      toValue: -deviceHeight,
      useNativeDriver: true,
    }).start();
  }
  // end of funtion modal

  function NavCloseModal() {
    closeModal();
    navigation.navigate("GetCurrentLocation");
  }

  return (
    <>
      {/* Start of Modal */}
      <Animated.View
        style={[styles.showmodal, { transform: [{ translateY: modalY }] }]}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 100,
          }}
        >
          <View style={{ paddingBottom: 15, marginRight: 100 }}>
            <TouchableOpacity
              onPress={() => NavCloseModal()}
              style={{
                flexDirection: "row",
              }}
            >
              <FontAwesome name="location-arrow" color="#FF1493" size={25} />
              <Text
                style={{
                  paddingLeft: 15,
                  fontWeight: "bold",
                  color: "#FF1493",
                }}
              >
                Use my current location
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#ffe6e6",
              borderRadius: 15,
              flexDirection: "row",
              marginBottom: 15,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 15,
              }}
            >
              <View>
                <MaterialIcons name="my-location" color="#FF1493" size={25} />
              </View>
              <View
                style={{
                  width: "80%",
                  paddingTop: 15,
                  paddingLeft: 15,
                  paddingBottom: 15,
                  //marginLeft: 20,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Home
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "grey",
                  }}
                >
                  Olape Compound St. Michael St Cagayan De Oro Misamis Oriental
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginRight: 130 }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
              }}
            >
              <MaterialIcons name="add" color="#FF1493" size={25} />
              <Text
                style={{
                  paddingLeft: 15,
                  fontWeight: "bold",
                  color: "#FF1493",
                }}
              >
                Add New Address
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
      {/* End of Modal */}
      <View>
        <Header
          containerStyle={{
            zIndex: 1,
            borderBottomWidth: 2,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            shadowColor: "grey",
            shadowOffset: {
              width: 1,
              height: 2,
            },

            elevation: 6,
            marginBottom: 1,
          }}
          backgroundColor="white"
          placement="left"
          leftComponent={{
            text: (
              <>
                <View>
                  {!showY ? (
                    <>
                      <TouchableOpacity>
                        <MaterialCommunityIcons
                          name={!showY ? "menu" : "close"}
                          color="#FF1493"
                          size={25}
                        />
                      </TouchableOpacity>
                    </>
                  ) : (
                    <>
                      <TouchableOpacity>
                        <MaterialCommunityIcons
                          onPress={() => closeModal()}
                          name={!showY ? "menu" : "close"}
                          color="#FF1493"
                          size={25}
                        />
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </>
            ),
          }}
          centerComponent={{
            text: (
              <>
                <View>
                  <Text style={{ color: "#FF1493", fontWeight: "bold" }}>
                    Home
                  </Text>
                  {showY ? (
                    <>
                      <Text style={{ color: "black" }}>
                        Olape Compund St. Michael St
                      </Text>
                    </>
                  ) : (
                    <>
                      <Text
                        onPress={() => openModal()}
                        style={{ color: "black" }}
                      >
                        Olape Compund St. Michael St
                      </Text>
                    </>
                  )}
                </View>
              </>
            ),
          }}
          rightComponent={{
            text: (
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
                    <Fontisto
                      name="shopping-basket"
                      color="#FF1493"
                      size={23}
                    />
                  </TouchableOpacity>
                </View>
              </>
            ),
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  showmodal: {
    borderWidth: 0.5,
    borderRadius: 10,
    height: 290,
    width: deviceWidth,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    justifyContent: "center",
    zIndex: 1,
  },
});
