import { useContext } from "react"
import { context } from "../Context/ContextProvider/ContexProvider"


function Carro() {
  const { cart } = useContext(context)

  console.log(cart);
  return (
    <div>{cart}</div>
  )
}

export default Carro