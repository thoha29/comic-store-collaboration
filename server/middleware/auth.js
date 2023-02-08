const { tokenVerifier } = require('../helpers/jsonwebtoken');

const authentication = (req, res, next) => {
  console.log('middelware authentication')
  const access_token = req.headers.access_token;

  if (access_token) {
    try {
      let verifierToken = tokenVerifier(access_token);
      req.userData = verifierToken
      next();
    } catch (error) {
      res.status(401).json({
        message: "Token not authenticated!"
      })
    }

  } else {
    res.status(404).json({
      message: "Access token not found!"
    })
  }
}

module.exports = {
  authentication
}