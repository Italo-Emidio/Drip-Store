import ColecaoDestaque from "./components/ColecaoDestaque"
import OfertaEspecial from "./components/OfertaEspecial"
import ProductCard from "./components/ProductCard"
import Carrosel from "./components/Carrosel"
import ProductListing from "./components/ProductListing"
function App() {
  

  return (
    <>
      <div className="body-app">
      <Carrosel/>
      <ColecaoDestaque/>
      <ProductListing />
      <OfertaEspecial/>
    </div>
      
      </>
  )
}

export default App
