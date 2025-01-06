import './app.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return ( 
        <nav>
            <ul className='nav-ul'>
                <li ><Link className='links' to={'/'}>Home</Link></li>
                <li ><Link className='links' to={'/singleplayer'}>Single Player</Link></li>
                <li ><Link className='links' to={'/twoplayer'}>Two Player</Link></li>
            </ul>
        </nav>
     );
}
 
export default NavBar;