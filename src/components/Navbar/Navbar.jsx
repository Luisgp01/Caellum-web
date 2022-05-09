import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext';
import { logout } from '../../store/AccessTokenStore.js'

const Navbar = () => {
    const { user } = useAuthContext();
    return (
        <div className='Navbar'>
            <NavLink to='/'>Caellum</NavLink>
            <div className='flex'>
                {user ? 
                (
                    <NavLink to='/profile' className='flex navUsers'>
                        <div className='frame-img'>
                        <img src={user.avatar} alt="user" />
                        </div>
                        <p>{user.name}</p> 
                    </NavLink>
                )
                :
                (<div className='flex'>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                </div>)
                }
                {user && <button className='button-out' onClick={()=>logout()}>Logout</button>}
            </div>
        </div>
    )
}

export default Navbar