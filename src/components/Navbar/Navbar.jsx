import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import "../Navbar/Navbar.css"
import CartWidget from '../CartWidget/CartWidget'
import InputSearch from '../InputSearch/InputSearch'

function Navbar() {

  return (
    <nav className='navbar__container'>
      <section className='navbar__section__home'>
        <div className='navbar__home'>
          <Link to={'/'}><FontAwesomeIcon className='navbar__home__icon' icon={faHouse} /></Link>
        </div>
        <article className='navbar__input'>
          {/* <input type="text" className='navbar__input__search' placeholder='Estoy buscando...' /> */}
          <InputSearch />
        </article>
      </section>

      <section className='navbar__section__menu'>
        <article className='navbar__bars'>
          <FontAwesomeIcon className='navbar__bars__icon' icon={faBars} />
        </article>
        <article className='navbar__cart'>
          <CartWidget />
        </article>
      </section>
    </nav>
  )
}

Navbar.propTypes = {
  text: PropTypes.array
}

export default Navbar
