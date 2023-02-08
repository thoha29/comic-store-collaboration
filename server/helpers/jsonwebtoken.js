const jwt = require('jsonwebtoken')
const secretCode = process.env.SECRET_CODE || 'terserah'

const tokenGenerator = (data) => {
    const { id, name, email } = data;
    return jwt.sign({ id, name, email }, secretCode)
}

const tokenVerifier = (data) => {
    return jwt.verify(data, secretCode)
}

module.exports = {
    tokenGenerator, tokenVerifier
}