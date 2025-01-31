import { useState ,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons'; 
import Box from "./Box";

const SinglePlayer = ({answer}) => {

    const [contents, setContents] =  useState([{number:1,status:null},
        {number:2,status:null},{number:3,status:null},
        {number:4,status:null},{number:5,status:null},
        {number:6,status:null},{number:7,status:null},
        {number:8,status:null},{number:9,status:null}]);
            
        const [game1,setGame1] = useState([]);
    
        const [computer,setComputer] = useState([]);    
    
        const [gameResult, setGameResult] = useState(null);

        const [computerScore,setComputerScore] = useState(0);

        const [playerScore,setPlayerScore] = useState(0);

        const [drawScore,setDrawScore] = useState(0);
    
        function randomNumber(){
            return Math.floor(Math.random()*9)+1;
        }
    
      const changeContent=(value)=>{
    
            if(gameResult!=null) return;

            let computerValue;

            do{
                
                computerValue = randomNumber();

                if((computer.length+game1.length)==8){
                    computerValue=0;
                    break;
                }
                
               
            }while(computerValue==value || computer.includes(computerValue) || game1.includes(computerValue));
            
            if(!game1.includes(value) && !computer.includes(value) ){
                
                setContents(prev=> prev.map(each=>{
                    if(each.number==value){
                        each.status=true;
                        setGame1(prev=>[...prev,value]);
                    }
                    if(each.number==computerValue){
                        each.status=false;
                        setComputer(prev=>[...prev,computerValue]);
                        
                    }
                    return each;
                }));
                
                
            }
            }
          
        
        useEffect(()=>{
          
          let winner1 = false;
          let winner2 = false;
          
          for(let each of answer){
    
           let checkWinner1 = game1.includes(each[0]) && game1.includes(each[1]) && game1.includes(each[2]); 
    
           let checkWinner2 = computer.includes(each[0]) && computer.includes(each[1]) && computer.includes(each[2]);
           
           
           if(checkWinner1){
             winner1 = true;
             break;
             
            }else if(checkWinner2){
              winner2 = true;
              break;    
            }
            
          }
          let checkDraw1 = new Set(game1);
          let checkDraw2 = new Set(computer);
          let checkDraw = ((checkDraw1.size + checkDraw2.size)==9);
    
          if(winner1){
            setGameResult("You Won");
            setPlayerScore(playerScore + 1);
          } else if(winner2){
            setGameResult("Computer  Won");
            setComputerScore(computerScore + 1);
          } else if (checkDraw){
            setGameResult("Its A Draw");
            setDrawScore(drawScore + 1);
          }
          
    
        } ,[game1,computer]); 
    
        const restartGame = ()=>{
    
          setContents([{number:1,status:null},
            {number:2,status:null},{number:3,status:null},
            {number:4,status:null},{number:5,status:null},
            {number:6,status:null},{number:7,status:null},
            {number:8,status:null},{number:9,status:null}]);
           
            setGame1([]);
            setComputer([]);
            setGameResult(null);
    
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
            <div className="scores">Player Score : {playerScore}</div>
            <div className="scores">Computer Score : {computerScore}</div>
            <div className="scores">Draw Score : {drawScore}</div>
        </div>
        <div className="status">
          {gameResult && <h1> {gameResult}</h1>}

        </div>
           <div className="cont">
    
               {renderBoxes()}
           </div>
           
            <div onClick={restartGame} className="restarter">
                <FontAwesomeIcon icon={faRefresh} size="2x"></FontAwesomeIcon>
            </div>
        
        </>
      )
}
 
export default SinglePlayer;