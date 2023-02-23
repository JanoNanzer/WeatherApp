import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCity } from "../../Redux/weatherActions";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  //   const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
  //   let ciudad = "";
  //   let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;

  const { cities } = useSelector((state) => state.weather);

  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    cities.some((c) => c.name.toLowerCase() === city.toLowerCase())
      ? alert("City already found. Please look for another one!")
      : dispatch(addCity(city));
    setCity("");
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  return (
    <div className="bigNav">
      <Link className="linkHome" to={"/"}>
        Weather App
      </Link>
      <div>
        <input
          className="inputSearch"
          value={city}
          id="inputCity"
          type="text"
          placeholder="Search City"
          onChange={(e) => handleInputChange(e)}
        />
        <button className="searchButton" type="submit" onClick={(e) => handleSearch(e)}>
          🔎
        </button>
      </div>
      <Link className="linkAbout" to={"/about"}>
        About
      </Link>
    </div>
  );
};

export default NavBar;
