import React from "react";
import { Text, View } from "react-native";
import { styles } from "./Stats";
import { FormatHashrate, FormatName } from "./Functions";

function Hashrate(props = { stats: {}, name: "" }) {
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
