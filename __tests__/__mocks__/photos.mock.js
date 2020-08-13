const response = {};

response.data = [
  {
    url: 'https://zigat.s3-us-west-1.amazonaws.com/image8.jpg',
    restaurant_id: 113,
  },
  {
    url: 'https://zigat.s3-us-west-1.amazonaws.com/image1.jpg',
    restaurant_id: 113,
  },
  {
    url: 'https://zigat.s3-us-west-1.amazonaws.com/image42.jpg',
    restaurant_id: 113,
  },
  {
    url: 'https://zigat.s3-us-west-1.amazonaws.com/image7.jpg',
    restaurant_id: 113,
  },
  {
    url: 'https://zigat.s3-us-west-1.amazonaws.com/image38.jpg',
    restaurant_id: 113,
  },
  {
    url: 'https://zigat.s3-us-west-1.amazonaws.com/image38.jpg',
    restaurant_id: 113,
  },
  {
    url: 'https://zigat.s3-us-west-1.amazonaws.com/image41.jpg',
    restaurant_id: 113,
  },
  {
    url: 'https://zigat.s3-us-west-1.amazonaws.com/image57.jpg',
    restaurant_id: 113,
  },
];

response.json = () => response.data;

module.exports = response;
