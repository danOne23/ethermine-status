import { createConfigItem } from "@babel/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, View, Dimensions, Button } from "react-native";
import FetchData from "../FetchData/FetchData";

function AddressInput() {
  const [address, onChangeAddress] = useState();
  const [currency, setCurrency] = useState("eth");
  let currentCurrency = 0;
  let currencies = ["eth", "btc", "usd"];

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
      <FetchData miner={address} currency={currency} />
      <View style={styles.button}>
        <Button
          title={"Change currency"}
          onPress={() => {
            if (currency === "eth") setCurrency("usd");
            else if (currency === "usd") setCurrency("btc");
            else if (currency === "btc") setCurrency("eth");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: Dimensions.get("window").width,
    textAlign: "center",
    color: "#808080",
  },
  button: {
    height: 40,
    width: Dimensions.get("window").width,
    color: "#808080",
  },
});

export default AddressInput;
