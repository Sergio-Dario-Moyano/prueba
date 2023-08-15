import "../CardCategory/CardCategory.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faMobile, faShirt, faCouch, faBlender, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const iconText = [
  {
    icon: faCar,
    text: 'Autos, Motos y Otros',
    category: 'cars',
  },
  {
    icon: faMobile,
    text: 'Celulares y Teléfonos',
    category: 'phone',
  },
  {
    icon: faShirt,
    text: 'Ropa y Accesorios',
    category: 'clothes',
  },
  {
    icon: faCouch,
    text: 'Hogar, Muebles y Jardín',
    category: 'homeCouch',
  },
  {
    icon: faBlender,
    text: 'Electrodomésticos y Ac.',
    category: 'blender',
  },
  {
    icon: faMicrophone,
    text: 'Electrónica, Audio y Video',
    category: 'microphone',
  },
]
const CardCategory = () => {

  // const id = useParams()
  return (

    <section className='container__category'>
      <h1 className="container__category__title">Categorías</h1>
      <div className="container__category__items">
      {iconText.map((icon, index) => (

        <Link key={index} to={`/categoria/${icon.category}`} className="container__category__links" >
          <article key={index} className='container__category__item'>
            <h3 className='container__category__text'>{icon.text}</h3>
            <article className="container__category__contain__icon"><FontAwesomeIcon icon={icon.icon} className='container__category__icon' /> </article>
          </article>
        </Link>
      ))}
      </div>
    </section>
  )
}

export default CardCategory