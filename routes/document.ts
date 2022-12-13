import express from 'express';

const document = express.Router();

document.post('/', async (req, res) => {
    res.json({})
})

document.patch('/:id', async (req, res) => {
    res.json({})
})

export default document;