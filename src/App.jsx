import ColecaoDestaque from "./components/ColecaoDestaque"
import OfertaEspecial from "./components/OfertaEspecial"
import ProductCard from "./components/ProductCard"
import Carrosel from "./components/Carrosel"
import ProductListing from "./components/ProductListing"
import Nav from "./components/Nav"
function App() {
  

  return (
    <>
      <div className="body-app">
      <Nav />  
      <Carrosel/>
      <ColecaoDestaque/>
      <ProductListing />
      <OfertaEspecial/>
    </div>
      
      </>
  )
}

export default App
