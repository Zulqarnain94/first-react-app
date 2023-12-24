import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Errormessag from "./components/Errormessag";
import Listitem from "./components/Listitem";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let itemList = ["sabzi", "veg", "roti", "salad", "milk", "ghee"];
  //let itemList = []
  return (
    <>
      <h1>List of Food</h1>
      <Errormessag fooditems={itemList} />
      <Listitem fooditems={itemList} />
    </>
  );
}

export default App;
