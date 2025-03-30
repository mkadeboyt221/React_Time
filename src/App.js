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
        const result = `Place: ${place}\nTime at Location: ${timeAtLocation}\nTarget Time Zone: ${targetTimeZone}`;
        setText(result);
    };

    const calculateHourDifference = () => {
        const selectedZone = timeZones.find(zone => zone.value === targetTimeZone);
        if (selectedZone) {
          const diff = selectedZone.offset;
          const result = `The time difference between UTC and ${targetTimeZone} is ${diff} hour${Math.abs(diff) !== 1 ? "s" : ""}.`;
          setText(result);
        } else {
          setText("Please select a valid time zone.");
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
        const date = new Date(Date.UTC(2025, 0, 1, hour, minute, 0));
        const convertedDate = new Date(date.getTime() + selectedZone.offset * 60 * 60 * 1000);
      
        const h = String(convertedDate.getHours()).padStart(2, "0");
        const m = String(convertedDate.getMinutes()).padStart(2, "0");
      
        setText(`Converted time in ${targetTimeZone} is ${h}:${m}`);
    };

    return (
        <>
            <section className="container">
                <header>Time Zones</header>
                <form action="#" className="form">
                    <div className="input-box">
                        <label>Place</label>
                        <input type="text" placeholder="Enter the place" value={place} onChange={(e) => setPlace(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <label>Time At Location:</label>
                        <input type="time" value={timeAtLocation} onChange={(e) => settimeAtLocation(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <label>Target Time Zone:</label>
                        <select value={targetTimeZone} onChange={(e) => settargetTimeZone(e.target.value)}>
                            <option value="">Select a timezone</option>
                            {timeZones.map(zone => <option key={zone.value} value={zone.value}>{zone.label}</option>)}
                        </select>
                    </div>
                    <div id="box">{text}</div>
                    <button onClick={changeText}>Convert</button>
                    <br></br>
                    <button onClick={calculateHourDifference}>Show Hour Difference</button><br></br>
                    <button onClick={calculateConvertedTime}>Get Converted Time</button>
                </form>
            </section>
        </>
    );
}
