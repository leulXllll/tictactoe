import { useState } from 'react'
import Box from './Box';
import './App.css'

const Answer = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,5,7],[3,6,9],[4,5,6],[7,8,9]];


function App() {


  const [contents, setContents] = useState([1,2,3,4,5,6,7,8,9])
  


  const renderBoxes = ()=>{

    return <ul className='boxes'>
             {contents.map((contents)=>
                <li key={contents}>
                    <Box value={contents}/>
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
