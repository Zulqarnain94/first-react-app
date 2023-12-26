import Errormessag from "./components/Errormessag";
import Listitem from "./components/Listitem";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import "./App.css";
import FoodInput from "./components/FoodInput";

function App() {
  let itemList = ["sabzi", "veg", "roti", "salad", "milk", "ghee"];
  //let itemList = []
  return (
    <Container>
      <h1>List of Food</h1>
      <FoodInput />
      <Errormessag fooditems={itemList} />
      <Listitem fooditems={itemList} />
    </Container>
  );
}

export default App;
