import "./App.css";
import Container from "./Components/Container";
import InputComp from "./Components/InputComp";
import ErrorMessage from "./Components/ErrorMessage";
import Listreciver from "./Components/Listreciver"

function App() {
  let itemList = ["sabxi", "veg"];

  return (
    <Container>
      <h1>Food List</h1>
      <InputComp />
      <ErrorMessage itemList={itemList} />
      <Listreciver itemList={itemList}/>
    </Container>
  );
}

export default App;
