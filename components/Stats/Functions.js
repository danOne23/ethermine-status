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

const WeiToEth = (wei = new BigNumber(), decimals) =>
  wei.dividedBy(Math.pow(10, 18)).toFixed(decimals);

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
  return `${returnTime} ${unit}`;
};

export { FormatHashrate, FormatName, WeiToEth, FormatTime };
