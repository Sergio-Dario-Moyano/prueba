import "../Summary/Summary.css"

const Summary = () => {
  return (
    <div className="summary__container">
      <div className="summary__contain__title">
        <h3 className="summary__title"> Resumen de compra</h3> 
      </div>
      <div className="summary__contain__paragraph">
        <p className="summary__paragraph">Aquí verás los importes de tu compra una vez que agregues productos.</p>
      </div>
    </div>
  )
}

export default Summary