import {Link} from 'react-router-dom'

const Home = () => {
    
    return ( 
        <div >

            <div>
                <Link to='/singleplayer'  style={{color:'white'}}>Single Player</Link>
            </div>
            <div>
                <Link to='/twoplayer'  style={{color:'white'}}>Two Player</Link>
            </div>

        </div>

     );
}
 
export default Home;