const response = {};

response.data = [
  {
    rid: 113,
    name: 'America mint green in',
    price: '$',
    rating_label: 'Service',
    rating_score: '4.0',
    description: 'Enim non voluptas vel non vel eaque aspernatur.',
    category: 'Japanese',
    neighborhood: 'Castro',
  },
  {
    rid: 165,
    name: 'et orchid Cary',
    price: '$$$$',
    rating_label: 'Decor',
    rating_score: '3.9',
    description: 'Error sit vitae doloribus.',
    category: 'Japanese',
    neighborhood: 'Castro',
  },
];

response.json = () => response.data;

module.exports = response;
