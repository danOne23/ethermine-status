import React from "react";
import { Text } from "react-native";
import { styles } from "./Stats";

function Shares(props = { stats: {}, name: "" }) {
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

  const CalculateSharePercentage = (valid, invalid, stale, target) =>
    parseFloat((target / (valid + invalid + stale)) * 100).toFixed(0);

  const Name = (name, percentage) => {
    if (percentage > 0) return `${name} ${percentage}%`;
    else return name;
  };

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
