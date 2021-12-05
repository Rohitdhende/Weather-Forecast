import React from "react";
import { WiDayFog } from "weather-icons-react";
import { TextField } from "@material-ui/core";
import Loading from "./Loading.react";
import Send from "@mui/icons-material/Send";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import WaterIcon from "@mui/icons-material/Water";
import AirIcon from "@mui/icons-material/Air";
import CompressIcon from "@mui/icons-material/Compress";
import "./style.css";

class CardWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      temperature: "34",
      precipitation: "20",
      Humidity: "65",
      Wind: "13",
      isLoading: true,
      weather: [],
    };

    this.handleLoading = this.handleLoading.bind(this);
  }

  handleText = async (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  handleSearch = async (event) => {
    this.setState({
      search: "",
    });

    if (this.state.search === "") {
      alert("Please enter some value");
    } else {
      const cityName = this.state.search.toLowerCase();
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          cityName +
          "&units=metric&appid=f14902233360bb4bbeb0faae1fcc010b"
      )
        .then((response) => response.json())
        .then((data) => this.setState({ weather: data }));
    }
  };

  componentDidMount() {
    this.handleLoading();
  }

  handleLoading = () => {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 5000);
  };

  render() {
    let parentContainer = {
      display: "flex",
      width: this.state.isLoading ? "none" : "100%",
      height: this.state.isLoading ? "none" : "100vh",
      justifyContent: "center",
      alignItems: "center",
      background: "#546E7A",
    };
    let searchWrapper = {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    };

    let secondaryStyle = {
      color: "#808080",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "5px 0",
    };

    let buttonStyle = {
      marginTop: "10px",
      marginLeft: "15px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      fontWeight: "bolder",
    };
    if (this.state.isLoading) {
      return (
        <div style={{ background: "green" }}>
          <Loading />
        </div>
      );
    } else {
      return (
        <div style={parentContainer}>
          <div
            style={{
              width: "auto",
              position: "fixed",
              padding: "20px",
              background: "white",
              height: "auto",
              borderRadius: "25px",
              backgroundSize: "cover",
              color: "black",
              boxShadow: "5px 5px 5px black",
            }}
          >
            <h1>
              Weather Forecast <br />
              <WiDayFog size={24} color="#000" />
            </h1>

            <div style={searchWrapper}>
              <TextField
                id="outlined-search"
                label="Search for City"
                type="search"
                onChange={this.handleText.bind(this)}
                value={this.state.search}
              />

              <button
                style={buttonStyle}
                onClick={this.handleSearch.bind(this)}
              >
                <Send className="send-icon" />
              </button>
            </div>
            {this.state.weather.main && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px 0",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>
                  {" "}
                  {this.state.weather.name} {"'"}
                  {this.state.weather.sys.country}
                  {"'"}
                </span>
                <span
                  style={{
                    fontSize: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Temperature {this.state.weather.main.temp} &#176;C{" "}
                  <DeviceThermostatIcon />
                </span>
                <div style={secondaryStyle}>
                  <CompressIcon />
                  Pressure: {this.state.weather.main.pressure}{" "}
                </div>
                <div style={secondaryStyle}>
                  <WaterIcon />
                  Humidity: {this.state.weather.main.humidity}%{" "}
                </div>
                <div style={secondaryStyle}>
                  <AirIcon />
                  Wind: {this.state.weather.wind.speed}km/h{" "}
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
  }
}

export default CardWrapper;
