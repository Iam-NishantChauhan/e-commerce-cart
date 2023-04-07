import React from "react";
import "../contact/contact.css";

export const Contact = () => {
  return <div class="form">
    <form>
    <label id="name">Your Name: </label>
        <input type="username"></input>
        <br/>
        <br/>
        <label id="contactNo">Contact No: </label>
        <input type="tel"></input>
        <br/>
        <br/>
        <label id="query">Your Query: </label>
        <input type="textarea"></input>
        <br/>
        <br/>
        <button class="btn" type="submit">Submit</button>
    </form>
  </div>;
};