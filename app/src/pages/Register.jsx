import {
    useLocation 
} from 'react-router-dom';

const Register = ({ setCurrentRoute }) => {
    const location = useLocation();
    setCurrentRoute(location.pathname);

    return 'Register'
}

export default Register;