import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { styles } from "../Styles";
import { WeiToEth, EthToBtc, EthToUsd } from "../Functions";

function Unpaid(props = { stats: {}, currency: "" }) {
  const [value, setValue] = useState();

  useEffect(() => {
    let ethPerMin = props.stats["ethPerMin"];
    let unpaidEth = WeiToEth(props.stats["unpaid"]);
    let unpaidBtc = unpaidEth * EthToBtc(ethPerMin, props.stats["btcPerMin"]);
    let unpaidUsd = unpaidEth * EthToUsd(ethPerMin, props.stats["usdPerMin"]);
    if (props.currency === "eth") {
      setValue(unpaidEth.toFixed(7));
    } else if (props.currency === "btc") {
      setValue(unpaidBtc.toFixed(7));
    } else if (props.currency === "usd") {
      setValue(unpaidUsd.toFixed(7));
    }
  }, [props.currency]);

  return (
    <Text style={styles.title}>
      Unpaid:{" "}
      <Text style={styles.value}>
        {value} {props.currency.toUpperCase()}
      </Text>
    </Text>
  );
}

export default Unpaid;
