const Users = require('../users/users-model');

function logger(req, res, next) {
  const timeStamp = new Date()
  console.log(req.method, req.originalUrl, timeStamp)
  next()
}

async function validateUserId(req, res, next) {
  const { id } = req.params
  try {
  const user = await Users.getById(id)
  if(user) {
    req.user = user
  } else {
    next({
      status: 404,
      message: "user not found"
    })
  } 
  } catch (error) {
    next(error)
  }
}

function validateUser(req, res, next) {
  const { name } = req.body
  if(!name || typeof name !== 'string' || !name.trim()) {
    next({
      status: 400,
      message: "missing required name field"
    })
  }else {
    next()
  }
}

function validatePost(req, res, next) {
  
}

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
};
