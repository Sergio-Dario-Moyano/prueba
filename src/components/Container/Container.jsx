import PropTypes from "prop-types"
import "../Container/Container.css";

const Container = ({ children }) => {

  return (
    <>
      <section className="container">
        {children}
      </section>
    </>
  )
}

Container.propTypes = {
  children: PropTypes.any
}

export default Container