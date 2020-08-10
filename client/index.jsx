import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

// eslint-disable-next-line import/extensions
import CardsList from './components/CardsList.jsx';
// eslint-disable-next-line import/extensions
import GridHeader from './components/GridHeader.jsx';

const Container = styled.div`
  background-color: rgb(250,250,250);
  width: 1440px;
  height: 838px;
  margin-top: 48px;
  color: #101820;
  `;

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: '519',
      currentName: '',
      currentCategory: '',
      similarRestaurants: [],
      photos: [],
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
          similarRestaurants: res.data.similar,
          photos: res.data.photos,
        });
      })
      .catch((err) => {
        throw err;
      })
      .then(() => {
        // eslint-disable-next-line no-console
        console.log(this.state);
      });
  }

  render() {
    return (
      <Container>
        <GridHeader currentCategory={this.state.currentCategory}
        currentName={this.state.currentName} />
        <CardsList similarRestaurants={this.state.similarRestaurants}
        photos={this.state.photos} />
      </Container>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<Grid />, document.getElementById('similar-restaurants-grid'));
