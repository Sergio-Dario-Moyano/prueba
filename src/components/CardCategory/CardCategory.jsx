import "../CardCategory/CardCategory.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faMobile, faShirt, faCouch, faBlender, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
// import { useEffect, useState } from "react"

const iconText = [
  {
    icon: faCar,
    text: 'Autos, Motos y Otros',
    category: 'CARS',
  },
  {
    icon: faMobile,
    text: 'Celulares y Teléfonos',
    category: 'PHONE',
  },
  {
    icon: faShirt,
    text: 'Ropa y Accesorios',
    category: 'CLOTHES',
  },
  {
    icon: faCouch,
    text: 'Hogar, Muebles y Jardín',
    category: 'HOME',
  },
  {
    icon: faBlender,
    text: 'Electrodomésticos y Ac.',
    category: 'EAC',
  },
  {
    icon: faMicrophone,
    text: 'Electrónica, Audio y Video',
    category: 'EAV',
  },
]
const CardCategory = () => {

  // const id = useParams()

  // const [newId, setNewId] = useState('')


  // useEffect(() => {
  //   console.log(id);
  // }, [])



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