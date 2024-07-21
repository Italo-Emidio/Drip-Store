
import "./Footer.css"
export default function Footer() {
    return (
        <footer class="footer-container">
  <div class="footer-content">
    <div class="footer-wrapper">
      <div class="footer-columns">
        <section class="brand-column">
          <div class="brand-content">
            <div class="brand-logo">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f3d0b46873c482d590dcb8c0dbbc385b3b72e84936880e2db725760abe92db6?apiKey=956fcad840c74274ae88395994112ea6&" class="logo-image" alt="Digital Store Logo" />
              <h2 class="brand-name">Digital Store</h2>
            </div>
            <p class="brand-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/090961c3c8529ed2573700385d86bc43933b3b35f3a4de51711b383b7ef4b695?apiKey=956fcad840c74274ae88395994112ea6&" class="social-icons" alt="Social Media Icons" />
          </div>
        </section>
        <section class="info-column">
          <div class="info-content">
            <div class="info-sections">
              <div class="info-section">
                <div class="info-block">
                  <h3 class="info-title">Informação</h3>
                  <nav class="info-list">
                    <a href="#">Sobre Drip Store</a><br />
                    <a href="#">Segurança</a><br />
                    <a href="#">Wishlist</a><br />
                    <a href="#">Blog</a><br />
                    <a href="#">Trabalhe conosco</a><br />
                    <a href="#">Meus Pedidos</a>
                  </nav>
                </div>
              </div>
              <div class="categories-section">
                <div class="categories-block">
                  <h3 class="info-title">Categorias</h3>
                  <nav class="info-list">
                    <a href="#">Camisetas</a><br />
                    <a href="#">Calças</a><br />
                    <a href="#">Bonés</a><br />
                    <a href="#">Headphones</a><br />
                    <a href="#">Tênis</a>
                  </nav>
                </div>
              </div>
              <div class="contact-section">
                <div class="contact-block">
                  <h3 class="info-title">Contato</h3>
                  <address class="contact-address">
                    Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
                  </address>
                  <p class="contact-phone">(85) 3051-3411</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <hr class="footer-divider" />
      <p class="copyright">@ 2022 Digital College</p>
    </div>
  </div>
</footer>
    )
}