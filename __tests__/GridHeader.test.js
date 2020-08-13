import React from 'react';
import renderer from 'react-test-renderer';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GridHeader from '../client/components/GridHeader';

configure({ adapter: new Adapter() });

describe('GridHeader', () => {
  const gridHeaderProps = {
    currentCategory: 'Pizza',
    currentName: 'Rubie ivory consequatur',
  };

  it('renders without crashing', () => {
    shallow(<GridHeader {...gridHeaderProps} />);
  });

  it('renders text correctly', () => {
    const title = shallow(<GridHeader {...gridHeaderProps} />);
    expect(title.find('div').text()).toEqual('More Pizza Near Rubie ivory consequatur');
  });

  it('GridHeader renders "More Pizza Near Rubie ivory consequatur"', () => {
    const component = renderer.create(<GridHeader {...gridHeaderProps} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
