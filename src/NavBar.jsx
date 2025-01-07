import './app.css'
import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
    return ( 
        <nav>
            <ul className='nav-ul'>
                <li ><NavLink className='links' to={'/'}>Home</NavLink></li>
                <li ><NavLink className='links' to={'/singleplayer'}>Single Player</NavLink></li>
                <li ><NavLink className='links' to={'/twoplayer'}>Two Player</NavLink></li>
            </ul>
        </nav>
     );
}
 
export default NavBar;