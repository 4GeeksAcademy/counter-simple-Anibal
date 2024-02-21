//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let contador = 0;


setInterval (renderizado , 1000)

function renderizado() {
    contador += 1;
    ReactDOM.render(<Home seconds = {contador} />, document.querySelector("#app"));
}
