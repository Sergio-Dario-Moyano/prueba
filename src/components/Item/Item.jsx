import PropTypes from "prop-types"
import "../Item/Item.css"
// import { useContext } from "react"
// import { context } from "../Context/ContextProvider/ContexProvider"
import { Link } from "react-router-dom"

const Item = ({ item }) => {

  // const { mostrarProd } = useContext(context)

  let { imagen, precio, descuento, cuotas, descripcion, envio, id } = item
  
  return (
    <>
    <Link to={`/itemDetailContainer/${id}`}>
      <section className="container__product" >
        <article className="container__descriptionImg">
          <figure>
            <img src={imagen} alt={descripcion} className="container__img" />
          </figure>
        </article>
        <section className="container__description">
          <article className="container__description__title">{descripcion}</article>
          <article className="container__description__combo">
            <span className="container__description__price"> $ {precio}</span>
            <span className="container__description__discount">{descuento}% OFF</span>
          </article>
          <section className="container__description__pay">
            <article className="container__description__quotas">{cuotas}X {precio / cuotas}</article>
            <article className="container__description__shipment">{envio}</article>
            <article className="container__envio">{envio ? 'Envío gratis' : 'Llega mañana'}</article>
          </section>
        </section>
      </section>
    </Link>
    </>
  )
}

Item.propTypes = {
  item: PropTypes.object
}

export default Item