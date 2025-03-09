import { useState } from "react";

export default function Board() {
    const [text, setText] = useState("Original Text");

    const changeText = () => {
        setText("Text changed!");
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
        <label>time1</label>
        <input type='time' placeholder='Enter the time'/>
        <div class='input-box'>
        <label>time2</label>
        <input type='time' placeholder='Enter the time'/>
    </div>
    <div id="box">{text}</div>

<button type="button" onClick={changeText}>Click Me</button>
    </div>
</form>
</section>

</>);
}