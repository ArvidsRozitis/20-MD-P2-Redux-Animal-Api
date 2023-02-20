import "./App.css";
import { AnimalCardList } from "./components/AnimalCardList/AnimalCardList";
import { AddAnimalForm } from "./components/AddAnimalForm/AddAnimalForm";

function App() {
  return (
    <div className="App">
      <AddAnimalForm />
      <AnimalCardList />
    </div>
  );
}

export default App;
