function logger(req, res, next) {
  const timeStamp = new Date()
  console.log(req.method, req.originalUrl, timeStamp)
  next()
}

function validateUserId(req, res, next) {
  
}

function validateUser(req, res, next) {
  
}

function validatePost(req, res, next) {
  
}

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
};
