import { Grid, IconButton } from '@mui/material';
import {
    useLocation 
} from 'react-router-dom';
import ListViewer from '../components/ListViewer/ListViewer';
import { Edit, Delete } from '@mui/icons-material';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Documents = ({ setCurrentRoute }) => {
    const { data: rows, error, isLoading } = useSWR('http://localhost:3001/document', fetcher, { refreshInterval: 5000 })

    const location = useLocation();
    setCurrentRoute(location.pathname);

    const editDocument = (id) => {
        alert(`Editando documento ${id}`)
    }
    const deleteDocument = (id) => {
        alert(`Deletando documento ${id}`)
    }

    const columns = [
        { headerName: 'ID', key: 'id', id: true },
        { headerName: 'Título', key: 'title', id: false },
        { headerName: 'Conteúdo', key: 'content', id: false },
        { headerName: 'Data', key: 'createdAt', id: false  },
        { headerName: 'Ações', action: (params) => {
            return <>
                        <IconButton onClick={() => editDocument(params.id) } color="success" aria-label="upload picture" component="label">
                            <Edit />
                        </IconButton>
                        <IconButton onClick={() => deleteDocument(params.id) } color="error" aria-label="upload picture" component="label">
                            <Delete />
                        </IconButton>
                    </>
        }}
    ];
    // const rows = [
    //     { id: 1, title: 'Snow', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
    //     { id: 2, title: 'Lannister', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
    //     { id: 3, title: 'Lannister', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
    //     { id: 4, title: 'Stark', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
    //     { id: 5, title: 'Targaryen', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
    //     { id: 6, title: 'Melisandre', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
    //     { id: 7, title: 'Clifford', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
    //     { id: 8, title: 'Frances', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
    //     { id: 9, title: 'Roxie', content: 'Aqui vai um texto que será cortado na décima letra.', createdAt: '2022-12-09T11:34:25.979+00:00' },
    // ];

    const props = {
        style: {
            marginTop: '20px'
        },
        columns: columns,
        rows: rows,
        isLoading: isLoading
    }

    return <Grid container spacing={2}>
                <Grid item xs={0} md={2}></Grid>
                <Grid item xs={12} md={8}>
                    { error ? "Um erro ocorreu" : <ListViewer {...props} /> }
                </Grid>
            </Grid>
}

export default Documents;