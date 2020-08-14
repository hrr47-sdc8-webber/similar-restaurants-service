import React from 'react';
import renderer from 'react-test-renderer';

import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Grid from '../client/components/Grid';

configure({ adapter: new Adapter() });

describe('Grid', () => {
  it('renders without crashing', () => {
    shallow(<Grid />);
  });

  it('Grid renders snapshot correctly"', () => {
    const component = renderer.create(<Grid />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
