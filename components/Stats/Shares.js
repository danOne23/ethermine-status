import React from "react";
import { Text } from "react-native";
import { styles } from "../Styles";
import { FormatName, CalculateSharePercentage, Name } from "../Functions";

function Shares(props = { stats: {}, name: "" }) {
  return (
    <Text style={styles.title}>
      {Name(
        FormatName(props.name),
        CalculateSharePercentage(
          props.stats["validShares"],
          props.stats["invalidShares"],
          props.stats["staleShares"],
          props.stats[props.name],
        ),
      )}
      {": "}
      <Text style={styles.value}>{props.stats[props.name]}</Text>
    </Text>
  );
}

export default Shares;
