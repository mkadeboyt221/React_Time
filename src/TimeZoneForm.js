import React from "react";

export default function TimeZoneForm({
  place,
  timeAtLocation,
  targetTimeZone,
  timeZones,
  setPlace,
  setTimeAtLocation,
  setTargetTimeZone
}) {
  return (
    <>
      <div className="input-box">
        <label>Place</label>
        <input
          type="text"
          placeholder="Enter the place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
      </div>
      <div className="input-box">
        <label>Time at Location</label>
        <input
          type="time"
          value={timeAtLocation}
          onChange={(e) => setTimeAtLocation(e.target.value)}
        />
      </div>
      <div className="input-box">
        <label>Target Time Zone</label>
        <select
          value={targetTimeZone}
          onChange={(e) => setTargetTimeZone(e.target.value)}
        >
          <option value="">Select a timezone</option>
          {timeZones.map((zone) => (
            <option key={zone.value} value={zone.value}>
              {zone.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
