import './Carrosel.css'
export default function Carrosel() {
    return (
        <div>
            <div className="nav">
                <div className="nav-1">
                    <div>
                        <img className="image-logo" src="./imagens/logo-digital-college.png" alt="Logo da Digital College" />
                    </div>
                    <div>
                        <input id="search" type="text" placeholder="Pesquisar produto..." />
                    </div>
                    <div className="buttons">
                        <button className="register-button"><span className="text-button">Cadastre-se</span></button>
                        <button className="enter-button"><span className="text-button-2">Entrar</span></button>
                    </div>
                    <div className="icon-carrinho">
                        <img className="icone-carrinho" src="./imagens/icone-carrinho.png" alt="icone de carrinho" />
                    </div>
                </div>
                <div className="menu">
                    <ul className="menu-lista">
                        <li><a className="options" href=""></a>Home</li>
                        <li><a className="options" href=""></a>Produtos</li>
                        <li><a className="options" href=""></a>Categorias</li>
                        <li><a className="options" href=""></a>Meus Pedidos</li>
                    </ul>
                </div>
            </div>

            <div className="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item">
                        <div className="hero">
                            <div className="grid-1">
                                <div className="text-hero">
                                    <p>Melhore ofertas personalizadas</p>
                                </div>
                                <div className="title-hero">
                                    <h1>Queima de estoque Nike 🔥</h1>
                                </div>
                                <div className="paragraph-hero">
                                    <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                </div>
                                <div className="button-hero">
                                    <button className="offer-button">ver ofertas</button>
                                </div>
                            </div>
                            <div className="grid-2">
                                <img src="./imagens/White-Sneakers-PNG-Clipart 1.png" />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="hero">
                            <div className="grid-1">
                                <div className="text-hero">
                                    <p>Melhore ofertas personalizadas</p>
                                </div>
                                <div className="title-hero">
                                    <h1>Queima de estoque Nike 🔥</h1>
                                </div>
                                <div className="paragraph-hero">
                                    <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                </div>
                                <div className="button-hero">
                                    <button className="offer-button">ver ofertas</button>
                                </div>
                            </div>
                            <div className="grid-2">
                                <img src="./imagens/White-Sneakers-PNG-Clipart 1.png"/>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="hero">
                            <div className="grid-1">
                                <div className="text-hero">
                                    <p>Melhore ofertas personalizadas</p>
                                </div>
                                <div className="title-hero">
                                    <h1>Queima de estoque Nike 🔥</h1>
                                </div>
                                <div className="paragraph-hero">
                                    <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                </div>
                                <div className="button-hero">
                                    <button className="offer-button">ver ofertas</button>
                                </div>
                            </div>
                            <div className="grid-2">
                                <img src="./imagens/White-Sneakers-PNG-Clipart 1.png" />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="hero">
                            <div className="grid-1">
                                <div className="text-hero">
                                    <p>Melhore ofertas personalizadas</p>
                                </div>
                                <div className="title-hero">
                                    <h1>Queima de estoque Nike 🔥</h1>
                                </div>
                                <div className="paragraph-hero">
                                    <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                </div>
                                <div className="button-hero">
                                    <button className="offer-button">ver ofertas</button>
                                </div>
                            </div>
                            <div className="grid-2">
                                <img src="./imagens/White-Sneakers-PNG-Clipart 1.png" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="carousel-bubbles">
                    <span classNameName="bubble" onclick="currentSlide(0)"></span>
                    <span classNameName="bubble" onclick="currentSlide(1)"></span>
                    <span className="bubble" onclick="currentSlide(2)"></span>
                    <span className="bubble" onclick="currentSlide(3)"></span>
                </div>
            </div>


        </div>
    )
}