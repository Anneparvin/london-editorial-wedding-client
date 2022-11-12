import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext (AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn =() =>{
        googleSignIn()
        .then (result => {
            const user = result.user;

            const currentUser = {
                email: user.email
            }
            // get jwt token
        fetch('http://localhost:5000/jwt', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('londonWeddb', data.token);
                navigate(from, { replace: true });
            });
        })
        .catch (err => console.error(err))
    }
    return (
        <div>
            <p className='text-center text-orange'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-ghost'>
                        Google
                </button>
            </p>
        </div>
    );
};

export default SocialLogin;