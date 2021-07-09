import React, { Component } from 'react';
import Products from './components/Products/Products';
import Product from './components/Products/Product/Product';
import Navbar from './components/NavBar/Navbar';




class App extends Component {
  constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }))
          .catch(err => err);
  }
  callAPI() {
    fetch("http://localhost:9000/users")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
}

  componentDidMount() {
      this.callAPI();
  }

  render() {
      return (
        <div>
            <Navbar />
            <Products />
                <p className="App-intro">{this.state.apiResponse}</p>
         </div>
      );
  }
}

export default App;




