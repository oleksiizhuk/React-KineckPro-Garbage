import React, {Component} from 'react';
import FirstLesson from './lesson 1';
import SecondLesson from './lesson 2';
import ThirdLesson from './lesson 3';
import {connect} from 'react-redux';

class Test extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <FirstLesson/>
    )
  }
}
