import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import FetchData from "../FetchData/FetchData";
import { styles } from "../Styles";

function AddressInput() {
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
}

export default AddressInput;
