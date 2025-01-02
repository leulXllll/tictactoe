import { useState,useEffect } from "react";
import Box from "./Box";
const TwoPlayer = ({answer}) => {
        
  const [contents, setContents] =  useState([{number:1,status:null},
    {number:2,status:null},{number:3,status:null},
    {number:4,status:null},{number:5,status:null},
    {number:6,status:null},{number:7,status:null},
    {number:8,status:null},{number:9,status:null}]);
    
    const [gameChanger,setGameChanger] = useState(true);

    const [game1,setGame1] = useState([]);

    const [game2,setGame2] = useState([]);

  const changeContent=(value)=>{

        if(gameChanger){

          setContents(prev=> prev.map(each=>{
            if(each.number==value){
              each.status=true;
              setGame1(prev=>[...prev,value]);
            }
            return each;
          }));
          setGameChanger(false);
        }else{
          setContents(prev=> prev.map(each=>{
            if(each.number==value){
              each.status=false;
              setGame2(prev=>[...prev,value]);
            }
            return each;
          }));
          setGameChanger(true);

        }
      
    }
    useEffect(()=>{

      answer.forEach(each=>{

       let checkWinner1 = game1.includes(each[0]) && game1.includes(each[1]) && game1.includes(each[2]);
       
       let checkWinner2 = game2.includes(each[0]) && game2.includes(each[1]) && game2.includes(each[2]);

        if(checkWinner1){
          alert("Player One is winner");
          setContents([{number:1,status:null},
            {number:2,status:null},{number:3,status:null},
            {number:4,status:null},{number:5,status:null},
            {number:6,status:null},{number:7,status:null},
            {number:8,status:null},{number:9,status:null}]);
           
            setGame1([]);
            setGame2([]);

         
        }else if(checkWinner2){
          alert('player 2 is winner');
          setContents([{number:1,status:null},
            {number:2,status:null},{number:3,status:null},
            {number:4,status:null},{number:5,status:null},
            {number:6,status:null},{number:7,status:null},
            {number:8,status:null},{number:9,status:null}]);
           
            setGame1([]);
            setGame2([]);
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
       <div className="cont">

        {renderBoxes()}
       </div>
        {gameChanger&&<div  className='turn-Tracker' >Player 1's Turn</div>}
        {!gameChanger&&<div className='turn-Tracker' >Player 2's Turn</div>}
    
    </>
  )
     
}
 
export default TwoPlayer;