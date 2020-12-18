import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import FilterPage from '../FilterPage/FilterPage';
import '../MainPage/MainPage.scss';

class MainPage extends Component {
  getData = () => {
    fetch(`http://localhost:3000/filterpage/${this.props.match.params.userId}`)
      .then(res => res.json())
      .then(res => this.setState({ data: res }));
    this.props.history.push(`/filterpage/${this.props.userId}`);
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
        <div className="test" onClick={this.getData}>
          김종관
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(MainPage);
