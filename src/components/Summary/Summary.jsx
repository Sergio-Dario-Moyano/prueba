import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext} from "react"
import "../Summary/Summary.css"
import { context } from "../Context/ContextProvider/ContexProvider"
import { Link } from "react-router-dom"

const Summary = () => {

  const { cart, sumaTotal } = useContext(context)

  return (

    cart.length === 0 ?
      (
        <div>
          <div className='cart__container__bag'>
            <FontAwesomeIcon icon={faBagShopping} className='cart__bagShopping__icon' />
            <h3 className='cart__title'>¡Empieza un carrito de compras!</h3>
            <p className='cart__paragraph'>Sumá productos y conseguí envío gratis.</p>
            <Link to={'/'} className='cart__link__goHome'>Descubrir productos</Link>
          </div>

          <div className="summary__container">
            <div className="summary__contain__title">
              <h3 className="summary__title"> Resumen de compra</h3>
            </div>
            <div className="summary__contain__paragraph">
              <p className="summary__paragraph">Aquí verás los importes de tu compra una vez que agregues productos.</p>
            </div>
          </div>
        </div>
      )
      :
      (
        <div className='summary__thumbnails'>
          <div>
            <span className='summary__price'>{`${cart.length} producto en tu carrito:`} <span className='summary__bold'> {`$ ${sumaTotal}`} </span></span>
            <span className='summary__shipment'>{sumaTotal > 50000 ? "Envio gratis" : "Nada de envio gratis"}</span>
          </div>
          <div className='summary__content__figure'>
            {
              cart.map((elem, index) => (
                <figure key={index} className='summary__figure'>
                  <img src={elem.item.imagen} className='summary__img' />
                </figure>
              ))
            }
          </div>
        </div>
      )
  )
}

export default Summary