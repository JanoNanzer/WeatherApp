import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Card/Card";
import "./Home.css";

const Home = () => {
  const { cities } = useSelector((state) => state.weather);
  console.log(cities);
  return cities.length > 0 ? (
    <div className="homeCity">
      {cities.map((c) => (
        <Cards
          key={c.id}
          max={c.main.temp_max}
          min={c.main.temp_min}
          weather={c.weather[0].description}
          name={c.name}
          img={c.weather[0].icon}
          id={c.id}
        />
      ))}
    </div>
  ) : (
    <div className="outerNoCity">
      <span className="noCity">No cities yet. Find your favorites!!</span>
    </div>
  );
};

export default Home;
