import React from "react";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPortrait: false,
    };
  }
  render() {
    let isPortrait = window.innerHeight > window.innerWidth;

    let loaderStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "auto",
      background: "#33495F",
      margin: "0",
    };

    let imgStyle = {
      height: isPortrait ? "200px" : "100vh",
    };
    
    console.log("mobileView:" + isPortrait);
    return (
      <div style={loaderStyle}>
        <img style={imgStyle} src="../bg.gif" alt="background" />
      </div>
    );
  }
}
