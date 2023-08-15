import { Link } from 'react-router-dom'

import "../CreateAccount/CreateAccount.css"

const CreateAccount = () => {
  return (
    <section className="createAccount__container">
      <article className="createAccount__container__header">
        <h3 className="createAccount__title">¡Creá una cuenta y mejorá tu experiencia!</h3>
        <button className="createAccount__btn" type="button">Crear cuenta</button>
      </article>
      <article className="createAccount__body">
        <span className="createAccount__question">¿Ya tienes cuenta?</span>
        <span className="createAccount__getInto"><Link to={'#'} className="createAccount__getInto__link">Ingresar</Link></span>
      </article>
    </section>
  )
}

export default CreateAccount