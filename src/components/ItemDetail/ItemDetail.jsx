import PropTypes from 'prop-types'

const ItemDetail = ({ item }) => {
  console.log(item);

  let { marca, precio, imagen } = item
  return (
    <section className="container__product">
      <article className="container__descriptionImg">
        <img src={imagen} alt={marca} className="container__img" />
      </article>
      <article className="container__description">
        <article>$ {precio}</article>
      </article>
    </section>
  )
}

ItemDetail.propTypes = {
  item: PropTypes.any
}

export default ItemDetail