import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";

function Currency(props = { stats: {}, name: "", currency: "" }) {
  const [value, setValue] = useState();

  const WeiToEth = wei => (wei / Math.pow(10, 18)).toFixed(7);

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

  useEffect(() => {
    if (props.currency.toLowerCase() == "eth")
      setValue(WeiToEth(props.stats[props.name]));
  });

  return (
    <Text style={styles.name}>
      {FormatName(props.name)}
      {": "}
      <Text style={styles.currency}>
        {value} {props.currency}
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  name: {
    textAlign: "center",
  },
  currency: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Currency;
