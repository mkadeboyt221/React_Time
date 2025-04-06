import React, { useState } from "react";
import TimeZoneForm from "./TimeZoneForm";
import ResultBox from "./ResultBox";
import ButtonGroup from "./ButtonGroup";

export default function Board() {
  const [text, setText] = useState("Original Text");
  const [place, setPlace] = useState("");
  const [timeAtLocation, setTimeAtLocation] = useState("");
  const [targetTimeZone, setTargetTimeZone] = useState("");

  const timeZones = [
    { value: "UTC", label: "UTC", offset: 0 },
    { value: "EST", label: "EST (Eastern Standard Time)", offset: -5 },
    { value: "PST", label: "PST (Pacific Standard Time)", offset: -8 },
    { value: "CST", label: "CST (Central Standard Time)", offset: -6 },
    { value: "IST", label: "IST (Indian Standard Time)", offset: 5.5 },
    { value: "GMT", label: "GMT (Greenwich Mean Time)", offset: 0 },
    { value: "AEST", label: "AEST (Australian Eastern Standard Time)", offset: 10 }
  ];

  const changeText = () => {
    const result = `
      Place: ${place}
      Time At Location: ${timeAtLocation}
      Target Time Zone: ${targetTimeZone}
    `;
    setText(result);
  };

  const calculateHourDifference = () => {
    const selectedZone = timeZones.find((zone) => zone.value === targetTimeZone);
    if (selectedZone) {
      const diff = selectedZone.offset;
      setText(`The time difference between UTC and ${targetTimeZone} is ${diff} hour(s).`);
    } else {
      setText("Please select a valid time zone to calculate the difference.");
    }
  };

  const calculateConvertedTime = () => {
    if (!timeAtLocation || !targetTimeZone) {
      setText("Please enter time and select a time zone.");
      return;
    }

    const selectedZone = timeZones.find(zone => zone.value === targetTimeZone);
    if (!selectedZone) {
      setText("Invalid time zone selected.");
      return;
    }

    const [hour, minute] = timeAtLocation.split(":").map(Number);
    const date = new Date();
    date.setUTCHours(hour, minute, 0, 0);

    const convertedDate = new Date(date.getTime() + selectedZone.offset * 60 * 60 * 1000);
    const h = String(convertedDate.getUTCHours()).padStart(2, "0");
    const m = String(convertedDate.getUTCMinutes()).padStart(2, "0");

    setText(`Converted time in ${targetTimeZone} is ${h}:${m}`);
  };

  return (
    <section className="container">
      <header>Time Zones</header>
      <form className="form">
        <TimeZoneForm
          place={place}
          timeAtLocation={timeAtLocation}
          targetTimeZone={targetTimeZone}
          timeZones={timeZones}
          setPlace={setPlace}
          setTimeAtLocation={setTimeAtLocation}
          setTargetTimeZone={setTargetTimeZone}
        />
        <ResultBox text={text} />
        <ButtonGroup
          onChangeText={changeText}
          onHourDiff={calculateHourDifference}
          onConvertedTime={calculateConvertedTime}
        />
      </form>
    </section>
  );
}
