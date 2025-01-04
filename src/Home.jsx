import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake  } from '@fortawesome/free-solid-svg-icons'; 
import { faRobot  } from '@fortawesome/free-solid-svg-icons'; 
import './Home.css'
const Home = () => {
    
    return ( 

        <div  className='homepage-cont'>

            <div className='inside-cont' >
            <FontAwesomeIcon icon={faRobot} size='2x' color='#74C0FC' className='fa-heart fa-beat' />
             <Link to='/singleplayer'  style={{color:'white'}} id='single-player'>
                 Single Player
            </Link>
            </div>
            <div className='inside-cont'>
            <FontAwesomeIcon icon={faHandshake} size='3x' color='#74C0FC' className='fa-shake'/> 
             <Link to='/twoplayer'  style={{color:'white'}} id='two-player'>
                  Two Player
             </Link>
            </div>

        </div>

     );
}
 
export default Home;