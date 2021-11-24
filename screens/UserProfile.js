import React, { createRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function UserProfile({ navigation }) {
  const [tempData, settempData] = useState([]);
  const [userID, setuserID] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [errortext, setErrortext] = useState("");

  const passwordInputRef = createRef();

  const handleSubmitPress = async () => {
    setErrortext("");
    if (!username) {
      alert("Please fill Email");
      return;
    }
    if (!email) {
      alert("Please fill Password");
      return;
    }
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        userID: userID,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => settempData([...tempData, json]));
  };

  function handleUpdatePress(userID, username, email) {
    var index = tempData.findIndex((x) => x.userID === userID);
    if (index === -1) {
    } else {
      let temp_element = tempData[index];
      temp_element.userID = userID;
      temp_element.username = username;
      temp_element.email = email;
      tempData[index] = temp_element;
    }
    console.log(tempData);
  }

  function DisplayTempData() {
    //console.log(tempData);
    if (tempData.length > 0) {
      return (
        <>
          <View>
            {tempData.map((items, index) => {
              return (
                <>
                  <View key={items.index}>
                    <Text>ID: {items.userID}</Text>
                    <Text>Username: {items.username}</Text>
                    <Text>Email: {items.email}</Text>
                  </View>
                </>
              );
            })}
          </View>
        </>
      );
    } else {
      return (
        <>
          <View>
            <Text>Walai SUlod</Text>
          </View>
        </>
      );
    }
  }

  return (
    <>
      <SafeAreaView>
        <View style={{ paddingTop: 25, paddingLeft: 25 }}>
          <TouchableOpacity>
            <Ionicons
              onPress={() => {
                navigation.replace("MainScreen");
                //navigation.navigate("MainScreen");
              }}
              name="arrow-back"
              color="black"
              size={25}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(userID) => setuserID(userID)}
            placeholder="ID"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(username) => setusername(username)}
            placeholder="Username" //dummy@abc.com
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(email) => setemail(email)}
            placeholder="Email" //12345
            placeholderTextColor="#8b9cb5"
            keyboardType="default"
            ref={passwordInputRef}
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            underlineColorAndroid="#f000"
            returnKeyType="next"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitPress}
          >
            <Text style={styles.buttonTextStyle}>POST</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonStyle1}
            activeOpacity={0.5}
            onPress={handleUpdatePress(userID, username, email)}
          >
            <Text style={styles.buttonTextStyle}>UPDATE</Text>
          </TouchableOpacity>
        </View>
        <View>{DisplayTempData()}</View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    color: "black",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonStyle1: {
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
});
