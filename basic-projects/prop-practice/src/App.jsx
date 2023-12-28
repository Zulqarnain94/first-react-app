import Errormessag from "./components/Errormessag";
import Listitem from "./components/Listitem";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import "./App.css";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let itemList = ["sabzi", "veg", "roti", "salad", "milk", "ghee"];
  //let itemList = []

  // let [textToShow, setTextToShow] = useState();

  let [itemList, setTextToShow] = useState(["sabzi", "veg", "roti"]);

  const handleOnChange = (event) => {
    if (event.key === "Enter") {
      let newList = [...itemList, event.target.value];
      event.target.value = "";
      setTextToShow(newList);
      console.log(itemList);
    }

    // console.log(`here is textToShow value ${textToShow}`);
  };

  return (
    <Container>
      <h1>List of Food</h1>
      <FoodInput handleOnChange={handleOnChange} />
      {/* <p>{textToShow}</p>  */}
      <Errormessag fooditems={itemList} />
      <Listitem fooditems={itemList} />
    </Container>
  );
}

export default App;
