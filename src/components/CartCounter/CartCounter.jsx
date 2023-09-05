import { useContext } from "react"
import { context } from "../Context/ContextProvider/ContexProvider"
import "../CartCounter/CartCounter.css"

export const CartCounter = () => {

  
  const { nuevaCantidad, setNuevaCantidad } = useContext(context)
  
  return (


    <div className="cartCounter__container">

      <div className="cartCounter__content__title">
        <h5 className="cartCounter__title">Editar productos</h5>
      </div>
     
        <div className="cartCounter__content__btn">

          <button className="cartCounter__btn cartCounter__suma" onClick={() => nuevaCantidad != 1 ? setNuevaCantidad(nuevaCantidad - 1) : null}>-</button>
          <span className="cartCounter__number">{nuevaCantidad}</span>

          <button className="cartCounter__btn cartCounter__resta" onClick={() => setNuevaCantidad(nuevaCantidad + 1)} >+</button>
        </div>
  
    </div>
  )
}