import React from 'react';

const CardsProducts = ({ images, titular, header, description }) => {
  return (
    <div>
        <div className="headerCards">
          <h5 className="titularCards">{titular[0]}</h5>
        </div>
        <section className="ContainerCardsProducts">
          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[0]} loading="lazy" />
              </div>
              <div className="content">
                <a className="header">{header[0]}</a>
                <div className="description">{description[0]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>

          <div   className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[1]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[1]}</a>
                <div className="description">{description[1]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>

          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[2]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[2]}</a>
                <div className="description">{description[2]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>

          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[3]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[3]}</a>
                <div className="description">{description[3]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>
        </section>

        <div className="headerCards">
          <h5 className="titularCards">{titular[1]}</h5>
        </div>

        <section className="ContainerCardsProducts">
          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[4]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[4]}</a>
                <div className="description">{description[4]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>

          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[5]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[5]}</a>
                <div className="description">{description[5]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>

          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[6]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[6]}</a>
                <div className="description">{description[6]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>

          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[7]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[7]}</a>
                <div className="description">{description[7]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>
        </section>

        <div className="headerCards">
          <h5 className="titularCards">{titular[2]}</h5>
        </div>

        <section className="ContainerCardsProducts">
          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[8]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[8]}</a>
                <div className="description">{description[8]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>

          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[9]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[9]}</a>
                <div className="description">{description[9]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>

          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[10]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[10]}</a>
                <div className="description">{description[10]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>

          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[11]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[11]}</a>
                <div className="description">{description[11]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>
        </section>

        <div className="headerCards">
          <h5 className="titularCards">{titular[3]}</h5>
        </div>

        <section className="ContainerCardsProducts">
          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[12]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[12]}</a>
                <div className="description">{description[12]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>

          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[13]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[13]}</a>
                <div className="description">{description[13]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>

          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[14]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[14]}</a>
                <div className="description">{description[14]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>

          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[15]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[15]}</a>
                <div className="description">{description[15]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>
        </section>

        <div className="headerCards">
          <h5 className="titularCards">{titular[4]}</h5>
        </div>

        <section className="ContainerCardsProducts">
          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[16]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[16]}</a>
                <div className="description">{description[16]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>

          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[17]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[17]}</a>
                <div className="description">{description[17]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>

          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[18]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[18]}</a>
                <div className="description">{description[18]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>

          <div className="cardsContainerProducts">
            <div className="ui card">
              <div className="image">
                <img src={images[19]} loading="lazy"/>
              </div>
              <div className="content">
                <a className="header">{header[19]}</a>
                <div className="description">{description[19]}</div>
              </div>
              <div className="extra content">
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>
        </section>
    </div>

    )
}

export default CardsProducts
