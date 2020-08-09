import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

// eslint-disable-next-line import/extensions
import CardsList from './components/CardsList.jsx';
// eslint-disable-next-line import/extensions
import GridHeader from './components/GridHeader.jsx';

const Container = styled.div`
  background-color: red;
  width: 1440px;
  height: 839px;
  margin-top: 48px;
  `;

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: '519',
      currentName: '',
      currentCategory: '',
      currentNeighborhood: '',
      similarRestaurants: [],
      photos: [],
    };
  }

  componentDidMount() {
    this.getInfo(this.state.currentId);
  }

  getInfo(Id) {
    axios.get(`/zagat/restaurants/${Id}`)
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
        this.getPhotos(this.state.similarRestaurants[0].rid);
      });
  }

  getPhotos(Id) {
    axios.get(`/zagat/photos/${Id}`)
      .then((res) => {
        // console.log(res.data)
        this.setState({
          photos: res.data,
        });
        // console.log(this.state.photos)
      })
      .catch((err) => {
        throw err;
      })
      .then(() => {
        console.log('done');
      });
  }

  render() {
    // console.log(this.state.photos);
    return (
      <Container>
        <GridHeader currentCategory={this.state.currentCategory}
        currentName={this.state.currentName} />
        <CardsList similarRestaurants={this.state.similarRestaurants} photos={this.state.photos} />
      </Container>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<Grid />, document.getElementById('similar-restaurants-grid'));
