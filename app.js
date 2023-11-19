// import express from 'express';
const express = require('express');
const { userRouter } = require('./user.route');

const app = express();
app.use(express.json())
app.use(userRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})



module.exports = { app };