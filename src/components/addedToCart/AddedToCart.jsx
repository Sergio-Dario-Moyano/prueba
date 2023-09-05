import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react"
import { context } from "../Context/ContextProvider/ContexProvider"
import "../addedToCart/AddedToCart.css"
import { Link } from "react-router-dom";
import Summary from '../Summary/Summary'


function AddedToCart() {

  const { cart } = useContext(context)
  console.log(cart);

  return (
    <section className="addedToCart__content">
      <article className="addedToCart__content__title">
        <h2 className="addedToCart__title">{cart.length === 0 ? "NO hay productos en tu carrito :(" : "Agregaste a tu carrito"}</h2>
      </article>
      {
        cart.map((elem, index) => {
          return (

            <article className="addedToCart__content__img" key={index}>
              <article className='addedToCart__position'>
                <figure className="addedToCart__figure">
                  <img className="addedToCart__img" src={elem.item.imagen} />
                </figure>
                <article className='addedToCart__content__check'>
                  <FontAwesomeIcon className='addedToCart__check' icon={faCheck} />
                </article>
              </article>
              <article className="addedToCart__description">
                <span className="addedToCart__description__product">{elem.item.caracteristicas}</span>
              </article>

            </article>
          )
        })
      }
      <article>
        <Summary />
      </article>

      {cart.length === 0 ?
        <Link to={'/'}>¡Ir de compras!</Link>
        :
        <article className="addedToCart__buttons">
          <Link to={'/cart'} className="addedToCart__show__cart" >Ver carrito</Link>
          <Link className="addedToCart__buy__cart">Comprar carrito</Link>
        </article>
      }
    </section>
  )
}

export default AddedToCart