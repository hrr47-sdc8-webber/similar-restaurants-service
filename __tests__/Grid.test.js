import React from 'react';
import renderer from 'react-test-renderer';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Grid from '../client/components/Grid';

configure({ adapter: new Adapter() });

describe('Grid', () => {
  it('renders without crashing', () => {
    shallow(<Grid />);
  });
});
