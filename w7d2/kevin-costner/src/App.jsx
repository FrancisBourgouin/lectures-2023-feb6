import Header from "./components/Header"
import PlantList from "./components/PlantList"

import {plants} from "./data/plantData"

import './App.css';

function App() {
  return (
    <div className="App">
      <Header count={plants.length}/>
      <PlantList plants={plants}/>
    </div>
  );
}

export default App;
