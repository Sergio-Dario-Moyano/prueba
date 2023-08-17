import { useContext } from "react"
import { context } from "../Context/ContextProvider/ContexProvider"


export const CartCounter= () => {

  const { sumar, restar, cantidad } = useContext(context)
  return (
    <div>
      <h5>Cantidad de elementos a agregar</h5>
      <button onClick={() => restar()} style={{display: 'inline-block'}}>-</button>
      <span>{ cantidad }</span>
      <button onClick={() => sumar()} style={{display: 'inline-block'}}>+</button>
    </div>
  )
}

