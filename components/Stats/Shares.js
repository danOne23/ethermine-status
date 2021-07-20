import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { styles } from "../Styles";
import { FormatName, CalculateSharePercentage, Name } from "../Functions";

function Shares(props = { stats: {}, name: "" }) {
  const [shareValue, setShareValue] = useState(props.stats[props.name]);

  useEffect(() => {
    if (shareValue == null) setShareValue(0);
  });

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
      <Text style={styles.value}>{shareValue}</Text>
    </Text>
  );
}

export default Shares;
