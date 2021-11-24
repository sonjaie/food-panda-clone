//import screens
import GetCurrentLocation from "../screens/GetCurrentLocation";
import MainScreen from "../screens/MainScreen";
import FoodDelivery from "../screens/FoodDelivery";

//import dependencies
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Animated,
  Alert,
} from "react-native";
import { Header, SearchBar, Button } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Easing } from "react-native-reanimated";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";

//import icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import DrawerNav from "../screens/DrawerNav";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default function HeaderNav({ navigation }) {
  const [userDetails, setuserDetails] = useState([]);
  const [token, setToken] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem("userLogin").then((value) => {
        if (value === null) {
          setToken(false);
        } else {
          setuserDetails(JSON.parse(value));
          setToken(true);
        }
      });
    }, 1000);
    //AsyncStorage.clear();
  }, []);

  function logout() {
    AsyncStorage.removeItem("userLogin");
    setToken(false);
  }

  // start of function modal
  const [modalVisible, setModalVisible] = useState(false);
  const [modalY, setmodalY] = useState(new Animated.Value(-deviceHeight));
  const [showY, setshowY] = useState(false);

  const [loginModalVisible, setloginModalVisible] = useState(false);

  const toggleModal = () => {
    setloginModalVisible(!loginModalVisible);
    setModalVisible(modalVisible);
  };

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

  function Nouser() {
    return (
      <>
        <View style={{ height: 200, marginTop: 50, marginLeft: 10 }}>
          <View style={{ position: "absolute", top: 150 }}>
            <Pressable onPress={toggleModal}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Log in / Create account
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={{ backgroundColor: "white", height: deviceHeight }}>
          <View style={{ borderBottomWidth: 1, borderColor: "#DCDCDC" }}>
            <View>
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 15,
                  paddingLeft: 15,
                }}
              >
                <SimpleLineIcons name="question" color="#FF1493" size={25} />
                <Text style={{ paddingLeft: 30 }}>Help Center</Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 15,
                paddingLeft: 15,
                paddingBottom: 15,
              }}
            >
              <AntDesign name="gift" color="#FF1493" size={25} />
              <Text style={{ paddingLeft: 30 }}>Invite Friends</Text>
            </View>
          </View>
          <View style={{ paddingTop: 15, paddingLeft: 15 }}>
            <View>
              <Text>Settings</Text>
            </View>
            <View style={{ paddingTop: 15 }}>
              <Text>Terms & Conditions / Privacy</Text>
            </View>
          </View>
        </View>
      </>
    );
  }

  function LoginUser() {
    return (
      <>
        <View style={{ height: 200, marginTop: 50, marginLeft: 10 }}>
          <View style={{ position: "absolute", top: 150 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {userDetails.map((items, index) => {
                return items.name;
              })}
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "white", height: deviceHeight }}>
          <View>
            <View
              style={{
                paddingBottom: 15,
                borderBottomWidth: 1,
                borderColor: "#DCDCDC",
              }}
            >
              <Text
                style={{
                  paddingLeft: 30,
                  fontWeight: "bold",
                  paddingTop: 15,
                }}
              >
                foodpanda pay
              </Text>
              <Text
                style={{
                  paddingLeft: 30,
                  paddingTop: 5,
                }}
              >
                Balanace and payment methods
              </Text>
            </View>
            <View>
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 15,
                  paddingLeft: 15,
                }}
              >
                <SimpleLineIcons name="question" color="#FF1493" size={25} />
                <Text style={{ paddingLeft: 30 }}>Help Center</Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 15,
                paddingLeft: 15,
                paddingBottom: 15,
              }}
            >
              <AntDesign name="gift" color="#FF1493" size={25} />
              <Text style={{ paddingLeft: 30 }}>Invite Friends</Text>
            </View>
            <View>
              <Pressable
                onPress={() => {
                  navigation.replace("UserProfile");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 15,
                }}
              >
                <AntDesign name="profile" color="#FF1493" size={25} />
                <Text style={{ paddingLeft: 30 }}>Profile</Text>
              </Pressable>
            </View>
            <View>
              <Pressable
                onPress={() => logout()}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 15,
                  paddingLeft: 15,
                }}
              >
                <SimpleLineIcons name="logout" color="#FF1493" size={25} />
                <Text style={{ paddingLeft: 30 }}>Logout</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </>
    );
  }

  const [showLocation, setshowLocation] = useState(false);
  function ShowMap() {
    setshowLocation(!showLocation);
  }

  function HideMap() {
    setshowLocation(!showLocation);
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
      <View>
        <Modal
          onBackdropPress={() => setloginModalVisible(false)}
          style={{ margin: 0, position: "absolute", bottom: 0 }}
          isVisible={loginModalVisible}
        >
          <View
            style={{
              backgroundColor: "white",
              width: deviceWidth,
              height: 250,
            }}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 20,
                paddingTop: 30,
                paddingLeft: 30,
              }}
            >
              Sign up or log in
            </Text>
            <Button
              onPress={() => navigation.navigate("DrawerNav")}
              containerStyle={{
                width: 300,
                marginHorizontal: 30,
                marginVertical: 10,
              }}
              icon={
                <MaterialIcons
                  style={{ paddingRight: 15 }}
                  name="email"
                  size={15}
                  color="white"
                />
              }
              title="Continue with email"
            />
          </View>
        </Modal>
      </View>
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
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        style={{ margin: 0 }}
        isVisible={modalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
      >
        <View
          style={{
            backgroundColor: "#FF1493",
            height: deviceHeight,
            width: 250,
          }}
        >
          {token ? LoginUser() : Nouser()}
        </View>
      </Modal>
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
                          onPress={() => setModalVisible(true)}
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
