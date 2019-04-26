import React, {Component} from 'react';
import { FaPhoneVolume } from 'react-icons/fa'
import './style.css'


export default class HeaderComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div class="container-fluid">
          <div className="row justify-content-between">
            <div className="col-6">
              <h1>
                Foodlife доставка еды номер 1
              </h1>
              <p>
                Накормим всех
              </p>
            </div>
            <div className="col-4">
              <ul>
                <li className='li__Phone'> <FaPhoneVolume />066-116-99-15</li>
                <li className='li__Phone'> <FaPhoneVolume />098-116-99-15</li>
              </ul>
            </div>
          </div>

          <hr/>

          <div className="row">
            <div className="col">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>

        </div>
      </header>
    )
  }
}
