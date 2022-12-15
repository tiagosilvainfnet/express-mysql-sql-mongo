import express from 'express';
import DocumentController from '../controllers/DocumentController';

const document = express.Router();
const documentCtrl = new DocumentController();

document.get('/', async (req, res) => {
    const result = await documentCtrl.getDocuments(req.query);
    res.statusCode = result.status;
    res.json(result);
})

document.post('/', async (req, res) => {
    res.json({})
})

document.patch('/:id', async (req, res) => {
    res.json({})
})

export default document;