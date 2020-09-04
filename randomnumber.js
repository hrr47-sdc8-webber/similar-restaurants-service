const generateRandomNumber = (userContext, events, done) => {
  const weight = Math.floor(Math.random() * 10) + 1;
  if (weight <= 8) {
    userContext.vars.id = Math.floor(Math.random() * 1000000) + 9000000;
  } else {
    userContext.vars.id = Math.floor(Math.random() * 10000000) + 1;
  }
  return done();
};

module.exports = {
  generateRandomNumber,
};
