import { Link } from 'react-router-dom'
import "../Footer/Footer.css"

const Footer = () => {
  return (
    <>
      <section className='container__footer'>
        <article className='container__footer__contain__title'><span className='container__footer__title'>¡Comprá y vendé con nosotros!</span></article>
        <article className='container__footer__wrapper'>
          <Link to={"#"} className='container__footer__link'>Mi cuenta</Link>
          <Link to={"#"} className='container__footer__link'>Historial</Link>
          <Link to={"#"} className='container__footer__link'>Favoritos</Link>
          <Link to={"#"} className='container__footer__link'>Categorías</Link>
          <Link to={"#"} className='container__footer__link'>Ayuda</Link>
          <Link to={"#"} className='container__footer__link'>Mis compras</Link>
          <Link to={"#"} className='container__footer__link'>Ofertas</Link>
          <Link to={"#"} className='container__footer__link'>Vender</Link>
        </article>
      </section>
      {/* <span style={{display: 'block', padding: '2rem', marginTop: '2rem'}}>&copy; 2023 por Moyano Sergio</span> */}
    </>
  )
}

export default Footer