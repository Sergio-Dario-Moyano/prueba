import { useContext } from "react"
import { context } from "../Context/ContextProvider/ContexProvider"

export const CartCounter = () => {

  const { setCantidad, cantidad } = useContext(context)
  return (
    <div>
      <h5>Cantidad de elementos a agregar</h5>
      <button onClick={() => cantidad != 0 ? setCantidad(cantidad - 1) : 0} style={{ display: 'inline-block' }}>-</button>
      <span>{cantidad}</span>
      <button onClick={() => setCantidad(cantidad + 1)} style={{ display: 'inline-block' }}>+</button>
    </div>
  )
}