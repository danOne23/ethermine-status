import axios from "axios";
import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import ethereumAddress from "ethereum-address";

function FetchData(props = { miner: "" }) {
  const [stats, setStats] = useState();

  const url = `https://api.ethermine.org/miner/${props.miner}/currentStats`;

  const getMinerStats = () => {
    axios
      .get(url)
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (ethereumAddress.isAddress(props.miner)) getMinerStats();
    else {
      setStats("invalid");
    }
  }, [props.miner]);

  if (stats !== "invalid")
    return <Text style={{ textAlign: "center" }}>{JSON.stringify(stats)}</Text>;
  else return <Text style={{ textAlign: "center" }}>Invalid address</Text>;
}

export default FetchData;
