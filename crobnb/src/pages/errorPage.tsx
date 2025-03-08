import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Oops! Something went wrong.</h1>
            <p>We can't find the page you're looking for.</p>
            <button onClick={handleGoBack} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Go Back
            </button>
        </div>
    );
};

export default ErrorPage;