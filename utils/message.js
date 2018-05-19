const generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new Data().toLocaleTimeString()
  }
};

module.exports = {generateMessage};
