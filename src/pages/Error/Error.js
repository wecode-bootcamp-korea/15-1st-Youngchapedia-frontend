import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Nav from '../../Components/Nav/Nav';
import './Error.scss';

class Error extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="Error">
        <Nav />
        <div className="errorTextSection">
          <div className="errorText1">404 </div>
          <div className="errorText2">Page cannot be found!</div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Error;
