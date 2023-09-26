import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from "react"
import { context } from "../Context/ContextProvider/ContexProvider"
import "../CartCounter/CartCounter.css"

export const CartCounter = ({ item, cantidad }) => {
  // console.log(cantidad);

  let { addToCart } = useContext(context)

  const initialValueInterno = cantidad

  const [nuevaCantidad, setNuevaCantidad] = useState(initialValueInterno)

  const sumar = () => {
    setNuevaCantidad(nuevaCantidad + 1)
  }
  const restar = () => {
    nuevaCantidad != 1 ? setNuevaCantidad(nuevaCantidad - 1) : null
    // if(nuevaCantidad > 1) {
    //   setNuevaCantidad(nuevaCantidad - 1)
    // }else {
    //   return
    // }
  }

  useEffect(() => {
    addToCart(item, nuevaCantidad)
  }, [nuevaCantidad])

  return (
    <div className="cartCounter__container">
      <div className="cartCounter__content__title">
        <h5 className="cartCounter__title">Editar productos</h5>
      </div>
      <div className="cartCounter__content__btn">
        <button className="cartCounter__btn cartCounter__suma" onClick={() => restar()}>-</button>
        <span className="cartCounter__number">{nuevaCantidad} </span>
        <button className="cartCounter__btn cartCounter__resta" onClick={() => sumar()} >+</button>
      </div>
    </div>
  )
}

CartCounter.propTypes = {
  item: PropTypes.object,
  cantidad: PropTypes.any
}