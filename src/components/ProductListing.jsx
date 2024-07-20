import ProductCard from "./ProductCard"
import './ProductListing.css'
import seta from '/Right24px.svg'

export default function ProductListing() {
    return (
    <div>
        <div className="titulo-product">
            <h3>Produtos em alta</h3>
            <p>Ver Produtos <img src={seta} /></p>
        </div>
        <div className="container-card">
            
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
      
        </div>
    </div>
    )
};