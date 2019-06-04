import React, {Component} from 'react';
import './style.css'


export default class FooterComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className='footer'>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <p>Food Life © 2019</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
