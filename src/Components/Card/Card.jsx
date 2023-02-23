import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterCity } from "../../Redux/weatherActions";
import "./Card.css"
///////////////////////////////////////////////
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
/////////////////////////////////////////////////////////

const Cards = ({ min, max, name, img, id }) => {
  const dispatch = useDispatch();
  const deleteCity = () => {
    dispatch(filterCity(name));
  };

  return (
    <div>
      <Card className="bigCard" sx={{ maxWidth: 130, backgroundColor: "#00000082"}}>
        <CardActionArea>
          <Link to={`/city_details/${id}`}>
            <CardMedia
              component="img"
              height="130"
              image={`http://openweathermap.org/img/wn/${img}@2x.png`}
              alt="city image"
            />
            <CardContent sx={{color: "white", textDecoration:"None"}}>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography sx={{color: "white", textDecoration:"None"}} variant="body2" color="text.secondary">
                Max: {max}°
              </Typography>
              <Typography sx={{color: "white", textDecoration:"None"}} variant="body2" color="text.secondary">
                Min: {min}°
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={(e) => deleteCity(e)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;

/* <div>
        <button onClick={(e) => deleteCity(e)}>X</button>
      </div>
      <div>
        <Link to={`/city_details/${id}`}>
          <p>{name}</p>
        </Link>
        <div className="row">
          <div>
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div>
            <p>Max</p>
            <p>{max}°</p>
          </div>
          <div>
            <img
              src=
              width="80"
              height="80"
              alt=""
            />
          </div>
        </div>
      </div> */

// import React from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { filterCity } from "../../Redux/weatherActions";

// const Card = ({ min, max, name, img, id }) => {
//   const dispatch = useDispatch();
//   const deleteCity = () => {
//     dispatch(filterCity(name));
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={(e) => deleteCity(e)}>X</button>
//       </div>
//       <div>
//         <Link to={`/city_details/${id}`}>
//           <p>{name}</p>
//         </Link>
//         <div className="row">
//           <div>
//             <p>Min</p>
//             <p>{min}°</p>
//           </div>
//           <div>
//             <p>Max</p>
//             <p>{max}°</p>
//           </div>
//           <div>
//             <img
//               src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
//               width="80"
//               height="80"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
