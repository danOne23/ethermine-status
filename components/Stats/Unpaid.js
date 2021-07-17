import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";

function Unpaid(props = { stats: {}, name: "", currency: "" }) {
  const [value, setValue] = useState();

  const WeiToEth = wei => (wei / Math.pow(10, 18)).toFixed(7);

  useEffect(() => {
    if (props.currency.toLowerCase() == "eth")
      setValue(WeiToEth(props.stats[props.name]));
  });

  return (
    <Text style={styles.name}>
      Unpaid:{" "}
      <Text style={styles.unpaid}>
        {value} {props.currency}
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  name: {
    textAlign: "center",
  },
  unpaid: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Unpaid;
