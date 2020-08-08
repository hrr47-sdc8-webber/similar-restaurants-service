import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: '519',
      currentName: '',
      currentCategory: '',
      currentNeighborhood: '',
      similarRestaurants: []
    };
  }

  componentDidMount() {
    this.getInfo(this.state.currentId);
  }

  getInfo(id) {
    axios.get(`/zagat/restaurants/${id}`)
      .then((res) => {
        this.setState({
          currentName: res.data.restaurant.name,
          currentCategory: res.data.restaurant.category,
          currentNeighborhood: res.data.restaurant.neighborhood,
          similarRestaurants: res.data.similar,
        });
      })
      .catch((err) => {
        throw err;
      })
      .then(() => {
        // placeholder
      });
  }

  render() {
    return (
      <div className="gridTitle">
        More
        {this.state.currentCategory}
        Near
        {this.state.currentName}
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<Grid />, document.getElementById('similar-restaurants-grid'));
