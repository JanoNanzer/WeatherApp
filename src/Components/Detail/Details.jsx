import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findCity } from "../../Redux/weatherActions";
import { setEmptyDetail } from "../../Redux/weatherSlice";

const Details = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findCity(id));
    return () => {
      dispatch(setEmptyDetail());
    };
  }, [dispatch]);

  const { cityDetail } = useSelector((state) => state.weather);

  return (
    <>
      {cityDetail.name ? (
        <div>
          <span>{cityDetail.name}</span>
          <img
            src={
              "http://openweathermap.org/img/wn/" +
              cityDetail.weather[0].icon +
              "@2x.png"
            }
            width="80"
            height="80"
            alt=""
          />
          <span>Temperature: {cityDetail.main.temp}</span>
          <span>Weather: {cityDetail.weather[0].main}</span>
          <span>Feels Like: {cityDetail.main.feels_like}</span>
          <span>Clouds: {cityDetail.clouds.all}</span>

          <span>Wind: {cityDetail.wind.speed}</span>
          <span>Latitude: {cityDetail.coord.lat}</span>
          <span>Longitude: {cityDetail.coord.lon}</span>
          <a
            href={`https://www.google.com/maps/?q=${cityDetail.coord.lat},${cityDetail.coord.lon}`}
            target="blank"
          >
            Location on map
          </a>
        </div>
      ) : null}
    </>
  );
};

export default Details;
