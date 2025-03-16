import { useState } from "react";

export default function Board() {
    const [text, setText] = useState("Original Text");
    const [place, setPlace] = useState("");
    const [timeAtLocation, settimeAtLocation] = useState("");
    const [targetTimeZone, settargetTimeZone] = useState("");

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
           timeAtLocation: ${timeAtLocation}
            targetTimeZone: ${targetTimeZone}
           ` ;

        setText(result);
    };

    const calculateHourDifference = () => {
        const selectedZone = timeZones.find((zone) => zone.value === targetTimeZone);
        if (selectedZone) {
          const diff = selectedZone.offset;
          const result = `The time difference between UTC and ${targetTimeZone} is ${diff} hour(s).`;
          setText(result);
        } else {
          setText("Please select a valid time zone to calculate the difference.");
        }
      };

return(<>
<section class='container'>
<header>Time Zones</header>
<form action='#' class='form'>
    <div class='input-box'>
        <label>Place</label>
        <input type='text' placeholder='Enter the place'/>
    </div>
    <div class='input-box'>
        <label>time At Location:</label>
        <input type='time' placeholder='Enter the time'/>
        <div class='input-box'>
        <label>target Time Zone:</label>
        
        <select
                        value={targetTimeZone}
                        onChange={(e) => settargetTimeZone(e.target.value)}
                    >
                       <option value="">Select a timezone</option>
  {timeZones.map((zone) => (
    <option key={zone.value} value={zone.value}>
      {zone.label}
    </option>
  ))}
                    </select>
    </div>
    <div id="box">{text}</div>

<button type="button" onClick={changeText}>Convert</button>
<button type="button" onClick={calculateHourDifference} style={{ marginLeft: "10px" }}>
Show Hour Difference </button>
    </div>
</form>
</section>

</>);
}