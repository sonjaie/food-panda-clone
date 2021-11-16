//import dependencies
import React, { useState } from "react";
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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

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

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default function HeaderNav() {
  const [modalY, setmodalY] = useState(new Animated.Value(-deviceHeight));
  const [showY, setshowY] = useState(false);

  function openModal() {
    setshowY(true);
    Animated.timing(modalY, {
      duration: 500,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }

  function closeModal() {
    setshowY(false);
    Animated.timing(modalY, {
      duration: 500,
      toValue: -deviceHeight,
      useNativeDriver: true,
    }).start();
  }

  return (
    <>
      {/* Start of Modal */}
      <Animated.View
        style={[styles.showmodal, { transform: [{ translateY: modalY }] }]}
      >
        <View>
          <TouchableOpacity onPress={() => closeModal()}>
            <Text>Hello Modal</Text>
          </TouchableOpacity>
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
            size: 30,
            icon: "menu",
            color: "#FF1493",
            onPress: () => closeModal(),
          }}
          centerComponent={{
            text: (
              <View>
                <Text style={{ color: "#FF1493", fontWeight: "bold" }}>
                  Home{" "}
                </Text>
                <Text onPress={() => openModal()} style={{ color: "black" }}>
                  Olape Compund St. Michael St
                </Text>
              </View>
            ),
          }}
          rightComponent={{ text: rightComponent() }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  showmodal: {
    borderWidth: 0.5,
    borderRadius: 10,
    height: 200,
    width: deviceWidth,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    justifyContent: "center",
    zIndex: 1,
  },
});
