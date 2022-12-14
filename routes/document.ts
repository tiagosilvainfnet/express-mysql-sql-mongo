import express from 'express';

const document = express.Router();

document.get('/', async (req, res) => {
    res.json(
        [
            { id: 1, title: 'Snow', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
            { id: 2, title: 'Lannister', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
            { id: 3, title: 'Lannister', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
            { id: 4, title: 'Stark', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
            { id: 5, title: 'Targaryen', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
            { id: 6, title: 'Melisandre', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
            { id: 7, title: 'Clifford', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
            { id: 8, title: 'Frances', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
            { id: 9, title: 'Roxie', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
            { id: 10, title: 'Tiago', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
            { id: 11, title: 'Marcelo', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
            { id: 12,  title: 'João', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
        ]
    )
})

document.post('/', async (req, res) => {
    res.json({})
})

document.patch('/:id', async (req, res) => {
    res.json({})
})

export default document;