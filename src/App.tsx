import React, {useState} from 'react';
import NumBox from './NumBox'

import './App.css';

function App() {
  const [initialScutes, setInitialScutes] = useState(1);
  const [extraScutes, setExtraScutes] = useState(0);
  const [buggers, setBuggers] = useState(0)

  const [currentLands, setCurrentLands] = useState(3);

  let adjustInitialScutes = (newValue:number)=>{
    // todo negative check
    setInitialScutes(newValue)
  }

  let calculateScutes = () => {
    if(currentLands >= 6){
      setExtraScutes(initialScutes)
    } else {
      setBuggers(buggers+1)
    }
  }

  let nextTurn = () => {
    setInitialScutes(initialScutes+extraScutes);
    setExtraScutes(0)
  }




  let adjustCurrentLands = (newValue:number) => {
    // todo negative check
    setCurrentLands(newValue)
  }



  return (
    <div className="App">

      <h1>Scutes go here</h1>

      <p>A quick app to help calculate the Scutes that would be made from dropping land in MTG.</p>
      <p>Landfall — Whenever a land enters the battlefield under your control, create a 1/1 green Insect creature token. If you control six or more lands, create a token that's a copy of Scute Swarm instead.</p>
      
      <hr/>
      <div>current land on field</div>
      <NumBox value={currentLands} onChange={adjustCurrentLands}/>
      <div>is land on field 6 or over? disable above box</div>
      <div>how many land are being added?</div>
      <div>go button</div>
      <input type='button' value='CALCULATE!' onClick={calculateScutes}/>
      <hr/>
      <div>current scutes</div>
      <NumBox value={initialScutes} onChange={adjustInitialScutes}/>
      <div>new scutes</div>
      <NumBox value={extraScutes} readonly/>
      <div>how many buggies if under 6 land</div>
      <NumBox value={buggers} readonly/>

      <hr/>
      <div>roll to next turn</div>
      <input type='button' value='Next Turn' onClick={nextTurn}/>
      <div>todo: find a way to kill some</div>



      <hr/>
      <p>Disclaimer: I own nothing of WOTC or MTG witch are big things, please don't take me down.</p>
    </div>
  );
}

export default App;