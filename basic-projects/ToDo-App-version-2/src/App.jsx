import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Appheading from "./components/Appheading";
import TodoForm from "./components/TodoForm";
import ToDoArray from "./components/ToDoArray";

function App() {
  let todoData = [
    { name: "veg", date: "4/10/2023" },
    { name: "veg", date: "4/10/2023" },
  ];
  return (
    <>
      <Appheading />
      <TodoForm />
      <ToDoArray data={todoData} />
    </>
  );
}

export default App;
