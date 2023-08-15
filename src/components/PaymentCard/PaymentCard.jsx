import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faBoxesPacking, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import "../PaymentCard/PaymentCard.css"
const PaymentCard = () => {

  const arrCardText = [
    {
      title: 'Elegí como pagar',
      icon: faCreditCard,
      paragraph: 'Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito.'
    },
    {
      title: 'Envío gratis desde $ 8.000',
      icon: faBoxesPacking,
      paragraph: 'Solo por estar registrado en Mercado Libre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos.'
    },
    {
      title: 'Seguridad, de principio a fin',
      icon: faShieldHalved,
      paragraph: '¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.'
    },
  ]
  return (
    <section className='footer'>
      {
        arrCardText.map((card, index) => (
          <article key={index} className='footer__card__content'>
            <article className='footer__card__content__icon'>
              <FontAwesomeIcon icon={ card.icon } className='footer__card__icon' />
            </article>
            <article className='footer__card__content__texts'>
              <h3 className='footer__card__title'>{ card.title }</h3>
              <p className='footer__card__paragraph'>{ card.paragraph }</p>
            </article>
          </article>
        ))
      }
    </section>
  )
}

export default PaymentCard