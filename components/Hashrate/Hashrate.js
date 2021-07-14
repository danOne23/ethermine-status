import React from "react";
import { StyleSheet, Text } from "react-native";

function Hashrate(props) {
  const FormatHashrate = (rawHashrate) => {
    let formattedHashrate = rawHashrate / 1000000;
    formattedHashrate = formattedHashrate.toFixed(2);
    return `${formattedHashrate} MH/s`;
  };

  return <Text style={styles.text}>{FormatHashrate(props.hashrate)}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Hashrate;
