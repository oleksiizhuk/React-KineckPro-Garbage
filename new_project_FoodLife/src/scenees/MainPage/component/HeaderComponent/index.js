import React, {Component} from 'react';

import Logo from './img/logo.png';
import {FaPhoneVolume} from 'react-icons/fa'
import './style.css'


export default class HeaderComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="bg__container">
          <div className="container">
            <div className="head__container">
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
                    <li className='li__Phone'><FaPhoneVolume/>066-116-99-15</li>
                    <li className='li__Phone'><FaPhoneVolume/>098-116-99-15</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#">
                  <img src={Logo} width="30" height="30" alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Пицца <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Суши
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">БИГМАКИ</a>
                        <a className="dropdown-item" href="#">ГОРЯЧИЕ РОЛЛЫ</a>
                        <a className="dropdown-item" href="#">ГУНКАНЫ</a>
                        <a className="dropdown-item" href="#">ДРАКОНЫ</a>
                        <a className="dropdown-item" href="#">КАЛИФОРНИЯ</a>
                        <a className="dropdown-item" href="#">МАКИ</a>
                        <a className="dropdown-item" href="#">ФИЛАДЕЛЬФИЯ</a>
                        <a className="dropdown-item" href="#">ФИРМЕННЫЕ РОЛЫ</a>
                        <a className="dropdown-item" href="#">НИГИРИ</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Показать все суши</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Сеты</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Топпинги</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Напитки</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Добавки</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Акции</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">О нас</a>
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
