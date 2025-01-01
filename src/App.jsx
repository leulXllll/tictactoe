import { useEffect, useState } from 'react'
import Box from './Box';
import './App.css'

const Answer = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,5,7],[3,6,9],[4,5,6],[7,8,9]];


function App() {


  const [contents, setContents] =  useState([{number:1,status:false},
    {number:2,status:false},{number:3,status:false},
    {number:4,status:false},{number:5,status:false},
    {number:6,status:false},{number:7,status:false},
    {number:8,status:false},{number:9,status:false}]);
  

    const [game1,setGame1] = useState([]);

    const [game2,setGame2] = useState([]);

  const changeContent=(value)=>{

     setContents(prev=> prev.map(each=>{
         if(each.number==value){
          each.status=true;
          setGame1(prev=>[...prev,value]);
        }
        return each;
      }));
      
    }
    useEffect(()=>{

      Answer.forEach(each=>{

       let checkWinner = game1.includes(each[0]) && game1.includes(each[1]) && game1.includes(each[2]);

        if( checkWinner ){
          alert("you got a winner");

          
        }

     
      });


    },[game1,game2])
    
    const renderBoxes = ()=>{


    return <ul className='boxes'>
             {contents.map((answer)=>
                <li key={answer.number}>
                    <Box value={answer} changeContent={changeContent}/>
                </li>
             )}
           </ul>
  }

  return (
    <>
        {renderBoxes()}
    </>
  )
}

export default App
