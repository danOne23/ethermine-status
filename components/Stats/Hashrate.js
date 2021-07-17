import React from "react";
import { Text, View } from "react-native";
import { styles } from "./Stats";

function Hashrate(props = { stats: {}, name: "" }) {
  const FormatHashrate = rawHashrate => {
    let formattedHashrate = rawHashrate / 1000000;
    formattedHashrate = formattedHashrate.toFixed(2);
    return `${formattedHashrate} MH/s`;
  };

  const FormatName = (rawName = "") => {
    let formattedName = rawName;
    for (let i = 1; i < rawName.length; i++) {
      if (rawName[i].toUpperCase() == rawName[i]) {
        formattedName =
          formattedName.slice(0, i) + " " + formattedName.slice(i);
      }
    }

    formattedName =
      formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

    return formattedName;
  };

  return (
    <View>
      <Text style={styles.title}>
        {FormatName(props.name)}
        {": "}
        <Text style={styles.value}>
          {FormatHashrate(props.stats[props.name])}
        </Text>
      </Text>
    </View>
  );
}

export default Hashrate;
