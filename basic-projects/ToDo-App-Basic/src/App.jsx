import TODO from "./components/TODO";
import Todoitmen1 from "./components/Todoitmen1";
import Todoitem2 from "./components/Todoitem2";
import AppName from "./components/AppName";
import "./App.css";

function App() {
  return (
    <>
      <div class="todo-container">
        <AppName />
        <TODO />
        <div class="todo-item">
          <Todoitmen1 />
          <Todoitem2 />
        </div>
      </div>
    </>
  );
}

export default App;
