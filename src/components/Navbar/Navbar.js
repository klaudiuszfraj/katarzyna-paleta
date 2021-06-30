import React from 'react'
import style from './Navbar.module.scss'
import Hamburger from "./Hamburger/Hamburger";
import { Link } from 'gatsby'
import logo from '../../img/logo-bez-tła.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activePortfolio: false,
      activeHome: false,
    }
  }

  toggleHamburgerPortfolio = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        activePortfolio: !this.state.activePortfolio,
        activeHome: false,
      },
    )
  }
  toggleHamburgerHome = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        activePortfolio: false,
        activeHome: !this.state.activeHome,
      },
    )
  }

  render() {
    return (
      <nav
        className={style.navbar}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className={style.grayBackground}>
          <div className={style.wrapper}>
            <div className={style.containMenu}
                 onClick={this.toggleHamburgerPortfolio}
            >
              <Hamburger isOpen={this.state.activePortfolio}/>
              <p>Portfolio</p>
            </div>

            <Link to="/" title="Logo" className={style.logo}>
              <img src={logo} alt="Katarzyna Paleta" />
              <p>Katarzyna Paleta</p>
            </Link>

            <div
              className={style.containMenu}
              onClick={this.toggleHamburgerHome}
            >
              <p>Home</p>
              <Hamburger isOpen={this.state.activeHome}/>
            </div>
          </div>
        </div>
        <div className={`${style.linksWrapper} container`}>
          {this.state.activePortfolio &&
          <div className={`${style.links} ${style.linksLeft} `}>
            <Link to="/malarstwo">
              Malarstwo
            </Link>
            <Link to="/rzezba">
              Rzezba
            </Link>
            <Link to="/rysunek">
              Rysunek
            </Link>
            <Link to="/inne">
              Inne
            </Link>
          </div>
          }
          {this.state.activeHome &&
          <div className={`${style.links} ${style.linksRight}`}>
            <Link to="/o-mnie">
              O mnie
            </Link>
            <Link to="/oferta">
              Oferta
            </Link>
            <Link to="/kontakt">
              Kontakt
            </Link>
            <Link to="/linki">
              Linki
            </Link>
            <Link to="/video">
              Video
            </Link>
            <Link to="/galeria">
              Galeria
            </Link>
          </div>
          }
        </div>
      </nav>
    )
  }
}

export default Navbar
