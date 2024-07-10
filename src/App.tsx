import React, {useState} from 'react';
import NumBox from './components/NumBox'
import { calculateScutesToAdd } from './logic/calculateScutes';
import Circle from './components/Circle';

import './App.css';
import TreeIcon from './assets/tree.svg';
import JIcon from './assets/J.svg'

function App() {
  const [initialScutes, setInitialScutes] = useState(1);
  const [extraScutes, setExtraScutes] = useState(0);
  const [buggers, setBuggers] = useState(0)

  const [currentLands, setCurrentLands] = useState(3);
  const [landsHittingTheField, setLandsHittingTheField] = useState(0)

  let initialScutesHandler = (newValue:number)=>{
    if(newValue < 0){return}
    setInitialScutes(newValue)
  }

  let calculateHandler = () => {

    const newTotalLands = currentLands + landsHittingTheField;
    let scutes = initialScutes+extraScutes

    // console.log("lands:"+currentLands+":"+landsHittingTheField+"="+newTotalLands+";")

    let calculatedScutes = calculateScutesToAdd(scutes, landsHittingTheField, newTotalLands)

    setExtraScutes( extraScutes + calculatedScutes.scutesToAdd)
    setBuggers(buggers + calculatedScutes.buggersToAdd)

    setCurrentLands(newTotalLands)
    setLandsHittingTheField(0)
  }

  let nextTurnHandler = () => {
    setInitialScutes(initialScutes+extraScutes);
    setExtraScutes(0)
  }




  let currentLandsHandler = (newValue:number) => {
    if(newValue < 0){return}
    setCurrentLands(newValue)
  }

  let landsHittingTheFieldHandler = (newValue:number) => {
    if(newValue < 0){return}
    setLandsHittingTheField(newValue)
  }


  return (
    <div className="App">
      <div className="Card">

      <h1>Scutes were here <Circle className='LineEnd'><img style={{height:'2rem', width:'2rem'}} src={TreeIcon}/></Circle> </h1>

      <div className='ImageFrame'>
        <img className='CardPicture' src={require('./assets/paulo-ziemer-oV3zTK7vuP0-unsplash.jpg')}/>
      </div>

      <h1>Tool - Coded <img className='LineEnd' style={{height:'2rem', width:'2rem'}} src={JIcon}/></h1>

      <div className="BodyText">
        <p>A quick app to help calculate the Scutes that would be made from dropping land in MTG.</p>
        <p>Landfall — Whenever a land enters the battlefield under your control, create a 1/1 green Insect creature token. If you control six or more lands, create a token that's a copy of Scute Swarm instead.</p>
        
        <hr/>

        <div>current land on field</div>
        <NumBox value={currentLands} onChange={currentLandsHandler}/>
        {/* <div>is land on field 6 or over? disable above box</div> */}
        <div>how many land are being added?</div>
        <NumBox value={landsHittingTheField} onChange={landsHittingTheFieldHandler}/>
        <div>go button</div>
        <input type='button' value='CALCULATE!' onClick={calculateHandler}/>

        <hr/>

        <div>current scutes</div>
        <NumBox value={initialScutes} onChange={initialScutesHandler}/>
        <div>new scutes</div>
        <NumBox value={extraScutes} readonly/>
        <div>1/1 Buggies</div>
        <NumBox value={buggers} readonly/>

        <hr/>

        <div>Roll new scutes into current scutes. This represents "end of turn" or similiar that will combine the states of the cards.</div>
        <input type='button' value='Next Turn' onClick={nextTurnHandler}/>
        {/* <div>todo: find a way to kill some</div> */}
      </div>

      </div>


      <p>Card information can be found at <a href='https://scryfall.com/card/otc/205/scute-swarm'>Scryfall</a>.</p>
      <p>Disclaimer: I own nothing of WoTC or MTG which are big things, please don't take me down.</p>
      <p>Beetle picture is public domain: Photo by <a href="https://unsplash.com/@ziemer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Paulo Ziemer</a> on <a href="https://unsplash.com/photos/close-up-photo-of-green-oil-bettle-oV3zTK7vuP0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>.</p>
    </div>
  );
}

export default App;
