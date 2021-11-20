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
import GetCurrentLocation from "../screens/GetCurrentLocation";

//import icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Easing } from "react-native-reanimated";

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

  // show drawer

  // hide drawer

  const [showLocation, setshowLocation] = useState(false);
  function ShowMap() {
    setshowLocation(!showLocation);
    console.log(showLocation);
    //closeModal();
    //navigation.navigate("GetCurrentLocation");
  }

  function HideMap() {
    setshowLocation(!showLocation);
    console.log(showLocation);
  }

  function ShowCurrentLocation() {
    return (
      <>
        <View
          style={{
            backgroundColor: "#ffe6e6",
            borderRadius: 15,
            flexDirection: "row",
            marginTop: 80,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 15,
            }}
          >
            <View style={{ marginTop: 125 }}>
              <MaterialIcons name="my-location" color="#FF1493" size={25} />
            </View>
            <View
              style={{
                width: "80%",
                //paddingTop: 15,
                paddingLeft: 15,
                paddingBottom: 15,
                //marginLeft: 20,
              }}
            >
              <View>
                <GetCurrentLocation />
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "black",
                  paddingTop: 30,
                }}
              >
                Current Location
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
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 15,
            flexDirection: "row",
            marginBottom: 15,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              HideMap();
            }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 15,
            }}
          >
            <View>
              <MaterialIcons
                name="location-searching"
                color="#FF1493"
                size={25}
              />
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
      </>
    );
  }

  function HideCurrentLocation() {
    return (
      <>
        <View>
          <TouchableOpacity
            onPress={() => ShowMap()}
            style={{
              flexDirection: "row",
              marginRight: 100,
              marginBottom: 15,
              marginTop: 80,
            }}
          >
            <View>
              <FontAwesome
                style={{ marginRight: 20 }}
                name="location-arrow"
                color="#FF1493"
                size={25}
              />
            </View>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#FF1493",
                }}
              >
                Use my current location
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#ffe6e6",
            borderRadius: 15,
            flexDirection: "row",
            marginBottom: 15,
            width: 300,
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
                width: 250,
                paddingLeft: 15,
                paddingBottom: 15,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "black",
                  paddingTop: 15,
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
      </>
    );
  }

  return (
    <>
      {/* Start of Modal */}
      <Animated.View
        style={[
          showLocation ? styles.showmodal : styles.showmodal1,
          { transform: [{ translateY: modalY }] },
        ]}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {showLocation ? ShowCurrentLocation() : HideCurrentLocation()}
        </View>
      </Animated.View>
      {/* End of Modal */}

      {/* Start of Drawer */}
      {/* End of Drawer */}
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
                          name="menu"
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
                          name={showY ? "close" : "menu"}
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
    height: 450,
    width: deviceWidth,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    justifyContent: "center",
    zIndex: 1,
  },
  showmodal1: {
    borderWidth: 0.5,
    borderRadius: 10,
    height: 300,
    width: deviceWidth,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    justifyContent: "center",
    zIndex: 1,
  },

  showDrawer: {
    //borderWidth: 0.5,
    //borderRadius: 10,
    height: deviceHeight,
    width: 300,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    justifyContent: "center",
    zIndex: 1,
  },
});
