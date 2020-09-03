const generateRandomNumber = (userContext, events, done) => {
  const num = Math.floor(Math.random() * 10000000) + 1;
  userContext.vars.id = num;
  return done();
};

module.exports = {
  generateRandomNumber,
};
