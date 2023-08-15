
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Container from './components/Container/Container'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/Navbar'
import CreateAccount from './components/CreateAccount/CreateAccount'
import CardCategory from './components/CardCategory/CardCategory'
import PaymentCard from './components/PaymentCard/PaymentCard'
import Footer from './components/Footer/Footer'
import Filtrar from './components/Filtrar/Filtrar'

function App() {

const homeText = ['inicio', 'texto1', 'texto2', 'texto3']

  return (
    <Container>
      <Navbar text={homeText} />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route path='/item-detail-container' element={<ItemDetailContainer />} />
        <Route path='/categoria/:id' element={<Filtrar />} />
        {/* <Route path='/categoria/:id' /> */}
          
          
         
       
      </Routes>
        <CardCategory />
      <CreateAccount />
      <PaymentCard />
      <Footer />
    </Container>
  )
}

export default App

