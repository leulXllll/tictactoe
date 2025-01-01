import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes , faCircle } from '@fortawesome/free-solid-svg-icons'; 

import './Box.css';

const Box = ({value,changeContent}) => {

    
    console.log(value.status)
    return ( 
        <div className='box' onClick={()=>changeContent(value.number)}>

           {(value.status==null)?<div>&nbsp;</div>:(value.status==true)?<div>O</div>:<div>X</div>}
                   
          </div>
     );
}
 
export default Box;