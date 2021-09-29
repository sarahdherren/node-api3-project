const express = require('express');
const {
  validateUserId,
  validateUser,
  validatePost
} = require('../middleware/middleware');

const Users = require('./users-model');
const Posts = require('../posts/posts-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
  const users = await Users.get()
  res.status(200).json(users)
  } catch(error) {
    next(error)
  }
})

router.get('/:id', validateUserId, (req, res) => {
  res.status(200).json(req.user)
});

router.post('/', validateUser, async (req, res, next) => {
  try {
    const newUser = await Users.insert(req.body)
    res.status(201).json(newUser)
  } catch(error){
    next(error)
  }
});

router.put('/:id', validateUserId, validateUser, async (req, res, next) => {
  try {
    const { id } = req.user
    const updateUser = await Users.update(id, req.body)
    res.status(200).json(updateUser)
  } catch (error) {
    next(error)
  }
});

router.delete('/:id', validateUserId, (req, res, next) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
 
});

router.get('/:id/posts', validateUserId, (req, res, next) => {
  // RETURN THE ARRAY OF USER POSTS
  
});

router.post('/:id/posts', validateUserId, validatePost, (req, res, next) => {
  // RETURN THE NEWLY CREATED USER POST
  
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message
  })
})
module.exports = router;
