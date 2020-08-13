import React from 'react';
import renderer from 'react-test-renderer';

import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CardsList from '../client/components/CardsList';
import similarMocks from './../__mocks__/similar.mock.js';
import photosMocks from './../__mocks__/photos.mock.js';

configure({ adapter: new Adapter() });

describe('CardsList', () => {
  const cardsListProps = {
    similarRestaurants: similarMocks.json(),
    photos: photosMocks.json(),
    handleClick: () => {},
  };

  it('renders without crashing', () => {
    shallow(<CardsList {...cardsListProps} />);
  });

  it('renders component correctly', () => {
    const list = mount(<CardsList {...cardsListProps} />);
    expect(list.exists('div')).toEqual(true);
  });

  it('CardsList renders snapshot correctly', () => {
    const component = renderer.create(<CardsList {...cardsListProps} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
