import { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons'; 
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

    const [gameResult, setGameResult] = useState(null);

    const [player1Score,setPlayer1Score] = useState(0);

    const [player2Score,setPlayer2Score] = useState(0);

    const [drawScore,setDrawScore] = useState(0);

  const changeContent=(value)=>{

        if(gameResult!=null) return;

        if(gameChanger && !game1.includes(value) && !game2.includes(value)){

          setContents(prev=> prev.map(each=>{
            if(each.number==value){
              each.status=true;
              setGame1(prev=>[...prev,value]);
            }
            return each;
          }));
          setGameChanger(false);

        }else if(!gameChanger && !game2.includes(value)  && !game1.includes(value)){

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
      
      let winner1 = false;
      let winner2 = false;
      
      for(let each of answer){

       let checkWinner1 = game1.includes(each[0]) && game1.includes(each[1]) && game1.includes(each[2]); 

       let checkWinner2 = game2.includes(each[0]) && game2.includes(each[1]) && game2.includes(each[2]);
       
       
       if(checkWinner1){
         winner1 = true;
         break;
         
        }else if(checkWinner2){
          winner2 = true;
          break;    
        }
        
      }
      let checkDraw1 = new Set(game1);
      let checkDraw2 = new Set(game2);
      let checkDraw = ((checkDraw1.size + checkDraw2.size)==9);

      if(winner1){
        setGameResult("Player 1 Won");
        setPlayer1Score(player1Score+1);
      } else if(winner2){
        setGameResult("Player 2 Won");
        setPlayer2Score(player2Score+1);
      } else if (checkDraw){
        setGameResult("Its A Draw");
        setDrawScore(drawScore+1);
      }
      

    } ,[game1,game2]);

    const restartGame = ()=>{

      setContents([{number:1,status:null},
        {number:2,status:null},{number:3,status:null},
        {number:4,status:null},{number:5,status:null},
        {number:6,status:null},{number:7,status:null},
        {number:8,status:null},{number:9,status:null}]);
       
        setGame1([]);
        setGame2([]);
        setGameResult(null);
        setGameChanger(true);

    }
    
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
     <div className="score">
            <div className="scores">Player 1's Score : {player1Score}</div>
            <div className="scores">Player 2's Score : {player2Score}</div>
            <div className="scores">Draw Score : {drawScore}</div>
        </div>
        <div className="status">
          {gameResult && <h1> {gameResult}</h1>}
        </div>
       <div className="cont">

           {renderBoxes()}
       </div>
        {gameChanger&&<div  className='turn-Tracker' >Player 1's Turn</div>}
        {!gameChanger&&<div className='turn-Tracker' >Player 2's Turn</div>}

        <div onClick={restartGame} className="restarter">
             <FontAwesomeIcon icon={faRefresh} size="2x"></FontAwesomeIcon>
         </div>
    
    </>
  )
     
}
 
export default TwoPlayer;