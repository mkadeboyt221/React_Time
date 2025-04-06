import React from "react";

export default function ButtonGroup({ onChangeText, onHourDiff, onConvertedTime }) {
  return (
    <div style={{ marginTop: "10px" }}>
      <button type="button" onClick={onChangeText}>Convert</button>
      <button type="button" onClick={onHourDiff} style={{ marginLeft: "10px" }}>
        Show Hour Difference
      </button>
      <button type="button" onClick={onConvertedTime} style={{ marginLeft: "10px" }}>
        Get Converted Time
      </button>
    </div>
  );
}
