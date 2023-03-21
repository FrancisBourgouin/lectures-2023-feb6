import {useState} from "react"
import './App.css';
import PlantList from './components/PlantList';
import Header from './components/Header';

import { plants } from './data/plantData';

function App() {
  const [plantData, setPlantData] = useState(plants)



  return (
    <div className="App">
      <Header count={plantData.length} />
      <PlantList plants={plantData}/>
    </div>
  );
}

export default App;
