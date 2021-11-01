import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div>
            <h2 className="text-warning fw-bold my-5">Please Login</h2>
            <Button onClick={handleGoogleLogIn} variant="warning" className="fw-bold">Login using google</Button>
        </div>
    );
};

export default Login;