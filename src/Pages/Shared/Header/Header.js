// import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/wed-image/wed-logo.jpg';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuItems = <>
    <li className='font-semibold'><Link to='/'>Home</Link></li>
    <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
    {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/reviewSection'>ReviewSection</Link></li>
                    <li className='font-semibold'><Link to='/addservice'>AddService</Link></li>
                    <li className='font-semibold'>
                        <button onClick={ handleLogOut } className='btn-ghost'>Sign Out</button>
                    </li>
                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
    } 
                </>
    return (
        <div>
            <div className="navbar bg-black text-white p-16 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box text-black w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className='w-16 h-16 rounded-lg' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            {/* toggle button */}
            <div className="form-control">
        <label className="label cursor-pointer">
            <span className="label-text">Theme</span> 
            <input type="checkbox" className="toggle"/>
        </label>
        </div>

            <div className="dropdown dropdown-end">
                        <Link to='/profile'>
                        <div className="w-10 rounded-full mx-2 hover:tooltip hover:tooltip-open hover:tooltip-bottom" data-tip={user?.displayName || 'User Name'}>
                            <img className="h-10 rounded-full" src={user?.photoURL ? user.photoURL : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt='dp' />
                        </div>
                        </Link>
                        </div>


        </div>
        </div>
    );
};

export default Header;