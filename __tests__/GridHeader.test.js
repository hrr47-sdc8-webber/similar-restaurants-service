import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GridHeader from '../client/components/GridHeader';

configure({ adapter: new Adapter() });

// describe('GridHeader (Snapshot)', () => {
//   it('GridHeader renders "More Pizza Near Rubie ivory consequatur"', () => {
//     const component = renderer.create(<GridHeader />);
//     const json = component.toJSON();
//     expect(json).toMatchSnapshot();
//   });
// });

describe('GridHeader rendering', () => {
  it('renders without crashing', () => {
    shallow(<GridHeader />);
  });

  it('GridHeader renders pre-written text correctly', () => {
    const welcome = shallow(<GridHeader />);
    expect(welcome.find('div').text()).toEqual('More  Near ');
  });
});
