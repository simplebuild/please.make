const https = process.env.HTTPS === 'true';
const host = process.env.HOST || '0.0.0.0';

module.exports = function () {
  return {
    hot: true,
    host,
    https
  };
};
