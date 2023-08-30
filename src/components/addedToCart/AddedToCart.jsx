import { useContext } from "react"
import { context } from "../Context/ContextProvider/ContexProvider"
import "../addedToCart/AddedToCart.css"
import { Link } from "react-router-dom";


function AddedToCart() {

  const { cart } = useContext(context)

  return (
    <section className="addedToCart__content">
      <article className="addedToCart__content__title">
        <h3 className="addedToCart__title">Agregaste a tu carrito</h3>
      </article>
      {
        cart.map((elem, index) => {
          return (
            <article className="addedToCart__content__img" key={index}>
              <figure className="addedToCart__figure">
                <img className="addedToCart__img" src={elem.item.imagen} />
              </figure>
              <article className="addedToCart__description">
                <span className="addedToCart__description__product">{elem.item.caracteristicas}</span>
              </article>
            </article>
          )
        })
      }

      <article className="addedToCart__buttons">
        <Link to={'/cart'} className="addedToCart__show__cart" >Ver carrito</Link>
        <Link className="addedToCart__buy__cart">Comprar carrito</Link>
      </article>
    </section>
  )
}

export default AddedToCart