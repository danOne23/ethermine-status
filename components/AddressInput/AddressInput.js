import React, { useState } from "react";
import { TextInput, StyleSheet, View, Dimensions } from "react-native";
import FetchData from "../FetchData/FetchData";

const AddressInput = () => {
  const [address, onChangeAddress] = useState();

  return (
    <View
      style={{
        justifyContent: "center",
        textAlign: "center",
      }}
    >
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
    borderColor: "#fffff",
    width: Dimensions.get("window").width,
    textAlign: "center",
  },
});

export default AddressInput;
