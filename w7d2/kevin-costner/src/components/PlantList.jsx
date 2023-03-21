import PlantListItem from "./PlantListItem"

export default function PlantList(props){
  const {plants} = props

  // const plantArr = []
  // for(const plant of plants){
  //   // <PlantListItem name={plant.name} type={plant.type} wateringInterval={plant.wateringInterval} lastWatered={plant.lastWatered}/>
  //   plantArr.push(<PlantListItem {...plant} />)
  // }

  const parsedPlants = plants.map(plant => <PlantListItem key={plant.id} {...plant} />)
  return(
    <main>
        <h1>List of plants</h1>
        <ul>
          {parsedPlants}
        </ul>
      </main>
  )
}
