import { useState } from "react"

export default function Header(props){
  const [value, setValue] = useState(0)
  let {count} = props

  // setInterval(() => {
  //   count++
  //   console.log(count)
  // }, 2000)
  return(
    <header>
    {/* (count of plants) */}
      <h1>Super Watering Log ! :D</h1>
      <button onClick={() => setValue(value + 1)}>{value}</button>

      {count === 1 && <h2>Saving {count} plant from dehydration</h2>}
      {count > 1 && <h2>Saving {count} plants from dehydration</h2>}
      {!count && <h2>Saving plants from dehydration, if I had any...</h2>}
    </header>
  )
}
