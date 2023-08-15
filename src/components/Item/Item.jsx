import PropTypes from "prop-types"
import "../Item/Item.css"

const Item = ({ item }) => {

  const mostrarDetalle = () => {
    console.log("mostrando detalles del producto");
  }

  let { imagen, precio, descuento, cuotas, descripcion, envio } = item
  return (
    <>
      <section className="container__product">
        <article className="container__descriptionImg">
          <figure  onClick={() => mostrarDetalle()}>
            <img src={imagen} alt={descripcion} className="container__img" />
          </figure>
        </article>
        <section className="container__description">
          <article className="container__description__title">{descripcion}</article>
          <article onClick={() => mostrarDetalle()} className="container__description__combo">
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
    </>
  )
}

Item.propTypes = {
  item: PropTypes.object
}

export default Item