import React, {Component} from 'react';
import './style.css'

export default class FeedBack extends Component {

  constructor(props) {
    super(props);

    this.state = {
      flag: false
    }
  }

  showFeedBack() {
    this.setState({flag: !this.state.flag});
    setTimeout(function () {
      this.setState({flag: !this.state.flag});
    }, 3000);
  }

  render() {
    return (
      <div>{
        this.state.flag === true ?
          <p className="card-text feedBack">Some quick example text to build on </p> :
          <div></div>
      }</div>
    )
  }
}

