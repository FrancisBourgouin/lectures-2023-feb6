export default function Header(props){
  const {count} = props
  return(
    <header>
    {/* (count of plants) */}
      <h1>Super Watering Log ! :D</h1>
      <h2>Saving {count} plants from dehydration</h2>
    </header>
  )
}
