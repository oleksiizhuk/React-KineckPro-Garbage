import React, {Component} from 'react';
import Image from './img/SET_FILA-200x200.png'


export default class Slider extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="slider" className="product-layout col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <div className="image">
          <img src={Image} alt=""/>
        </div>
        <div className="caption">
          <h4> set </h4>
          <p>lorem asdljasdlkj asdjlkajsld alskdkjsdjllkjlasdkjqlkadsnljkwndcjklnkjas,mnk</p>
          <p className="price">
            400.00
          </p>
        </div>
      </div>
    )
  }
}
