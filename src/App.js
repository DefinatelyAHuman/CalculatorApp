import { useState } from 'react';
import './App.css';
import Display from './Components/display';
import Keys from './Components/keys';
function App() {

  let [disp, setDisp] = useState("");
  let [res, setRes] = useState("");
  let handleKeyClick=(event)=>{
   
    if (event.target.innerText==="="){
      try {
        const result = eval(disp);
        setRes(result.toString()); 

      }catch (error) {
        alert(error);
      }
    }else if (event.target.innerText==="C") {
      setDisp("");
      setRes("");
    } else {
      let newSetDisp=(disp + event.target.innerText);
      setDisp(newSetDisp);
    }
    
}
  return (
    <>
    <div className='main'>
    <Display displayToBeShown={disp} resultToBeShown={res}/>
    <hr/>
    <Keys clickedbtn={handleKeyClick}/>

    <div><center>CASIO</center></div>
    </div>
    </>
  );
}

export default App;
