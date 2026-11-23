import './App.css'
import './responsive-menu.css'
import { useState } from 'react'
import heroImage from './assets/Portada - Manabi.jpeg';
import vicheImage from './assets/viche.jpg'
import corvicheImage from './assets/corviche.jpg'
import tongaImage from './assets/tonga.jpg'
import cevicheImage from './assets/ceviche-jipijapa.jpg'
import bolloImage from './assets/bollo de pescado.jpg'
import maniImage from './assets/Maní.jpg'
import platanoImage from './assets/platano.jpg'
import yucaImage from './assets/yuca.jpg'
import maizImage from './assets/maíz.jpg'
import pescadoImage from './assets/pescado.jpg'
import eliasImage from './assets/EliasCedeño.jpg'
import franciscoImage from './assets/FranciscoParedes.jpg'
import raymundoImage from './assets/RaymundoZambrano.jpg'
import naldoImage from './assets/NaldoCampos.jpg'
import parqueCentralImage from './assets/ParqueCentral.jpg'
import palacioImage from './assets/Palacio.jpg'
import museoPortoviejoImage from './assets/MuseoPortoviejo.jpg'
import movimientoModernoImage from './assets/MovimientoModerno.jpg'
import sombreropajaImage from './assets/sombreropaja.jpg'
import amorfinosImage from './assets/amorfinos.jpg'
import artesaniasImage from './assets/artesanias.jpg'
import construccionesImage from './assets/construcciones.jpg'
import mapaEcuadorImage from './assets/mapadelecuador.jpg'
import trompoImage from './assets/trompo.jpg'
import rayuelaImage from './assets/rayuela.png'
import canicasImage from './assets/canicas.jpg'
import cometasImage from './assets/cometas.jpg'
import cuerdaImage from './assets/cuerda.jpg'
import sacosImage from './assets/sacos.jpg'
import escondidasImage from './assets/escondidas.jpg'
import gatoyratonImage from './assets/gatoyraton.jpg'
import carrerasImage from './assets/carreras.jpg'
import paloencebadoImage from './assets/paloencebado.jpg'
import qrPortal from "./assets/qr-portal-cultural-manabi.png";
import introManabi from "./assets/intro-manabi.mp3";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState('')

  const toggleSubmenu = (name) => {
    setOpenSubmenu((current) => current === name ? '' : name)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setOpenSubmenu('')
  }

  return (
    <div className="app">

      <header className="navbar">

        <div className="logo">MANABÍ</div>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileMenuOpen}
          onClick={() => {
            setMobileMenuOpen((open) => !open)
            setOpenSubmenu('')
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={mobileMenuOpen ? 'mobile-nav is-open' : 'mobile-nav'}>
          <div className="nav-item">
            <a href="#inicio" className="nav-link" onClick={closeMobileMenu}>Inicio</a>
          </div>

          <div className={`nav-item ${openSubmenu === 'provincia' ? 'mobile-expanded' : ''}`}>
            <div className="mobile-nav-row">
              <a href="#provincia" className="nav-link" onClick={closeMobileMenu}>Provincia</a>
              <button type="button" className="submenu-toggle" aria-label="Mostrar submenú Provincia" aria-expanded={openSubmenu === 'provincia'} onClick={() => toggleSubmenu('provincia')}>⌄</button>
            </div>
            <div className="dropdown-menu"><a href="#provincia-mapa" onClick={closeMobileMenu}>Ubicación geográfica</a></div>
          </div>

          <div className={`nav-item ${openSubmenu === 'arte' ? 'mobile-expanded' : ''}`}>
            <div className="mobile-nav-row">
              <a href="#arte" className="nav-link" onClick={closeMobileMenu}>Arte y Patrimonio</a>
              <button type="button" className="submenu-toggle" aria-label="Mostrar submenú Arte y Patrimonio" aria-expanded={openSubmenu === 'arte'} onClick={() => toggleSubmenu('arte')}>⌄</button>
            </div>
            <div className="dropdown-menu">
              <a href="#arte-obras" onClick={closeMobileMenu}>Arte</a>
              <a href="#arte-arquitectura" onClick={closeMobileMenu}>Arquitectura</a>
              <a href="#arte-literatura" onClick={closeMobileMenu}>Literatura</a>
              <a href="#arte-literatura-leyendas" onClick={closeMobileMenu}>Leyendas y Cuentos</a>
              <a href="#arte-patrimonio" onClick={closeMobileMenu}>Patrimonio Cultural</a>
            </div>
          </div>

          <div className={`nav-item ${openSubmenu === 'cultura' ? 'mobile-expanded' : ''}`}>
            <div className="mobile-nav-row">
              <a href="#cultura" className="nav-link" onClick={closeMobileMenu}>Cultura</a>
              <button type="button" className="submenu-toggle" aria-label="Mostrar submenú Cultura" aria-expanded={openSubmenu === 'cultura'} onClick={() => toggleSubmenu('cultura')}>⌄</button>
            </div>
            <div className="dropdown-menu">
              <a href="#cultura-pueblos" onClick={closeMobileMenu}>Pueblos e Identidad</a>
              <a href="#cultura-lenguas" onClick={closeMobileMenu}>Lenguas y Tradiciones</a>
              <a href="#cultura-juegos" onClick={closeMobileMenu}>Tradición y Recreación</a>
              <a href="#fiestas" onClick={closeMobileMenu}>Celebraciones Populares</a>
            </div>
          </div>

          <div className={`nav-item ${openSubmenu === 'gastronomia' ? 'mobile-expanded' : ''}`}>
            <div className="mobile-nav-row">
              <a href="#gastronomia" className="nav-link" onClick={closeMobileMenu}>Gastronomía</a>
              <button type="button" className="submenu-toggle" aria-label="Mostrar submenú Gastronomía" aria-expanded={openSubmenu === 'gastronomia'} onClick={() => toggleSubmenu('gastronomia')}>⌄</button>
            </div>
            <div className="dropdown-menu">
              <a href="#gastronomia-ingredientes" onClick={closeMobileMenu}>Ingredientes tradicionales</a>
              <a href="#gastronomia-turismo" onClick={closeMobileMenu}>Identidad y Turismo</a>
            </div>
          </div>

          <div className={`nav-item ${openSubmenu === 'musica' ? 'mobile-expanded' : ''}`}>
            <div className="mobile-nav-row">
              <a href="#musica" className="nav-link" onClick={closeMobileMenu}>Música</a>
              <button type="button" className="submenu-toggle" aria-label="Mostrar submenú Música" aria-expanded={openSubmenu === 'musica'} onClick={() => toggleSubmenu('musica')}>⌄</button>
            </div>
            <div className="dropdown-menu">
              <a href="#musica-instrumentos" onClick={closeMobileMenu}>Instrumentos</a>
              <a href="#musica-artistas" onClick={closeMobileMenu}>Artistas</a>
            </div>
          </div>

          <div className={`nav-item ${openSubmenu === 'gobernanza' ? 'mobile-expanded' : ''}`}>
            <div className="mobile-nav-row">
              <a href="#gobernanza" className="nav-link" onClick={closeMobileMenu}>Gobernanza y Patrimonio</a>
              <button type="button" className="submenu-toggle" aria-label="Mostrar submenú Gobernanza y Patrimonio" aria-expanded={openSubmenu === 'gobernanza'} onClick={() => toggleSubmenu('gobernanza')}>⌄</button>
            </div>
            <div className="dropdown-menu"><a href="#gobernanza-tecnologia" onClick={closeMobileMenu}>Tecnología y Memoria</a></div>
          </div>
        </nav>
      </header>
      <main>

       <section
          id="inicio"
          className="hero"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 20, 15, 0.45), rgba(10, 20, 15, 0.75)), url(${heroImage})`
          }}
        >
          <div className="hero-content">
            <p className="hero-subtitle">PORTAL CULTURAL DIGITAL</p>
            <h1>MANABÍ</h1>
            <h2>Tierra de identidad y tradición</h2>
            <p className="hero-text">
              Un recorrido por los sabores, las tradiciones, los sonidos y las historias que forman parte de la identidad manabita.
            </p>
            <a href="#provincia" className="hero-button">EXPLORAR MANABÍ</a>
          </div>
        </section>

        <section id="provincia" className="province-section">

          <div className="province-intro">
            <p className="section-label">LA PROVINCIA</p>
            <h2>Conoce Manabí</h2>
            <p>
              Un territorio marcado por su historia, diversidad natural
              y una identidad cultural que permanece viva en sus comunidades.
            </p>
          </div>

          <div className="province-cards">
  <article className="province-card">
    <span className="card-number">01</span>
    <h3>Ubicación</h3>
    <p>
      Situada en la región Litoral del Ecuador, frente al océano
      Pacífico, se extiende por un territorio dividido en 22 cantones.
    </p>
  </article>

  <article className="province-card">
    <span className="card-number">02</span>
    <h3>Historia</h3>
    <p>
      Sus raíces se remontan a culturas precolombinas como Valdivia,
      Machalilla, Chorrera, Bahía, Guangala y Manteña. Su creación
      político-administrativa se estableció el 25 de junio de 1824.
    </p>
  </article>

  <article className="province-card">
    <span className="card-number">03</span>
    <h3>Territorio</h3>
    <p>
      Costa, montañas, ríos y diversos paisajes caracterizan este
      territorio, que cuenta con alrededor de 350 kilómetros de playas.
    </p>
  </article>

  <article className="province-card">
    <span className="card-number">04</span>
    <h3>Identidad</h3>
    <p>
      El manabitismo se expresa en sus tradiciones, gastronomía,
      artesanías y formas de vida, fortaleciendo el sentido de pertenencia.
    </p>
  </article>
</div>

<div id="provincia-mapa" className="province-map">
  <div className="province-map-header">
    <p className="section-label">UBICACIÓN GEOGRÁFICA</p>
    <h3>Manabí, en el corazón de la costa ecuatoriana</h3>
    <p>
      Descubre la ubicación de Manabí dentro del Ecuador,
      un territorio de riqueza natural y diversidad cultural.
    </p>
  </div>

  <img
    src={mapaEcuadorImage}
    alt="Mapa ilustrado del Ecuador con Manabí resaltada en terracota"
    className="province-map-image"
  />
</div>

{/* INTRODUCCIÓN EN AUDIO */}
<section className="audio-section" id="introduccion-audio">
  <div className="audio-content">
    <h2>Escucha la esencia de Manabí</h2>

    <p>
      Déjate envolver por los sonidos, las tradiciones y la identidad
      de una tierra llena de historia y riqueza cultural.
    </p>

    <audio controls preload="metadata">
      <source src={introManabi} type="audio/mpeg" />
      Tu navegador no puede reproducir este audio.
    </audio>

    <span>Un recorrido sonoro por el orgullo manabita.</span>
  </div>
</section>

</section>

<section id="arte" className="art-section">

          <div className="art-intro">

            <p className="section-label">ARTE Y PATRIMONIO</p>

            <h2>Creaciones que cuentan quiénes somos</h2>

            <p>
              El arte de Manabí refleja la identidad, la memoria y las formas de
              entender el territorio. Pintura, escultura, literatura y otras
              expresiones artísticas han acompañado la historia de la provincia
              y han contribuido a conservar sus distintas manifestaciones
              culturales.
            </p>

            <p>
              Esta riqueza también se encuentra en su arquitectura y en los
              espacios que forman parte de la memoria colectiva. Museos, edificios,
              obras literarias y expresiones artísticas permiten acercarse a la
              historia de Manabí desde diferentes perspectivas.
            </p>

          </div>

          <div id="arte-obras" className="art-content">

            <div className="art-header">

              <p className="section-label">ARTE</p>

              <h2>Una expresión de identidad y memoria</h2>

              <p>
                Manabí cuenta con una actividad artística que reúne pintura,
                escultura y otras expresiones que reflejan la identidad de la
                provincia. Sus artistas han encontrado en el territorio, sus
                tradiciones y su historia una fuente de inspiración para crear
                y transmitir diferentes formas de entender la vida manabita.
              </p>

            </div>

            <div className="art-museums">

              <article className="art-card">

                <span>01</span>

                <h3>Museos y memoria</h3>

                <p>
                  Los museos de Bahía de Caráquez, Manta y Portoviejo conservan
                  colecciones relacionadas con la arqueología, el arte, los
                  archivos históricos y las exposiciones culturales.
                </p>

              </article>

              <article className="art-card">

                <span>02</span>

                <h3>Arte y resiliencia</h3>

                <p>
                  Después del terremoto de 2016, el arte también se convirtió
                  en una forma de expresar resiliencia. Murales y obras
                  artísticas ayudaron a reconstruir espacios y fortalecer
                  el ánimo de la población.
                </p>

              </article>

            </div>

          </div>

<div id="arte-arquitectura" className="architecture-section">

  <div className="architecture-header">

    <p className="section-label">ARQUITECTURA</p>

    <h2>Espacios que conservan la memoria</h2>

    <p>
      La arquitectura de Manabí también forma parte de su identidad
      cultural. En Portoviejo, diferentes edificios y espacios urbanos
      permiten reconocer parte de la historia y transformación de la
      provincia.
    </p>

  </div>

  <div className="architecture-grid">

    <article className="architecture-card">

      <div className="architecture-image">
        <img
          src={parqueCentralImage}
          alt="Parque Central Vicente Amador Flor de Portoviejo"
        />
      </div>

      <div className="architecture-content">

        <span>01</span>

        <h3>Parque Central Vicente Amador Flor</h3>

        <p>
          Uno de los espacios representativos del centro de Portoviejo,
          relacionado con la memoria urbana y la vida pública de la ciudad.
        </p>

      </div>

    </article>

    <article className="architecture-card">

      <div className="architecture-image">
        <img
          src={palacioImage}
          alt="Palacio de la Gobernación de Manabí"
        />
      </div>

      <div className="architecture-content">

        <span>02</span>

        <h3>Palacio de la Gobernación</h3>

        <p>
          Edificio construido durante la década de 1960 y reconocido por
          su presencia, escala y carácter moderno dentro de la arquitectura
          de Portoviejo.
        </p>

      </div>

    </article>

    <article className="architecture-card">

      <div className="architecture-image">
        <img
          src={museoPortoviejoImage}
          alt="Museo Portoviejo"
        />
      </div>

      <div className="architecture-content">

        <span>03</span>

        <h3>Museo Portoviejo</h3>

        <p>
          Espacio dedicado a la conservación y difusión de elementos
          relacionados con la historia, la arqueología y la cultura
          de la provincia.
        </p>

      </div>

    </article>

    <article className="architecture-card">

      <div className="architecture-image">
        <img
          src={movimientoModernoImage}
          alt="Arquitectura del Movimiento Moderno en Portoviejo"
        />
      </div>

      <div className="architecture-content">

        <span>04</span>

        <h3>Movimiento Moderno</h3>

        <p>
          Parte de la arquitectura de Portoviejo se relaciona con el
          Movimiento Moderno, que dejó huella en edificios y equipamientos
          urbanos de la ciudad.
        </p>

      </div>

    </article>

  </div>

</div>

 <div id="arte-literatura" className="literature-section">

  <div className="literature-header">

    <p className="section-label">LITERATURA</p>

    <h2>Palabras que construyen memoria</h2>

    <p>
      La literatura manabita reúne poetas, escritores y novelistas que
      han convertido las experiencias, paisajes y formas de vida de la
      provincia en parte de la memoria cultural del Ecuador.
    </p>

  </div>

  <div className="literature-list">

    <div className="literature-row">

      <span>01</span>

      <div>

        <h3>Othón Castillo</h3>

        <p>Sed en el Puerto</p>

      </div>

    </div>

    <div className="literature-row">

      <span>02</span>

      <div>

        <h3>Oswaldo Castro</h3>

        <p>La Mula Ciega</p>

      </div>

    </div>

    <div className="literature-row">

      <span>03</span>

      <div>

        <h3>Nelson Vera Loor</h3>

        <p>Yadira</p>

      </div>

    </div>

    <div className="literature-row">
      <span>04</span>
      <div>
        <h3>Luis Félix López</h3>
        <p>Los Designios</p>
      </div>
    </div>

    <div className="literature-row">
      <span>05</span>
      <div>
        <h3>Ruisdael Cedeño</h3>
        <p>Tres Hombres Importantes</p>
      </div>
    </div>

    <div className="literature-row">
      <span>06</span>
      <div>
        <h3>H. Hidrovo Velásquez</h3>
        <p>Un hombre y un río</p>
      </div>
    </div>
  </div>
</div>

<div id="arte-literatura-leyendas" className="legends-section">
  <div className="legends-header">
    <p className="section-label">TRADICIÓN ORAL</p>
    <h3>Leyendas y Cuentos de Manabí</h3>
    <p>
      La narrativa oral de Manabí preserva la memoria, la cosmovisión y los valores de sus pueblos mediante relatos fantásticos, lecciones morales y criaturas míticas que recorren campos, montañas y costas.
    </p>
  </div>

  <div className="legends-category">
    <h4 className="legends-category-title">Leyendas Principales</h4>
    <div className="legends-grid">
      <article className="legend-card">
        <span className="legend-number">01</span>
        <h5>El Mate Encantado</h5>
        <p>La historia del árbol maldito y la niña caprichosa.</p>
      </article>

      <article className="legend-card">
        <span className="legend-number">02</span>
        <h5>La Lutona</h5>
        <p>La mujer fantasma de malos presagios, similar a La Llorona.</p>
      </article>

      <article className="legend-card">
        <span className="legend-number">03</span>
        <h5>El Padre Encantado</h5>
        <p>El sacerdote que abandonó sus hábitos por amor.</p>
      </article>

      <article className="legend-card">
        <span className="legend-number">04</span>
        <h5>Los Gigantes de Manabí</h5>
        <p>Relato sobre seres colosales de la región.</p>
      </article>

      <article className="legend-card">
        <span className="legend-number">05</span>
        <h5>La Leyenda de San Esteban</h5>
        <p>Historia religiosa de la tradición local.</p>
      </article>

      <article className="legend-card">
        <span className="legend-number">06</span>
        <h5>La Virgen María Carita</h5>
        <p>El ícono venerado por milagros.</p>
      </article>
    </div>
  </div>

  <div className="legends-category">
    <h4 className="legends-category-title">Cuentos y Relatos Tradicionales</h4>
    <div className="legends-grid">
      <article className="legend-card">
        <span className="legend-number">07</span>
        <h5>El Diablo en el Río</h5>
        <p>Relato sobre encuentros con el maligno en los cuerpos de agua.</p>
      </article>

      <article className="legend-card">
        <span className="legend-number">08</span>
        <h5>La Tunda</h5>
        <p>Ser mítico de la costa ecuatoriana que se transforma para atraer a sus víctimas.</p>
      </article>

      <article className="legend-card">
        <span className="legend-number">09</span>
        <h5>El Duende</h5>
        <p>Personaje travieso del folclor costeño.</p>
      </article>

      <article className="legend-card">
        <span className="legend-number">10</span>
        <h5>La Caja Ronca</h5>
        <p>Leyenda sobre un cofre misterioso que se escucha en las noches.</p>
      </article>

      <article className="legend-card">
        <span className="legend-number">11</span>
        <h5>El Tesoro Escondido</h5>
        <p>Historias de entierros y tesoros enterrados por los piratas.</p>
      </article>

      <article className="legend-card">
        <span className="legend-number">12</span>
        <h5>Las Sirenas de la Costa</h5>
        <p>Relatos sobre seres marinos que encantan a los pescadores.</p>
      </article>
    </div>
  </div>

  <div className="legends-footer-card">
    <h4>Tradición Oral y Cosmovisión</h4>
    <p>
      Relatos como <strong>El Chuzalongo</strong>, <strong>La Viuda</strong>, <strong>El Cadejo</strong> y <strong>Los Encantos de la Montaña</strong> forman parte viva de las recopilaciones de la Casa de la Cultura Ecuatoriana. Estas leyendas no solo entretienen, sino que preservan la cosmovisión, los valores y la memoria de los pueblos manabitas.
    </p>
  </div>
</div>


<div id="arte-patrimonio" className="heritage-section">
  <div className="heritage-header">
    <p className="section-label">PATRIMONIO CULTURAL</p>

    <h2>Una herencia que permanece viva</h2>

    <p>
      El patrimonio cultural de Manabí reúne tradiciones, conocimientos
      ancestrales, expresiones orales y bienes históricos que forman
      parte de la identidad de sus comunidades. Su conservación permite
      transmitir la memoria y las costumbres de generación en generación.
    </p>

  </div>
  
  <div className="heritage-grid">

    <article className="heritage-card">

      <img
    src={sombreropajaImage}
    alt="Artesano elaborando un sombrero de paja toquilla"
    className="heritage-image"
  />

      <span>01</span>

      <h3>Sombrero de paja toquilla</h3>

      <p>
        El tejido tradicional, especialmente en Montecristi y Pile,
        representa un conocimiento artesanal transmitido entre familias.
        Esta manifestación fue incorporada por la UNESCO a la Lista
        Representativa del Patrimonio Cultural Inmaterial de la Humanidad
        el 5 de diciembre de 2012.
      </p>

    </article>

    <article className="heritage-card">

<img
    src={amorfinosImage}
    alt="Artesano elaborando un sombrero de paja toquilla"
    className="heritage-image"
  />

      <span>02</span>

      <h3>Amorfino y tradición oral</h3>

      <p>
        Los amorfinos son versos populares vinculados con la cultura
        montuvia. Pueden expresar romance, humor e ingenio, y ayudan a
        conservar la memoria colectiva y las formas de expresión de
        las comunidades.
      </p>

    </article>

    <article className="heritage-card">

      <img
    src={artesaniasImage}
    alt="Artesano elaborando un sombrero de paja toquilla"
    className="heritage-image"
  />

      <span>03</span>

      <h3>Artesanías y saberes ancestrales</h3>

      <p>
        El trabajo con barro, fibras vegetales y otros materiales,
        junto con los conocimientos sobre la preparación tradicional
        de alimentos, refleja habilidades y experiencias transmitidas
        mediante la práctica cotidiana.
      </p>

    </article>

    <article className="heritage-card">

      <img
    src={construccionesImage}
    alt="Artesano elaborando un sombrero de paja toquilla"
    className="heritage-image"
  />

      <span>04</span>

      <h3>Memoria histórica y conservación</h3>

      <p>
        Las construcciones históricas y los espacios de memoria reflejan
        distintas etapas de la provincia. Su conservación requiere
        investigación, mantenimiento y participación de las comunidades.
      </p>

    </article>

  </div>

  <div className="heritage-closing">

    <h3>Conservar para transmitir</h3>

    <p>
      La tecnología puede contribuir a documentar y difundir estas
      manifestaciones mediante fotografías, grabaciones, entrevistas
      y recursos digitales, respetando a las personas y comunidades
      que mantienen vivo este patrimonio.
    </p>

  </div>

</div>

      </section>

      <section id="cultura" className="culture-section">

  <div className="culture-intro">

    <p className="section-label">CULTURA</p>

    <h2>Una identidad que se vive y se transmite</h2>

    <p>
      La cultura de Manabí reúne pueblos, formas de vida, expresiones
      lingüísticas y tradiciones que se han construido a lo largo del
      tiempo en estrecha relación con el territorio.
    </p>

    <p>
      Su identidad se expresa tanto en las comunidades vinculadas al mar
      como en aquellas relacionadas con la vida rural y campesina. Estas
      formas de vida mantienen conocimientos, costumbres y expresiones
      que continúan transmitiéndose entre generaciones.
    </p>

  </div>

  <div id="cultura-pueblos" className="culture-identity">

    <div className="identity-header">

      <p className="section-label">PUEBLOS E IDENTIDAD</p>

      <h2>Raíces que forman Manabí</h2>

    </div>

    <div className="identity-grid">

      <article className="identity-card">

        <span>01</span>

        <h3>Pueblo Manta</h3>

        <p>
          Su presencia histórica está relacionada principalmente con la
          zona costera. Sus comunidades mantienen vínculos con el mar,
          la pesca, la artesanía y conocimientos que forman parte de la
          memoria ancestral de Manabí.
        </p>

      </article>

      <article className="identity-card">

        <span>02</span>

        <h3>Pueblo Montuvio</h3>

        <p>
          Vinculado principalmente con las zonas rurales, mantiene una
          identidad relacionada con la agricultura, la ganadería, la
          vida campesina y expresiones tradicionales como los amorfinos.
        </p>

      </article>

    </div>

    <div id="cultura-lenguas" className="culture-language">

      <div className="language-header">

        <p className="section-label">LENGUAS Y TRADICIONES</p>

        <h2>Expresiones que permanecen</h2>

      </div>

      <div className="language-grid">

        <article className="language-card">

          <span>01</span>

          <h3>Lengua e identidad</h3>

          <p>
            El castellano es actualmente la lengua predominante en Manabí.
            Sin embargo, la historia de sus pueblos también conserva
            conocimientos y expresiones vinculadas con formas antiguas de
            comunicación y con la memoria de sus comunidades.
          </p>

        </article>

        <article className="language-card">

          <span>02</span>

          <h3>Tradiciones vivas</h3>

          <p>
            Los amorfinos, la música, las fiestas populares, la gastronomía
            y las artesanías forman parte de las expresiones culturales que
            mantienen viva la identidad manabita y que continúan
            transmitiéndose entre generaciones.
          </p>

        </article>

      </div>

    </div>

    <div id="cultura-juegos" className="culture-games">

      <div className="games-header">
        <p className="section-label">TRADICIÓN Y RECREACIÓN</p>
        <h2>Juegos Tradicionales</h2>
        <p>
          Los juegos tradicionales forman parte de la cultura popular y se transmiten 
          de generación en generación[cite: 3]. Entre los más conocidos en Ecuador se encuentra el 
          trompo, la rayuela, las canicas, la cometa, la cuerda, el juego de sacos, 
          las escondidas, el gato y el ratón, las carreras y el palo encebado.
        </p>
        <p>
          Estos juegos utilizan materiales sencillos y principalmente se practican en espacios 
          abiertos, fortaleciendo el encuentro familiar y la memoria colectiva.
        </p>
      </div>

      <div className="games-grid">

        <article className="game-card">
          <div className="game-image">
            <img src={trompoImage} alt="Juego tradicional del trompo de madera" />
          </div>
          <div className="game-content">
            <span className="card-number">01</span>
            <h3>El Trompo</h3>
            <p>Consiste en lanzar un trompo de madera para hacerlo girar.</p>
          </div>
        </article>

        <article className="game-card">
          <div className="game-image">
            <img src={rayuelaImage} alt="Juego tradicional de la rayuela trazada en el suelo" />
          </div>
          <div className="game-content">
            <span className="card-number">02</span>
            <h3>La Rayuela</h3>
            <p>Consiste en saltar sobre casillas dibujadas en el suelo.</p>
          </div>
        </article>

        <article className="game-card">
          <div className="game-image">
            <img src={canicasImage} alt="Juego tradicional de las canicas de vidrio" />
          </div>
          <div className="game-content">
            <span className="card-number">03</span>
            <h3>Las Canicas</h3>
            <p>Se juega lanzando pequeñas bolitas para golpear otras.</p>
          </div>
        </article>

        <article className="game-card">
          <div className="game-image">
            <img src={cometasImage} alt="Vuelo tradicional de cometas al aire libre" />
          </div>
          <div className="game-content">
            <span className="card-number">04</span>
            <h3>La Cometa</h3>
            <p>Consiste en hacer volar una estructura de papel mediante el viento.</p>
          </div>
        </article>

        <article className="game-card">
          <div className="game-image">
            <img src={cuerdaImage} alt="Juego tradicional de saltar la cuerda" />
          </div>
          <div className="game-content">
            <span className="card-number">05</span>
            <h3>Saltar la Cuerda</h3>
            <p>Requiere coordinación y equilibrio al saltar una cuerda en movimiento continuo.</p>
          </div>
        </article>

        <article className="game-card">
          <div className="game-image">
            <img src={sacosImage} alt="Carrera de sacos infantil" />
          </div>
          <div className="game-content">
            <span className="card-number">06</span>
            <h3>Juego de Sacos</h3>
            <p>Los participantes avanzan saltando dentro de un saco hasta llegar a la meta.</p>
          </div>
        </article>

        <article className="game-card">
          <div className="game-image">
            <img src={escondidasImage} alt="Juego tradicional de las escondidas" />
          </div>
          <div className="game-content">
            <span className="card-number">07</span>
            <h3>Las Escondidas</h3>
            <p>Consisten en encontrar a los jugadores que se ocultan.</p>
          </div>
        </article>

        <article className="game-card">
          <div className="game-image">
            <img src={gatoyratonImage} alt="Juego de ronda del gato y el ratón" />
          </div>
          <div className="game-content">
            <span className="card-number">08</span>
            <h3>El Gato y el Ratón</h3>
            <p>Juego colectivo que se basa en perseguir y escapar.</p>
          </div>
        </article>

        <article className="game-card">
          <div className="game-image">
            <img src={carrerasImage} alt="Carreras tradicionales y juegos de velocidad" />
          </div>
          <div className="game-content">
            <span className="card-number">09</span>
            <h3>Carreras Tradicionales</h3>
            <p>Competencias al aire libre donde se compite por llegar primero.</p>
          </div>
        </article>

        <article className="game-card">
          <div className="game-image">
            <img src={paloencebadoImage} alt="Tradición festiva del palo encebado" />
          </div>
          <div className="game-content">
            <span className="card-number">10</span>
            <h3>El Palo Encebado</h3>
            <p>Los participantes intentan subir un palo cubierto de grasa para alcanzar un premio.</p>
          </div>
        </article>

      </div>

      <div className="games-importance">
        <p className="section-label">MEMORIA Y CONVIVENCIA</p>
        <h3>Una herencia lúdica que permanece</h3>
        <p>
          Estos juegos son importantes porque fortalecen la coordinación, el equilibrio, 
          la actividad física y la convivencia. Además, permiten que niños y jóvenes 
          conozcan actividades practicadas por generaciones anteriores. Por ello, los juegos 
          tradicionales representan una forma sencilla de conservar las costumbres y la 
          identidad cultural de las comunidades.
        </p>
      </div>

    </div>
    <div className="culture-closing">

      <div className="closing-line"></div>

      <p className="section-label">CULTURA VIVA</p>

      <h2>Una identidad que continúa viva</h2>

      <p>
        Las costumbres, conocimientos y expresiones culturales de Manabí
        siguen formando parte de la vida cotidiana de sus comunidades.
        Su transmisión entre generaciones permite conservar una identidad
        construida a partir de la memoria, el territorio y las tradiciones.
      </p>

    </div>

  </div>

      </section>

      <section id="fiestas" className="festivities-section">

          <div className="festivities-intro">
            <p className="section-label">CELEBRACIONES POPULARES</p>
            <h2>Fiestas Tradicionales</h2>
            <p>
              Las fiestas tradicionales de la provincia de Manabí constituyen una expresión
              fundamental de su identidad cultural. A través de celebraciones religiosas,
              manifestaciones populares, música, danza, gastronomía y actividades comunitarias,
              los habitantes mantienen vivas sus costumbres y transmiten sus tradiciones de
              generación en generación.
            </p>
            <p>
              Estas festividades reflejan la diversidad cultural manabita, en la que se combinan
              las creencias religiosas, las raíces montubias, las actividades agrícolas y pesqueras
              y las expresiones propias de cada cantón.
            </p>
          </div>

          <div className="festivities-grid">

            <article className="festivity-card">
              <span className="card-number">01</span>
              <div className="festivity-meta">
                <span className="festivity-tag">Religiosa y popular</span>
                <span className="festivity-date">27 al 30 de junio</span>
              </div>
              <h3>Fiestas de San Pedro y San Pablo</h3>
              <p className="festivity-location">Machalilla, Montecristi, Manta, Portoviejo, Rocafuerte</p>
              <p>
                Una de las celebraciones más representativas de la provincia. Destaca por la organización
                simbólica de dos gobiernos tradicionales: el de los Blancos (San Pedro) y el de los Negros
                (San Pablo). Incluye procesiones eucarísticas, desfiles, pregones, bailes populares y paseos
                marítimos con imágenes religiosas en las comunidades pesqueras.
              </p>
            </article>

            <article className="festivity-card">
              <span className="card-number">02</span>
              <div className="festivity-meta">
                <span className="festivity-tag">Religiosa y cultural</span>
                <span className="festivity-date">4 de septiembre y 21 de noviembre</span>
              </div>
              <h3>Fiestas de la Virgen de Monserrate</h3>
              <p className="festivity-location">Montecristi</p>
              <p>
                Patrona de Montecristi, cuya celebración convoca a miles de devotos y peregrinos de todo el país.
                Durante estas fechas se realizan caminatas de fe, misas solemnes, procesiones y encuentros
                comunitarios en los que los creyentes agradecen favores y renuevan el patrimonio espiritual
                de la comunidad.
              </p>
            </article>

            <article className="festivity-card">
              <span className="card-number">03</span>
              <div className="festivity-meta">
                <span className="festivity-tag">Popular y tradicional</span>
                <span className="festivity-date">12 de octubre y fechas cantonales</span>
              </div>
              <h3>Rodeo Montubio</h3>
              <p className="festivity-location">Olmedo y zonas rurales de Manabí</p>
              <p>
                Expresión viva del orgullo campesino que exhibe las destrezas ecuestres y el manejo del ganado.
                Reúne competencias de doma de potros y toros cimarrones, desfiles de caballistas en traje
                típico, contrapuntos de amorfinos picantes y la elección de la Criolla Bonita, fortaleciendo
                el legado montubio institucionalizado desde 1926.
              </p>
            </article>

            <article className="festivity-card">
              <span className="card-number">04</span>
              <div className="festivity-meta">
                <span className="festivity-tag">Tradición oral y musical</span>
                <span className="festivity-date">24 de diciembre al 6 de enero</span>
              </div>
              <h3>El Chigualo</h3>
              <p className="festivity-location">Chone, Montecristi, Pedernales y valles agrícolas</p>
              <p>
                Celebración navideña tradicional vinculada a la devoción al Niño Jesús. Se caracteriza por
                el canto comunitario de versos, coplas y tonadas populares acompañadas de instrumentos
                artesanales y bailes de rueda, constituyendo un espacio íntimo de transmisión oral entre
                distintas generaciones.
              </p>
            </article>

          </div>

          <div className="festivities-summary">
            <div className="summary-card">
              <p className="section-label">VALOR COLECTIVO</p>
              <h3>Importancia Cultural de las Festividades</h3>
              <div className="summary-features">
                <div className="feature-item">
                  <h4>Identidad y Memoria</h4>
                  <p>Preservan creencias, ritos, música y gastronomía propias de cada territorio manabita.</p>
                </div>
                <div className="feature-item">
                  <h4>Convivencia y Encuentro</h4>
                  <p>Refuerzan los lazos de vecindad, la solidaridad comunitaria y el orgullo de pertenencia.</p>
                </div>
                <div className="feature-item">
                  <h4>Dinamismo Local</h4>
                  <p>Impulsan el turismo sostenible, los emprendimientos locales y el trabajo de artesanos y cocineras tradicionales.</p>
                </div>
              </div>
            </div>
          </div>

        </section>

<section id="gastronomia" className="gastronomy-section">

  <div className="gastronomy-intro">

    <p className="section-label">GASTRONOMÍA</p>

    <h2>Sabores que cuentan historias</h2>

    <p>
      La cocina manabita no se inventó en un recetario; nació del pulso
      cotidiano entre la gente y su territorio. Del mar generoso, de los
      ríos, de las cosechas y del trabajo en el campo brotaron los
      ingredientes que hoy definen nuestra identidad en la mesa.
    </p>

    <p>
      Es un legado vivo. A través de técnicas transmitidas de generación
      en generación, de fogón en fogón, las comunidades han transformado
      los productos locales en un archivo de memoria y sabor. Por ello,
      el reconocimiento del INPC como <strong>Patrimonio Cultural
      Inmaterial del Ecuador</strong> ratifica la importancia de estos
      saberes y prácticas como parte de la identidad y el sentido de
      pertenencia de las comunidades manabitas.
    </p>

  </div>

  <div className="gastronomy-quote">

    <p>
      En cada plato manabita late la historia, el esfuerzo
      y el alma de un pueblo.
    </p>

  </div>

  <div className="dish-grid">

  <article className="dish-card">
    <img src={vicheImage} alt="Viche manabita" />
    <div className="dish-content">
      <h3>Viche</h3>

      <p>
        Una sopa tradicional preparada con pescado o mariscos,
        plátano, yuca, maní y otros ingredientes locales.
      </p>

    </div>

  </article>

  <article className="dish-card">
    <img src={corvicheImage} alt="Corviche manabita" />
    <div className="dish-content">
      <h3>Corviche</h3>

      <p>
        Una preparación a base de plátano verde y pescado,
        acompañada de maní y otros ingredientes.
      </p>

    </div>

  </article>

  <article className="dish-card">
    <img src={tongaImage} alt="Tonga manabita" />
    <div className="dish-content">
      <h3>Tonga</h3>

      <p>
        Envuelta en hoja de plátano, combina arroz,
        pollo o gallina y una característica salsa de maní.
      </p>

    </div>

  </article>

  <article className="dish-card">
    <img src={cevicheImage} alt="Ceviche de Jipijapa" />
    <div className="dish-content">
      <h3>Ceviche de Jipijapa</h3>

      <p>
        Una versión propia del ceviche que incorpora
        el característico maní de Jipijapa.
      </p>

    </div>

  </article>

  <article className="dish-card">
    <img src={bolloImage} alt="Bollo de pescado" />
    <div className="dish-content">
      <h3>Bollo de pescado</h3>

      <p>
        Elaborado principalmente con plátano verde y pescado,
        se envuelve en hoja de plátano y se cocina hasta obtener
        su textura característica.
      </p>

    </div>

  </article>

</div>

<div className="gastronomy-variety">

  <p>
    Aunque existe una inmensa variedad de platillos que forman parte de la
    cocina manabita, cada uno refleja la relación de sus comunidades con
    el mar, el campo y los productos de su territorio. Preparaciones como
    la cazuela, el seco de gallina criolla, el bolón, los muchines, los
    dulces tradicionales y diversas recetas elaboradas con maíz, yuca,
    plátano y maní amplían un patrimonio gastronómico transmitido de
    generación en generación.
  </p>

  <p>
    Esta diversidad no solo se encuentra en los ingredientes, sino también
    en las técnicas, los utensilios y las formas de preparación que
    conservan la memoria de las comunidades manabitas.
  </p>

</div>

<div id="gastronomia-ingredientes" className="ingredients-section">

  <div className="ingredients-intro">

    <p className="section-label">LOS SABORES DE LA TIERRA</p>

    <h2>Ingredientes que no pueden faltar</h2>

    <p>
      Más que acompañar una receta, estos ingredientes forman parte de la
      memoria gastronómica de Manabí. Su presencia en la cocina cotidiana
      conecta el mar, el campo y las tradiciones que se han transmitido
      de generación en generación.
    </p>

  </div>

  <div className="ingredients-list">

    <article className="ingredient-row">

      <div className="ingredient-image">

        <img src={maniImage} alt="Maní" />

      </div>

      <div className="ingredient-content">

        <span>01</span>

        <h3>Maní</h3>

        <p>
          Uno de los ingredientes más característicos de la cocina manabita.
          Su sabor forma parte de preparaciones tradicionales como el viche,
          la cazuela y el ceviche de Jipijapa.
        </p>

      </div>

    </article>

    <article className="ingredient-row ingredient-row-reverse">

      <div className="ingredient-image">

        <img src={platanoImage} alt="Plátano" />

      </div>

      <div className="ingredient-content">

        <span>02</span>

        <h3>Plátano</h3>

        <p>
          Presente en numerosas preparaciones tradicionales, el plátano forma
          parte de la alimentación cotidiana y de recetas como corviches,
          bollos y tongas.
        </p>

      </div>

    </article>

    <article className="ingredient-row">

      <div className="ingredient-image">

        <img src={yucaImage} alt="Yuca" />

      </div>

      <div className="ingredient-content">

        <span>03</span>

        <h3>Yuca</h3>

        <p>
          Producto de la tierra utilizado en diferentes preparaciones y
          acompañamientos de la cocina tradicional manabita.
        </p>

      </div>

    </article>

    <article className="ingredient-row ingredient-row-reverse">

      <div className="ingredient-image">

        <img src={maizImage} alt="Maíz" />

      </div>

      <div className="ingredient-content">

        <span>04</span>

        <h3>Maíz</h3>

        <p>
          Producto de larga tradición en la cocina manabita, presente en
          tortillas, bebidas y otras preparaciones transmitidas entre
          generaciones.
        </p>

      </div>

    </article>

    <article className="ingredient-row">

      <div className="ingredient-image">

        <img src={pescadoImage} alt="Pescado y mariscos" />

      </div>

      <div className="ingredient-content">

        <span>05</span>

        <h3>Pescado y mariscos</h3>

        <p>
          Los productos del mar reflejan la relación de las comunidades
          manabitas con la costa y la pesca artesanal.
        </p>

      </div>

    </article>

  </div>

</div>

<div className="gastronomy-knowledge">

  <div className="knowledge-header">

    <p className="section-label">SABERES QUE PERMANECEN</p>

    <h2>Una cocina que se aprende y se comparte</h2>

  </div>

  <div className="knowledge-content">

    <div className="knowledge-text">

      <p>
        La cocina manabita no solo conserva recetas, también mantiene vivos
        conocimientos y técnicas que han pasado de una generación a otra.
        Preparar los alimentos implica reconocer los productos del territorio,
        conocer sus tiempos y conservar formas tradicionales de cocción.
      </p>

      <p>
        Estos saberes se construyen en la vida cotidiana y se comparten dentro
        de las familias y comunidades. El uso de productos locales, la pesca,
        los huertos y herramientas tradicionales forman parte de una práctica
        gastronómica vinculada estrechamente con el territorio.
      </p>

    </div>

  </div>

  <div className="knowledge-highlight">

    <span>MEMORIA · TERRITORIO · TRADICIÓN</span>

  </div>

</div>

<div id="gastronomia-turismo" className="gastronomy-tourism">

  <div className="tourism-intro">

    <p className="section-label">IDENTIDAD Y TURISMO</p>

    <h2>Cuando la cocina también cuenta el territorio</h2>

    <p>
      La gastronomía manabita es una expresión de identidad que conecta los
      productos del territorio con las historias, costumbres y conocimientos
      de sus comunidades. Sus sabores forman parte de una cultura viva que
      continúa transmitiéndose y transformándose sin perder sus raíces.
    </p>

  </div>

  <div className="tourism-highlight">

    <p>
      Conocer Manabí también es sentarse a su mesa, descubrir sus sabores
      y reconocer las historias que existen detrás de cada preparación.
    </p>

  </div>

</div>

</section>

        <section id="musica" className="music-section">

  <div className="music-intro">

    <p className="section-label">MÚSICA</p>

    <h2>Sonidos que guardan memoria</h2>

    <p>
      La música de Manabí es una expresión profundamente ligada a la identidad
      de su gente. Sus ritmos, versos y canciones nacen de la vida cotidiana,
      las tradiciones campesinas, la cultura montuvia y las celebraciones que
      forman parte de la historia de la provincia.
    </p>

    <p>
      Más que una forma de entretenimiento, estas manifestaciones musicales
      conservan historias, sentimientos y formas de entender el territorio.
      A través de ellas, conocimientos y expresiones culturales continúan
      transmitiéndose entre generaciones.
    </p>

          </div>

    <div className="music-rhythms">

      <article className="rhythm-item">

        <span>01</span>

        <div>

          <h3>Amorfino</h3>

          <p>
            Expresión representativa de la cultura montuvia, construida a
            través de versos y coplas que pueden surgir de manera improvisada.
            Sus temas recorren el amor, el humor, la picardía, la crítica y
            las experiencias de la vida cotidiana.
          </p>

        </div>

      </article>

      <article className="rhythm-item">

        <span>02</span>

        <div>

          <h3>Música montuvia</h3>

          <p>
            Está vinculada con las actividades sociales y festivas de las
            comunidades rurales. Sus expresiones musicales acompañan
            celebraciones y mantienen presentes formas tradicionales de
            convivencia.
          </p>

        </div>

      </article>

      <article className="rhythm-item">

        <span>03</span>

        <div>

          <h3>Pasillo</h3>

          <p>
            Forma parte de la memoria musical de Manabí y del patrimonio
            sonoro del Ecuador. En la provincia destaca la obra
            “Manabí”, con letra de Elías Cedeño Jerves y música de
            Francisco Paredes Herrera.
          </p>

        </div>

      </article>

      <article className="rhythm-item">

        <span>04</span>

        <div>

          <h3>Cumbia Chonera</h3>

          <p>
            Uno de los ritmos populares vinculados con las expresiones
            culturales de la provincia, presente en actividades y espacios
            de encuentro de la comunidad manabita.
          </p>

        </div>

      </article>

    </div>

        <div id="musica-instrumentos" className="music-instruments">

      <div className="instruments-header">

        <p className="section-label">INSTRUMENTOS</p>

        <h2>Las voces de la música manabita</h2>

        <p>
          Los instrumentos acompañan los ritmos y expresiones musicales de
          Manabí. Algunos forman parte de agrupaciones tradicionales y otros
          se relacionan con materiales y formas de construcción propias de
          las prácticas musicales de la región.
        </p>

      </div>

      <div className="instruments-grid">

        <article className="instrument-card">

          <span>01</span>

          <h3>Guitarra</h3>

          <p>
            Instrumento de cuerda presente en distintas expresiones musicales
            tradicionales y populares de Manabí.
          </p>

        </article>

        <article className="instrument-card">

          <span>02</span>

          <h3>Requinto</h3>

          <p>
            Instrumento de cuerda relacionado con la interpretación de
            melodías y acompañamientos dentro de la música tradicional.
          </p>

        </article>

        <article className="instrument-card">

          <span>03</span>

          <h3>Bombo y percusión</h3>

          <p>
            Instrumentos que aportan ritmo y acompañamiento a diferentes
            manifestaciones musicales y celebraciones.
          </p>

        </article>

        <article className="instrument-card">

          <span>04</span>

          <h3>Maracas</h3>

          <p>
            Instrumentos de percusión utilizados para marcar y acompañar
            diferentes ritmos.
          </p>

        </article>

        <article className="instrument-card">

          <span>05</span>

          <h3>Flautas de caña</h3>

          <p>
            Instrumentos elaborados tradicionalmente con caña o guadúa,
            vinculados con expresiones musicales de la región.
          </p>

        </article>

        <article className="instrument-card">

          <span>06</span>

          <h3>Violín criollo</h3>

          <p>
            Instrumento de cuerda mencionado entre los elementos utilizados
            en expresiones musicales tradicionales de Manabí.
          </p>

        </article>

      </div>

    </div>

         <div id="musica-artistas" className="music-artists">

  <div className="artists-header">

    <p className="section-label">ARTISTAS</p>

    <h2>Personajes que dieron voz a Manabí</h2>

    <p>
      Compositores e intérpretes que contribuyeron a conservar, interpretar
      y difundir las expresiones musicales de la provincia, dejando una
      huella en la memoria cultural manabita.
    </p>

  </div>

  <div className="artists-grid">

    <article className="artist-card">

      <div className="artist-image">

        <img src={eliasImage} alt="Elías Cedeño Jerves" />

      </div>

      <div className="artist-content">

        <span>01</span>

        <h3>Elías Cedeño Jerves</h3>

        <p>
          Poeta y compositor manabita, reconocido como autor de la letra
          de “Manabí”, una obra representativa de la identidad musical
          de la provincia.
        </p>

      </div>

    </article>

    <article className="artist-card">

      <div className="artist-image">

        <img src={franciscoImage} alt="Francisco Paredes Herrera" />

      </div>

      <div className="artist-content">

        <span>02</span>

        <h3>Francisco Paredes Herrera</h3>

        <p>
          Compositor relacionado con la música ecuatoriana y autor de
          la música de “Manabí”, obra que forma parte de la memoria
          musical de la provincia.
        </p>

      </div>

    </article>

    <article className="artist-card">

      <div className="artist-image">

        <img src={raymundoImage} alt="Raymundo Zambrano" />

      </div>

      <div className="artist-content">

        <span>03</span>

        <h3>Raymundo Zambrano</h3>

        <p>
          Conocido como “Don Pascual”, está vinculado con la preservación
          y difusión de expresiones tradicionales de la cultura manabita.
        </p>

      </div>

    </article>

    <article className="artist-card">

      <div className="artist-image">

        <img src={naldoImage} alt="Naldo Campos Sornoza" />

      </div>

      <div className="artist-content">

        <span>04</span>

        <h3>Naldo Campos Sornoza</h3>

        <p>
          Músico y requintista nacido en Santa Ana, Manabí, relacionado
          con la interpretación y difusión de la música tradicional.
        </p>

      </div>

    </article>

  </div>

</div>   

    <div className="music-memory">

      <div className="memory-content">

        <p className="section-label">MÚSICA COMO MEMORIA</p>

        <h2>Lo que se canta, también se recuerda.</h2>

        <p>
          Los ritmos, canciones y versos de Manabí conservan historias,
          sentimientos y formas de entender la vida comunitaria. Su
          transmisión entre generaciones permite que estas expresiones
          continúen formando parte de la identidad cultural de la provincia.
        </p>

      </div>

      <div className="memory-line">

        <span>MEMORIA</span>

        <span>IDENTIDAD</span>

        <span>TRADICIÓN</span>

      </div>

    </div>

      </section>

        <section id="gobernanza" className="governance-section">

          <div className="governance-intro">
            <p className="section-label">GESTIÓN Y SOSTENIBILIDAD</p>
            <h2>Participación ciudadana, conservación, igualdad y comunicación del patrimonio cultural</h2>
            <p>
              La gobernanza del patrimonio cultural se refiere a la manera en que las instituciones
              públicas, los gobiernos locales, las organizaciones culturales y la ciudadanía colaboran
              para identificar, proteger, conservar y difundir los bienes y las tradiciones de una
              comunidad.
            </p>
            <p>
              En Manabí, este trabajo es importante porque la preservación del patrimonio no depende
              únicamente de las autoridades, sino también de las personas que practican y transmiten
              los conocimientos tradicionales.
            </p>
          </div>

          <div className="governance-grid">

            <article className="governance-card">
              <span className="card-number">01</span>
              <h3>Participación ciudadana</h3>
              <p>
                La comunidad debe intervenir activamente en las decisiones relacionadas con su patrimonio.
                Los artesanos, músicos, adultos mayores, investigadores, estudiantes y representantes comunitarios
                pueden aportar información para documentar las tradiciones y proponer acciones para mantenerlas vigentes.
              </p>
              <p className="governance-unesco">
                La UNESCO establece que las comunidades que crean, mantienen y transmiten el patrimonio
                cultural inmaterial deben participar ampliamente en su salvaguardia.
              </p>
            </article>

            <article className="governance-card">
              <span className="card-number">02</span>
              <h3>Conservación del patrimonio</h3>
              <p>
                Para proteger el patrimonio manabita es necesario identificar sus elementos, registrar su estado
                de conservación y desarrollar medidas adecuadas para evitar su deterioro o desaparición. En el caso
                de las tradiciones, esto implica apoyar a los portadores de saberes, organizar talleres, documentar
                las técnicas artesanales y facilitar que los conocimientos se transmitan a niños y jóvenes.
              </p>
              <p>
                En el patrimonio material, se requieren evaluaciones técnicas, mantenimiento y restauraciones
                realizadas con criterios especializados. El Instituto Nacional de Patrimonio Cultural destaca la
                importancia de los inventarios para identificar los bienes y determinar las medidas de protección necesarias.
              </p>
            </article>

            <article className="governance-card">
              <span className="card-number">03</span>
              <h3>Igualdad e inclusión</h3>
              <p>
                La gestión cultural debe garantizar que diferentes grupos sociales tengan oportunidades de participar
                y beneficiarse de las iniciativas patrimoniales. Es importante reconocer el trabajo de las mujeres
                artesanas, promover la participación de los jóvenes y respetar la diversidad cultural de las comunidades.
              </p>
              <p>
                También se deben generar espacios accesibles para personas con discapacidad y evitar que la difusión
                del patrimonio excluya a determinados grupos. La UNESCO señala que la salvaguardia debe respetar las
                identidades culturales, considerar la igualdad de género y fomentar la participación juvenil.
              </p>
            </article>

          </div>

          <div id="gobernanza-tecnologia" className="governance-conclusion">
            <div className="closing-line"></div>
            <p className="section-label">TECNOLOGÍA Y MEMORIA</p>
            <h3>El Portal Cultural como Herramienta</h3>
            <p>
              Una adecuada gobernanza del patrimonio cultural de Manabí requiere cooperación entre las instituciones
              y la ciudadanía, conservación responsable, igualdad de oportunidades y una comunicación efectiva.
            </p>
            <p>
              Un portal cultural puede contribuir a estos objetivos al reunir información documentada, visibilizar a
              los portadores de saberes y facilitar que la población participe en la valoración de su identidad cultural.
              Así, la tecnología se convierte en una herramienta para fortalecer la memoria colectiva y promover la
              continuidad de las tradiciones.
            </p>
          </div>

        </section>
    </main>

<section className="qr-section" id="compartir">
  <div className="qr-content">
    <h2>La cultura se comparte</h2>

    <h3>¡Ayúdanos a compartir el orgullo manabita!</h3>

    <p>
      Comparte este portal para que más personas conozcan,
      valoren y se enamoren de la riqueza cultural de Manabí.
    </p>

    <img
      src={qrPortal}
      alt="Código QR para visitar el Portal Cultural de Manabí"
      className="qr-image"
    />

    <p className="qr-instruction">Escanea, descubre y comparte.</p>

    <span>Manabí: una tierra de historia, tradición e identidad.</span>
  </div>
</section>

</div>
  )

}

export default App
