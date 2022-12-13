import {
    useLocation 
} from 'react-router-dom';

const Login = ({ setCurrentRoute }) => {
    const location = useLocation();
    setCurrentRoute(location.pathname);

    return 'Login'
}

export default Login;