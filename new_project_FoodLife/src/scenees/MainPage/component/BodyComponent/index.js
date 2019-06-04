import React, {Component} from 'react';
//import styled from 'styled-components';
import SliderView from './carusel';
import Product from './product'

export default class Body extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <SliderView/>
        <Product/>
      </div>
    )
  }

}
