import React, { useContext} from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import img from '../../Assets/wed-image/wed-logo.jpg';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { setAuthToken } from '../../api/auth';

const Register = () => {
        const {createUser} = useContext(AuthContext);
        
        useTitle('Register');

        const handleSignUp = event =>{
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const photo = form.photo.value;
            const email = form.email.value;
            const password = form.password.value;
            console.log(name, photo, email, password);
            
            createUser(email, password, name)
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user);
            
            })
            .catch(err => console.error(err));
        }
       
    
    return (
        <div>
            <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-50rem rounded-lg shadow-lg' src={img} alt="" />
                    <p className='text-2xl font-bold text-center'>L O N D O N_E D I T O R I A L<br/>W E D D I N G_P H O T O G R A P H E R</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Put url Here" name='photo' required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;