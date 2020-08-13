const response = {};

response.data = {
  name: 'dolor silver Jett',
  category: 'Japanese',
  neighborhood: 'Castro',
};

response.json = () => response.data;

module.exports = response;
