import PropTypes from 'prop-types'
import { useContext } from 'react'
import { context } from '../Context/ContextProvider/ContexProvider'
import { CartCounter } from '../CartCounter/CartCounter'

const ItemDetail = ({item}) => {

  const { addToCart, cantidad } = useContext(context)
  console.log(item);
  console.log(cantidad);

  let { marca, precio, imagen } = item
  return (
    <section className="container__product">
      <article className="container__descriptionImg">
        <img src={imagen} alt={marca} className="container__img" />
      </article>
      <article className="container__description">
        <article>$ {precio}</article>
      </article>
      <article>
        <CartCounter />
      </article>
      <article>
        <button onClick={() => addToCart(item, cantidad)}>Agregar al carro</button>
      </article>
    </section>
  )
}

ItemDetail.propTypes = {
  item: PropTypes.any
}

export default ItemDetail