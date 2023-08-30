import PropTypes from 'prop-types'
import { useContext } from 'react'
import { context } from '../Context/ContextProvider/ContexProvider'
import "../ItemDetail/ItemDetail.css"
import { Link } from 'react-router-dom'

const ItemDetail = ({ item }) => {

  const { addToCart, setCantidad ,cantidad } = useContext(context)

  let {
    marca,
    precio,
    precioAnterior,
    descuento,
    descripcion,
    cuotas,
    envio,
    imagen,
    titleFeature1,
    titleFeature2,
    titleFeature3,
    feature1,
    feature2,
    feature3,
    caracteristicasGenerales,
    descripcionGeneral,
  } = item

  const obtenerSeleccion = () => {
    let select = document.getElementById('cantidadProductos');
    setCantidad(parseInt(select.value))  
  }

  return (
    <section className="itemDetail__product">
      <article>
        {descripcion}
      </article>
      <article className="itemDetail__contentImg">
        <img src={imagen} alt={marca} className="itemDetail__img" />
      </article>
      <article className='itemDetail__special__features'>
        <div className={`${feature1 ? "itemDetail__features" : ""}`}>
          <span>{titleFeature1}</span>
          <div>{feature1}</div>
        </div>
        <div className={`${feature2 ? "itemDetail__features" : ""}`}>
          <span>{titleFeature2}</span>
          <div>{feature2}</div>
        </div>
        <div className={`${feature3 ? "itemDetail__features" : ""}`}>
          <span>{titleFeature3}</span>
          <div >{feature3}</div>
        </div>
      </article>
      <article className="itemDetail__description">
        <article className='itemDetail__oldPrice'>$ {precioAnterior}</article>
        <article className='itemDetail__content__price'>
          <article className='itemDetail__price'>$ {precio}</article>
          <span className='itemDetail__discount'>{descuento}% OFF</span>
        </article>
        <span className='itemDetail__installments'>en {cuotas}x $ {precio / cuotas} </span>
        <span className='itemDetail__shipment'>{envio ? 'Envío gratis' : 'Llega mañana'}</span>
        <article className='itemDetail__select'>
          <select className="itemDetail__amount__fees" id='cantidadProductos' defaultValue={1} onChange={() => obtenerSeleccion()}>
            <option value="1">1 unidad</option>
            <option value="2">2 unidades</option>
            <option value="3">3 unidades</option>
            <option value="4">4 unidades</option>
            <option value="5">5 unidades</option>
            <option value="6">6 unidades</option>
          </select>
        </article>
      </article>
      <article>
        <button className='itemDetail__btn__buy'>Comprar ahora</button>
      </article>
      <article>
        <Link to={'/addedToCart/'} className='itemDetail__btn__cart' onClick={() => addToCart(item, cantidad)}>
          Agregar al carro
        </Link>
      </article>
      <article className='itemDetail__list__features'>
        <h4 className='itemDetail__list__title'>Lo que tenés que saber de este producto.</h4>
        <ul className='itemDetail__list'>
          {
            caracteristicasGenerales ?
           caracteristicasGenerales.map((item, index) => (<li key={index} className='itemDetail__list__items'>{item}</li>))
          : 
          null
          }
        </ul>
      </article>
      <article className='itemDetail__description__general'>
        <h4 className='itemDetail__description__title'>Descripción</h4>
        <p className='itemDetail__description__paragraph'>{descripcionGeneral}</p>
      </article>

    </section >
  )
}

ItemDetail.propTypes = {
  item: PropTypes.any
}

export default ItemDetail