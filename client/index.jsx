import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// eslint-disable-next-line import/extensions
import CardsList from './components/CardsList.jsx';
// eslint-disable-next-line import/extensions
import GridHeader from './components/GridHeader.jsx';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: '519',
      currentName: '',
      currentCategory: '',
      currentNeighborhood: '',
      similarRestaurants: [],
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
        // placeholder to invoke function to get photos
      });
  }

  render() {
    return (
      <div className="gridTitle">
        <GridHeader currentCategory={this.state.currentCategory} currentName={this.state.currentName} />
        <CardsList similarRestaurants={this.state.similarRestaurants} />
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<Grid />, document.getElementById('similar-restaurants-grid'));
