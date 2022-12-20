import express from 'express';
import DocumentController from '../controllers/DocumentController';

const document = express.Router();
const documentCtrl = new DocumentController();

document.get('/', async (req, res) => {
    const result = await documentCtrl.getDocuments(req.query);
    res.statusCode = result.status;
    res.json(result);
})

document.get('/:id', async (req, res) => {
    const result = await documentCtrl.getDocument(req.params.id);
    res.statusCode = result.status;
    res.json(result);
})


document.post('/', async (req, res) => {
    res.json({})
})

document.patch('/:id', async (req, res) => {
    const result = await documentCtrl.updateDocument(req.params.id, req.body);
    res.statusCode = result.status;
    res.json(result);
})

document.delete('/:id', async (req, res) => {
    const result = await documentCtrl.deleteDocument(req.params.id);
    res.statusCode = result.status;
    res.json(result);
})

export default document;