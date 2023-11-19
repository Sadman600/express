const express = require('express');
const { userCollection, userCollectionPost } = require('./user.collection');

const userRouter = express.Router();

userRouter.get('/user', userCollection)
userRouter.post('/user', userCollectionPost)

module.exports = {
    userRouter
}