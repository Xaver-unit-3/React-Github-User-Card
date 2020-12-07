import React from 'react';
import axios from axios;
import './App.css';

function App() {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/xpinero')
      .then(res => {
         this.setState({
          ...this.state,
             user: res.data
         });
      })
      .catch((err) => console.log('error', err));

    axios
      .get('https://api.github.com/users/xpinero/followers')
      .then((res) => {
        this.setState({
          ...this.state,
          followers: Response.data
        });
      })
      .catch((err) => console.log('error', err));
  }
  
  return (
    <div className="App">
   
    </div>
  );
}

export default App;
