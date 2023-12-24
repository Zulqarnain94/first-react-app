import { useState } from "react";
import "./App.css";
import Appname from "./comp/Appname";
import Clockslagon from "./comp/Clockslagon";
import Currentime from "./comp/Currentime";

function App() {
  return (
    <>
      <Appname />
      <Clockslagon />
      <Currentime />
    </>
  );
}

export default App;
