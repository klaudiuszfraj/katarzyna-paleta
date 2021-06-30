import React from 'react'
import style from './Navbar.module.scss'
import { Link } from 'gatsby'
import logo from '../../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className={style.navbar}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className={style.wrapper}>
          <div>
            <div className={style.hamburger}>
              <span/>
              <span/>
              <span/>
            </div>
            Portfolio
          </div>
          <div>Logo</div>
          <div>Home</div>



          {/*<div className="navbar-brand">*/}
          {/*  <Link to="/" className="navbar-item" title="Logo">*/}
          {/*    <img src={logo} alt="Kaldi" style={{ width: '88px' }} />*/}
          {/*  </Link>*/}
          {/*  /!* Hamburger menu *!/*/}
          {/*  <div*/}
          {/*    className={`navbar-burger burger ${this.state.navBarActiveClass}`}*/}
          {/*    data-target="navMenu"*/}
          {/*    onClick={() => this.toggleHamburger()}*/}
          {/*  >*/}
          {/*    <span />*/}
          {/*    <span />*/}
          {/*    <span />*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div*/}
          {/*  id="navMenu"*/}
          {/*  className={`navbar-menu ${this.state.navBarActiveClass}`}*/}
          {/*>*/}
          {/*  <div className="navbar-start has-text-centered">*/}
          {/*    <Link className="navbar-item" to="/about">*/}
          {/*      About*/}
          {/*    </Link>*/}
          {/*    <Link className="navbar-item" to="/products">*/}
          {/*      Products*/}
          {/*    </Link>*/}
          {/*    <Link className="navbar-item" to="/blog">*/}
          {/*      Blog*/}
          {/*    </Link>*/}
          {/*    <Link className="navbar-item" to="/contact">*/}
          {/*      Contact*/}
          {/*    </Link>*/}
          {/*    <Link className="navbar-item" to="/contact/examples">*/}
          {/*      Form Examples*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </nav>
    )
  }
}

export default Navbar
