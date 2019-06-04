import React, {Component} from 'react';
import Page from './component'


export default class MainPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      test: ''
    }
  }

  render() {
    return (
      <Page/>
    )
  }

}
