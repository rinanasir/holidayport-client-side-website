import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2 className="text-warning fw-bold my-5">Please Login</h2>
            <Button onClick={signInUsingGoogle} variant="warning" className="fw-bold">Login using google</Button>
        </div>
    );
};

export default Login;