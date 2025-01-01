import './Box.css';

const Box = ({value,changeContent}) => {

    return ( 
        <div className='box' onClick={()=>changeContent(value.number)}>
            Box value is {value.number}  Status is {JSON.stringify(value.status)}
            </div>
     );
}
 
export default Box;