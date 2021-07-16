import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, View, Dimensions } from "react-native";
import FetchData from "../FetchData/FetchData";

const AddressInput = () => {
  const [address, onChangeAddress] = useState();

  useEffect(() => {
    AsyncStorage.getItem("miner")
      .then(miner => onChangeAddress(miner))
      .catch(err => console.error(err));
  }, []);

  return (
    <View
      style={{
        justifyContent: "center",
        textAlign: "center",
      }}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeAddress}
        value={address}
        placeholder="Enter address"
      />
      <FetchData miner={address} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: Dimensions.get("window").width,
    textAlign: "center",
    color: "#808080",
  },
});

export default AddressInput;
