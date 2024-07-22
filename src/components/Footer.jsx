
import "./Footer.css"
export default function Footer() {
    return  (
    <>
      <footer className="footer-bg-black footer-text-white footer-py-10">
      <div className="container footer-flex footer-justify-around">
          <div className="footer-max-w-xs">
              <h3 className="footer-text-lg footer-mb-5">Digital Store</h3>
              <p className="footer-text-sm footer-leading-relaxed footer-mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <div className="footer-flex footer-space-x-4">
                  <a className="fab fa-facebook-f text-2xl" href="#"></a>
                  <a className="fab fa-instagram text-2xl" href="#"></a>
                  <a className="fab fa-twitter text-2xl" href="#"></a>
              </div>
          </div>
          <div className="footer-max-w-xs">
              <h4 className="footer-text-lg footer-mb-5">Informação</h4>
              <ul className="footer-list-none">
                  <li className="footer-mb-2"><a href="#" className="footer-text-sm">Sobre Drip Store</a></li>
                  <li className="footer-mb-2"><a href="#" className="footer-text-sm">Segurança</a></li>
                  <li className="footer-mb-2"><a href="#" className="footer-text-sm">Wishlist</a></li>
                  <li className="footer-mb-2"><a href="#" className="footer-text-sm">Blog</a></li>
                  <li className="footer-mb-2"><a href="#" className="footer-text-sm">Trabalhe conosco</a></li>
                  <li className="footer-mb-2"><a href="#" className="footer-text-sm">Meus Pedidos</a></li>
              </ul>
          </div>
          <div className="footer-max-w-xs">
              <h4 className="footer-text-lg footer-mb-5">Categorias</h4>
              <ul className="footer-list-none">
                  <li className="footer-mb-2"><a href="#" className="footer-text-sm">Camisetas</a></li>
                  <li className="footer-mb-2"><a href="#" className="footer-text-sm">Calças</a></li>
                  <li className="footer-mb-2"><a href="#" className="footer-text-sm">Bonés</a></li>
                  <li className="footer-mb-2"><a href="#" className="footer-text-sm">Headphones</a></li>
                  <li className="footer-mb-2"><a href="#" className="footer-text-sm">Tênis</a></li>
              </ul>
          </div>
          <div className="footer-max-w-xs">
              <h4 className="footer-text-lg footer-mb-5">Contato</h4>
              <p className="footer-text-sm footer-leading-relaxed footer-mb-2">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
              <p className="footer-text-sm footer-leading-relaxed">(85) 3051-3411</p>
          </div>
      </div>
  </footer>
  <div className="footer-bg-black footer-text-white footer-text-center footer-py-4">
      <p>© 2024 Digital Store</p>
  </div>
  </>
    )
}