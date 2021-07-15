import axios from "axios";
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import ethereumAddress from "ethereum-address";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Stats from "../Stats/Stats";

function FetchData(props = { miner: "" }) {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(true);

  const url = `https://api.ethermine.org/miner/${props.miner}/currentStats`;

  const getMinerStats = () => {
    axios
      .get(url)
      .then((res) => {
        setStats(res.data["data"]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (ethereumAddress.isAddress(props.miner)) {
      getMinerStats();
      AsyncStorage.setItem("miner", props.miner).catch((err) =>
        console.error(err)
      );
    } else {
      setStats();
      setLoading(true);
    }
  }, [props.miner]);

  if (loading)
    return (
      <View>
        <Text style={{ textAlign: "center" }}>Invalid address</Text>
      </View>
    );
  return <Stats stats={stats} />;
}

export default FetchData;
