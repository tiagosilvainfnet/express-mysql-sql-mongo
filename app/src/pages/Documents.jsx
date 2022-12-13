import {
    useLocation 
} from 'react-router-dom';

const Documents = ({ setCurrentRoute }) => {
    const location = useLocation();
    setCurrentRoute(location.pathname);

    return 'Documents'
}

export default Documents;