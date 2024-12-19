const verifyToken = (req, res, next) => {
    const token = req.header.authorization;
    const newtoken = token.slice(7);
}

module.exports = verifyToken;