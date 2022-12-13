import express from 'express';

const auth = express.Router();

auth.post('/login', async (req, res) => {
    res.json({})
})

auth.post('/register', async (req, res) => {
    res.json({})
})

auth.get('/confirm-email/:token', async (req, res) => {
    res.json({})
})

export default auth;