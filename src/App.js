import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Details from "./Components/Detail/Details";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <>
        <Route path={"/"} component={NavBar} />
        <Route exact path={"/"} component={Home} />
        <Route path={"/city_details/:id"} component={Details} />
        <Route path={"/about"} component={About}/>
      </>
    </div>
  );
}

export default App;
