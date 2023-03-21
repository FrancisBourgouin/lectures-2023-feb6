import { checkIfPlantIsWellWatered } from "../helpers/plantHelpers"

export default function PlantListItem(props){
  {/* (name, type, lastWatered, wateringInterval) */}
  const {name, type, lastWatered, wateringInterval} = props

  const isWellWatered = checkIfPlantIsWellWatered(lastWatered, wateringInterval)
  const wateringColor = isWellWatered ? "green" : "red"
  return(
    <li>
      <h1>{name}</h1>
      <p>{type}</p>
      <p style={{color:wateringColor}}>Last watered on: {lastWatered}</p>
    </li>
  )
}
