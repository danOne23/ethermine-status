import axios from "axios";
import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import ethereumAddress from "ethereum-address";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Stats from "../Stats/Stats";
import { styles } from "../Styles";

function FetchData(props = { miner: "" }) {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("eth");

  const url = `https://api.ethermine.org/miner/${props.miner}/currentStats`;

  const getMinerStats = () => {
    axios
      .get(url)
      .then(res => {
        let data = res.data["data"];
        if (data !== "NO DATA") {
          data["ethPerMin"] = data["coinsPerMin"];
          setStats(data);
          setLoading(false);
        } else {
          setLoading(true);
          return;
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (ethereumAddress.isAddress(props.miner)) {
      getMinerStats();
      AsyncStorage.setItem("miner", props.miner).catch(err =>
        console.error(err),
      );
    } else {
      setStats();
      setLoading(true);
    }
  }, [props.miner]);

  if (loading)
    return (
      <View>
        <Text style={styles.title}>Invalid address</Text>
      </View>
    );
  return (
    <View>
      <Stats stats={stats} currency={currency} />
      <View style={styles.container}>
        <Button
          title={"Change currency"}
          color="#9999999999"
          onPress={() => {
            if (currency === "eth") setCurrency("usd");
            else if (currency === "usd") setCurrency("btc");
            else if (currency === "btc") setCurrency("eth");
          }}
        />
      </View>
    </View>
  );
}

export default FetchData;
