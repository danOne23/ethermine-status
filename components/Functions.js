const FormatHashrate = rawHashrate => {
  let formattedHashrate = rawHashrate / 1000000;
  formattedHashrate = formattedHashrate.toFixed(2);
  return `${formattedHashrate} MH/s`;
};

const FormatName = (rawName = "") => {
  let formattedName = rawName;
  for (let i = 1; i < rawName.length; i++) {
    if (rawName[i].toUpperCase() == rawName[i]) {
      formattedName = formattedName.slice(0, i) + " " + formattedName.slice(i);
    }
  }

  formattedName =
    formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

  return formattedName;
};

const WeiToEth = (wei = new BigNumber()) => wei / Math.pow(10, 18);

const FormatTime = unixTime => {
  let now = Math.floor(Date.now() / 1000);
  let difference = now - unixTime;
  let returnTime;
  let unit;

  if (difference < 60) {
    returnTime = difference;
    unit = "seconds";
  } else if (difference < 7200) {
    returnTime = difference / 60;
    unit = "minutes";
  } else if (difference < 172800) {
    returnTime = difference / 3600;
    unit = "hours";
  } else if (difference < 63072000) {
    returnTime = difference / 86400;
    unit = "days";
  } else {
    returnTime = difference / 63072000;
    unit = "years";
  }

  returnTime = Math.floor(returnTime);
  console.log({ unixTime });
  return `${returnTime} ${unit}`;
};

const ConvertEstimatedEarnings = perMinute => {
  let day = perMinute * 60 * 24;
  let week = day * 7;
  let month = day * 30;
  let year = day * 365;

  let returnValues = [day, week, month, year];

  for (let i = 0; i < returnValues.length; i++)
    returnValues[i] = returnValues[i].toFixed(7);

  return returnValues;
};

const EthToBtc = (ethPerMin, btcPerMin) => btcPerMin / ethPerMin;
const EthToUsd = (ethPerMin, usdPerMin) => usdPerMin / ethPerMin;

export {
  FormatHashrate,
  FormatName,
  WeiToEth,
  FormatTime,
  ConvertEstimatedEarnings,
  EthToBtc,
  EthToUsd,
};
