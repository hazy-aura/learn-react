//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const currentHour = new Date().getHours();
var greeting = "Hi";
const customStyle = {
  color: "Black",
  fontSize: "50px",
  fontWeight: "bold",
  borderBottom: "5px solid black"
};
if (currentHour < 12) {
  customStyle.color = "Red";
  greeting = "Morning";
} else if (currentHour >= 12 && currentHour < 18) {
  customStyle.color = "Green";
  greeting = "Afternoon";
} else {
  customStyle.color = "Blue";
  greeting = "Night";
}

ReactDOM.render(
  <div style={customStyle}>
    <h1>Good {greeting}</h1>
  </div>,
  document.getElementById("root")
);
