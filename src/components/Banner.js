import React from "react";

export default function Banner() {
  return (
    <div className="banner">
      <img className="banner--img" src={require("../images/banner.png")} alt="banner"/>
      <h1 className="banner--header">Online Experiences</h1>
      <p className="banner--text">Join unique interactive activities led by 
      one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}
