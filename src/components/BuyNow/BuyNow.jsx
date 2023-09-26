import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import "./BuyNow.css"
import { useContext } from 'react'
import { context } from '../Context/ContextProvider/ContexProvider'

function BuyNow() {
  const { cart } = useContext(context)
  console.log(cart);
  return (
    <section className="buyNow__container">
      <section className='buyNow__container__allMethods'>
        <article className="buyNow__container__title">
          <h3 className="buyNow__title">¿Cómo querés pagar?</h3>
        </article>
        <article className="buyNow__container__subTitle">
          <h5 className="buyNow__subTitle">Con débito o crédito</h5>
        </article>
        <section className="buyNow__container__cards">
          <article className="buyNow__container__card">
            <div className="buyNow__container__radio">
              <input type="radio" name="buyCards" className="buyNow__radio" />
            </div>
            <div className="buyNow__container__logo">
              <FontAwesomeIcon icon={faCreditCard} className='buyNow__card' />
            </div>
            <div className="buyNow__container__bank">
              <p className="buyNow__card__text">Nueva tarjeta de crédito</p>
              <p className="buyNow__shipment__text">Mismo precio en x cuotas</p>
            </div>
          </article>
          <article className="buyNow__container__card">
            <div className="buyNow__container__radio">
              <input type="radio" name="buyCards" className="buyNow__radio" />
            </div>
            <div className="buyNow__container__logo">
              <FontAwesomeIcon icon={faCreditCard} className='buyNow__card' />
            </div>
            <div className="buyNow__container__bank">
              <p className="buyNow__card__text">Nueva tarjeta de débito</p>
            </div>
          </article>
        </section>
        <section>
          <article className="buyNow__container__subTitle">
            <h5 className="buyNow__subTitle">Con otras formas de pago</h5>
          </article>

          <section className="buyNow__container__cards">
            <article className="buyNow__container__card">
              <div className="buyNow__container__radio">
                <input type="radio" name="buyCards" className="buyNow__radio" />
              </div>
              <div className="buyNow__container__logo">
                <FontAwesomeIcon icon={faMoneyBillAlt} className='buyNow__card' />
              </div>
              <div className="buyNow__container__bank">
                <p className="buyNow__card__text">Efectivo en punto de pago</p>
              </div>
            </article>
          </section>
        </section>
      </section>

      <section className='buyNow__container__product'>

      </section>
    </section>
  )
}

export default BuyNow