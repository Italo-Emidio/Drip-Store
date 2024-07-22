import './Carrosel.css'
import tenisCarrosel from '/White-Sneakers-PNG-Clipart1.png'
export default function Carrosel() {
    return (
        <div>

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
                                <img src= {tenisCarrosel} />
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
                                <img src= {tenisCarrosel} />
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
                    <span className="bubble" onclick="currentSlide(0)"></span>
                    <span className="bubble" onclick="currentSlide(1)"></span>
                    <span className="bubble" onclick="currentSlide(2)"></span>
                    <span className="bubble" onclick="currentSlide(3)"></span>
                </div>
            </div>


        </div>
    )
}