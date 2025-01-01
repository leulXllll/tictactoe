import './Box.css';

const Box = ({value,changeContent}) => {

    return ( 
        <div className='box' onClick={()=>changeContent(value)}>Box value is {value}</div>
     );
}
 
export default Box;