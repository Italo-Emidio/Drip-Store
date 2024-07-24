import "./Footer.css"
import DigCol from '/DigCol.png'
import facebook from '/facebook.png'
import instagram from '/instagram.png'
import twitter from '/twitter.png'

export default function Footer() {
    return  (
    <>
      <footer className="footer-cor-fundo footer-texto-branco footer-espacamento">
      <div className="container footer-flex footer-justify-around">
          <div className="footer-column">
              <div className="footer-logo-title">
                  <img src={DigCol} alt=""/>
                  <h3 className="footer-text-lg ">Digital Store</h3>
              </div>
              <p className="footer-leading-relaxed ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <div className="footer-flex footer-item-gap  ">
                  <img src={facebook} alt=""/>
                  <img src={instagram} alt=""/>
                  <img src={twitter} alt=""/>
              </div>
          </div>
          <div className="footer-column">
              <h4 className="footer-text-lg ">Informação</h4>
              <ul className="footer-list-none">
                  <li className="footer-margin-bottom"><a href="#">Sobre Drip Store</a></li>
                  <li className="footer-margin-bottom"><a href="#">Segurança</a></li>
                  <li className="footer-margin-bottom"><a href="#">Wishlist</a></li>
                  <li className="footer-margin-bottom"><a href="#">Blog</a></li>
                  <li className="footer-margin-bottom"><a href="#">Trabalhe conosco</a></li>
                  <li className="footer-margin-bottom"><a href="#">Meus Pedidos</a></li>
              </ul>
          </div>
          <div className="footer-column">
              <h4 className="footer-text-lg ">Categorias</h4>
              <ul className="footer-list-none">
                  <li className="footer-margin-bottom"><a href="#">Camisetas</a></li>
                  <li className="footer-margin-bottom"><a href="#">Calças</a></li>
                  <li className="footer-margin-bottom"><a href="#">Bonés</a></li>
                  <li className="footer-margin-bottom"><a href="#">Headphones</a></li>
                  <li className="footer-margin-bottom"><a href="#">Tênis</a></li>
              </ul>
          </div>
          <div className="footer-column footer-contact">
              <h4 className="footer-text-lg ">Contato</h4>
              <p className="footer-text-sm footer-line-height footer-margin-bottom">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
              <p className="footer-text-sm footer-line-height">(85) 3051-3411</p>
          </div>
      </div>
  </footer>
   <div className="footer-cor-fundo footer-texto-branco footer-text-center footer-padding">
   <hr className="footer-line" />
      <p>© 2022 Digital Store</p>
  </div>
  </>
    )
}
