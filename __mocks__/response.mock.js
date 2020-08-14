const response = {};

// id: 519
response.data = {
  restaurant: {
    name: 'dolor silver Jett',
    category: 'Japanese',
    neighborhood: 'Castro',
  },
  similar: [
    {
      rid: 113,
      name: 'America mint green in',
      price: '$',
      rating_label: 'Service',
      rating_score: '4.0',
      description: 'Enim non voluptas vel non vel eaque aspernatur.',
      category: 'Japanese',
      neighborhood: 'Castro'
    },
    {
      rid: 165,
      name: 'et orchid Cary',
      price: '$$$$',
      rating_label: 'Decor',
      rating_score: '3.9',
      description: 'Error sit vitae doloribus.',
      category: 'Japanese',
      neighborhood: 'Castro'
    },
  ],
  photos: [
    [
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
    ],
    [
      {
        url: 'https://zigat.s3-us-west-1.amazonaws.com/image19.jpg',
        restaurant_id: 165,
      },
    ],
  ],
};

response.json = () => response.data;

module.exports = response;
