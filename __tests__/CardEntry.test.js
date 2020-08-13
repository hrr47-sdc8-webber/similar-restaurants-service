import React from 'react';
import renderer from 'react-test-renderer';

import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CardEntry, CardText } from '../client/components/CardEntry';
import photosMocks from './../__mocks__/photos.mock.js';

configure({ adapter: new Adapter() });

describe('CardEntry', () => {
  const cardEntryProps = {
    id: 113,
    name: 'America mint green in',
    price: '$',
    ratingLabel: 'Service',
    ratingScore: '4.0',
    description: 'Enim non voluptas vel non vel eaque aspernatur.',
    category: 'Japanese',
    neighborhood: 'Castro',
    photos: photosMocks.json()[0],
    handleClick: () => {},
  };

  it('renders without crashing', () => {
    shallow(<CardEntry {...cardEntryProps} />);
  });

  it('renders component correctly', () => {
    const entry = mount(<CardEntry {...cardEntryProps} />);
    expect(entry.exists('div')).toEqual(true);
  });

  it('renders snapshot correctly', () => {
    const component = renderer.create(<CardEntry {...cardEntryProps} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('CardText', () => {
  let handleClick;
  let onClick;
  const id = 519;

  beforeEach(() => {
    onClick = jest.fn();
    handleClick = shallow(<CardText className="textLink" onClick={onClick} />);
  });

  it('requires onClick prop', () => {
    expect(handleClick.props().onClick).toBeDefined();
  });

  it('renders link text', () => {
    const textLink = handleClick.find('.textLink').first();
    expect(textLink).toBeDefined();
  });

  it('on click invokes onClick function', () => {
    handleClick.find('.textLink').simulate('click');
    expect(onClick).toBeCalled();
  });
});
