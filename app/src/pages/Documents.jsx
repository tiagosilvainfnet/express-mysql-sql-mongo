import { Grid, IconButton, Pagination, Stack, Select,MenuItem, FormControl, InputLabel   } from '@mui/material';
import {
    useNavigate,
    useLocation 
} from 'react-router-dom';
import ListViewer from '../components/ListViewer/ListViewer';
import { Edit, Delete } from '@mui/icons-material';
import useSWR from 'swr'
import { useState } from 'react';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Documents = ({ setCurrentRoute }) => {
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const user = {
        id: 6
    }

    const { data, error, isLoading } = useSWR(`http://localhost:3001/document?user_id=${user.id}&page=${page}&limit=${limit}`, fetcher, { refreshInterval: 5000 })

    const location = useLocation();
    setCurrentRoute(location.pathname);

    const deleteDocument = (id) => {
        alert(`Editando documento ${id}`)
    }

    const columns = [
        { headerName: 'ID', key: '_id', id: true },
        { headerName: 'Título', key: 'title', id: false },
        { headerName: 'Conteúdo', key: 'content', id: false },
        { headerName: 'Data', key: 'createdAt', id: false  },
        { headerName: 'Data', key: 'updatedAt', id: false  },
        { headerName: 'Ações', action: (params) => {
            return <>
                        <IconButton onClick={() => navigate(`/document/${params._id}`) } color="success" aria-label="upload picture" component="label">
                            <Edit />
                        </IconButton>
                        <IconButton onClick={() => deleteDocument(params._id) } color="error" aria-label="upload picture" component="label">
                            <Delete />
                        </IconButton>
                    </>
        }}
    ];

    const props = {
        style: {
            marginTop: '20px'
        },
        columns: columns,
        rows: data !== undefined ? data.rows : [],
        isLoading: isLoading
    }

    const handleChange = (event, value) => {
        setPage(value)
    }

    return <>
                <Grid container spacing={2}>
                    <Grid item xs={0} md={1}></Grid>
                    {[0]._id}
                    <Grid item xs={12} md={10}>
                        <Stack sx={{
                            maxHeight: 'calc(100vh - 188.5px    )'
                        }}>
                        { !error && data !== undefined ? <ListViewer {...props} /> : error ?  "Um erro ocorreu" : "Nenhum dado encotrado"  }
                        </Stack>
                    </Grid>
                    <Grid item xs={0} md={1}></Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={0} md={1}></Grid>
                    <Grid item xs={12} md={7} style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Stack spacing={2} alignItems="left">
                            <Pagination count={data?.count} color="primary" onChange={handleChange} showFirstButton showLastButton/>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={3} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'right'
                    }}>
                        <Stack spacing={2} alignItems="right">
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="limit-page-label">Limite</InputLabel>
                                    <Select
                                        labelId="limit-page-label"
                                        id="limit-page"
                                        value={limit}
                                        onChange={(event) => {
                                            setLimit(event.target.value)
                                        }}
                                        label="Limit"
                                    >
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={15}>15</MenuItem>
                                    <MenuItem value={20}>20</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Grid>
                    <Grid item xs={0} md={1}></Grid>
                </Grid>
            </>
}

export default Documents;