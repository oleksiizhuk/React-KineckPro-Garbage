import React, {Component} from 'react';

import {connect} from 'react-redux';

import HeaderComponent from './HeaderComponent'


export default class MainPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      test: ''
    }
  }

  render() {
    return (
      <HeaderComponent

      />
    )
  }

}
