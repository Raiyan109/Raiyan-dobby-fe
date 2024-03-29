
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import Search from './Search';
const Navbar = () => {
    const { auth, setAuth } = useContext(AuthContext)
    const navigate = useNavigate()
    const logout = () => {
        // signOut(auth);
        setAuth({
            ...auth,
            user: null,
            token: ''
        })
        localStorage.removeItem('userId')
        localStorage.removeItem('auth')
        navigate('/login')
    };
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn  btn-info btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-info rounded-box w-52">
                            <li><Link to='/show'>Your Images</Link></li>
                            <li><Link to='/upload'>Upload new</Link></li>
                            <li><Link to='/signUp'>Sign up</Link></li>
                            <li><Link to='/login'>Login</Link></li>

                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a href='/upload' className="btn btn-ghost text-xl">Raiyan - Dobby</a>
                </div>
                <div className="navbar-end">
                    <Search />

                    <button>{auth.user ? <button className="inline-flex text-neutral btn btn-accent border-0 py-2 px-6 focus:outline-none hover:bg-primary hover:text-secondary rounded text-lg font-OpenSans" onClick={logout}>Logout</button> : <button className='inline-flex text-neutral btn btn-accent border-0 py-2 mt-2 px-6 focus:outline-none hover:bg-primary hover:text-secondary rounded text-lg font-OpenSans'>
                        <NavLink to='/login'>Login</NavLink>
                    </button>}</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;