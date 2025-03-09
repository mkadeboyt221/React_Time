import { useState } from "react";

export default function Board() {
    const [text, setText] = useState("Original Text");
    const [place, setPlace] = useState("");
    const [timeAtLocation, settimeAtLocation] = useState("");
    const [targetTimeZone, settargetTimeZone] = useState("");

    const changeText = () => {
        const result = `
            Place: ${place}
           timeAtLocation: ${timeAtLocation}
            targetTimeZone: ${targetTimeZone}
           ` ;

        setText(result);
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
                        <option value="UTC">UTC</option>
                        <option value="EST">EST (Eastern Standard Time)</option>
                        <option value="PST">PST (Pacific Standard Time)</option>
                        <option value="CST">CST (Central Standard Time)</option>
                        <option value="IST">IST (Indian Standard Time)</option>
                        <option value="GMT">GMT (Greenwich Mean Time)</option>
                        <option value="AEST">AEST (Australian Eastern Standard Time)</option>
                    </select>
    </div>
    <div id="box">{text}</div>

<button type="button" onClick={changeText}>Convert</button>
    </div>
</form>
</section>

</>);
}