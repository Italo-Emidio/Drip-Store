import ProductCard from "./ProductCard"
import './ProductListing.css'

export default function ProductListing() {
    return (
    <div>
        <div className="">
            <h3>Produtos em alta</h3>
            <p>Ver Produtos</p>
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