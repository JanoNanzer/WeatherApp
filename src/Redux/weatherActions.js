import axios from "axios";
import {getCities, deleteCity, setDetail} from "./weatherSlice.js";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
//let ciudad = "";
//let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;


export const addCity = (city) => {
    return async (dispatch) =>{
        try{
            let json = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            return dispatch(getCities(json.data))
        }
        catch(e){
            alert("City not found. Please enter a valid name")
        }
    }
}

export const filterCity = (city) => {
    return (dispatch) => {
        return dispatch(deleteCity(city))
    }
}

export const findCity = (id) => {
    return (dispatch) => {
        return dispatch(setDetail(id))
    }
}