

export type calcScutesRetType = {scutesToAdd:number, buggersToAdd:number};
export type calculateScutesType = (scutesToMathWith:number, landsETB:number, totalLands:number)=>calcScutesRetType;

export let calculateScutesToAdd:calculateScutesType;

calculateScutesToAdd=(scutesToMathWith, landsETB, totalLands)=>{

    let ret:calcScutesRetType = {scutesToAdd: 0, buggersToAdd: 0};

    for(let i = 0; i<landsETB; i++){
        if(totalLands >= 6){
            ret.scutesToAdd+=scutesToMathWith
        } else {
            ret.buggersToAdd+=scutesToMathWith
        }
    }

    return(ret)
}
