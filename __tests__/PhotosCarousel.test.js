import React from 'react';
import renderer from 'react-test-renderer';

import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PhotosCarousel from '../client/components/PhotosCarousel';
import photosMocks from './../__mocks__/photos.mock.js';

configure({ adapter: new Adapter() });

describe('PhotosCarousel with photos data', () => {
  const photosCarouselProps = {
    photos: photosMocks.json()[0],
  };

  it('renders without crashing', () => {
    shallow(<PhotosCarousel {...photosCarouselProps} />);
  });

  it('renders main component correctly', () => {
    const carousel = mount(<PhotosCarousel {...photosCarouselProps} />);
    expect(carousel.exists('div')).toEqual(true);
  });

  it('PhotosCarousel renders snapshot correctly', () => {
    const component = renderer.create(<PhotosCarousel {...photosCarouselProps} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('PhotosCarousel without photos data', () => {
  it('renders main component correctly', () => {
    const carousel = mount(<PhotosCarousel photos={[{ url: 'https://zigat.s3-us-west-1.amazonaws.com/no-dish.png' }]} />);
    expect(carousel.exists('div')).toEqual(true);
  });
});
