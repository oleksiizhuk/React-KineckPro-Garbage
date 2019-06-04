import React, {Component, Fragment} from 'react';


import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import BodyComponent from './BodyComponent'


export default class Page extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
      </Fragment>
    )
  }
}
