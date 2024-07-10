

export type calcScutesRetType = {scutesToAdd:number, buggersToAdd:number};
export type calculateScutesType = (scutesToMathWith:number,  landsETB:number, totalLands:number, multiply?:number)=>calcScutesRetType;

export let calculateScutesToAdd:calculateScutesType;

calculateScutesToAdd=(scutesToMathWith, landsETB, totalLands, multiply)=>{

    let ret:calcScutesRetType = {scutesToAdd: 0, buggersToAdd: 0};

    for(let i = 0; i<landsETB; i++){
        if(totalLands >= 6){
            ret.scutesToAdd+=scutesToMathWith
        } else {
            ret.buggersToAdd+=scutesToMathWith 
        }
    }

    if(multiply&& multiply>1){
        ret.scutesToAdd = ret.scutesToAdd * multiply;
        ret.buggersToAdd = ret.buggersToAdd * multiply;
    }

    return(ret)
}
