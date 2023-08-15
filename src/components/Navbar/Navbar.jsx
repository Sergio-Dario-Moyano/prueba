import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import "../Navbar/Navbar.css"

function Navbar({ text }) {
  console.log(text);
  return (
    <nav className='navbar__container'>
      <section className='navbar__section__home'>
        <div className='navbar__home'>
          <FontAwesomeIcon className='navbar__home__icon' icon={faHouse} />
        </div>
        <article className='navbar__input'>
          <input type="text" className='navbar__input__search' placeholder='Estoy buscando...' />
        </article>
      </section>

      <section className='navbar__section__menu'>
        <article className='navbar__bars'>
          <FontAwesomeIcon className='navbar__bars__icon' icon={faBars} />
        </article>
        <article className='navbar__cart'>
          <FontAwesomeIcon className='navbar__cart__icon' icon={faCartShopping} />
        </article>
      </section>
    </nav>
  )
}

Navbar.propTypes = {
  text: PropTypes.array
}

export default Navbar
