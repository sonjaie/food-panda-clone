import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, SearchBar } from "react-native-elements";

export default function Searchbar() {
  const [search, setsearch] = useState("");
  const onChangeSearch = (query) => setsearch(query);
  return (
    <View style={{ paddingTop: 15 }}>
      <SearchBar
        inputStyle={{
          backgroundColor: "transparent",
          color: "black",
          fontSize: 15,
        }}
        containerStyle={{
          backgroundColor: "transparent",
          borderWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          marginBottom: 10,
        }}
        inputContainerStyle={{
          backgroundColor: "transparent",
          borderWidth: 1,
          borderBottomWidth: 1,
          borderRadius: 15,
        }}
        placeholder="Search for shops & restaurants"
        onChangeText={onChangeSearch}
        value={search}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
