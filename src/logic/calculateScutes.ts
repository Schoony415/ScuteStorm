

export type calcScutesRetType = {scutesToAdd:number, buggersToAdd:number};
export type calculateScutesType = (scutesToMathWith:number,  landsETB:number, totalLands:number, modifiers?:{multiplier?:number,addition?:number})=>calcScutesRetType;

export let calculateScutesToAdd:calculateScutesType;

calculateScutesToAdd=(scutesToMathWith, landsETB, totalLands, modifiers)=>{

    let ret:calcScutesRetType = {scutesToAdd: 0, buggersToAdd: 0};

    for(let i = 0; i<landsETB; i++){
        if(totalLands >= 6){
            ret.scutesToAdd+=scutesToMathWith

            if(modifiers?.addition && modifiers.addition>0){
                ret.scutesToAdd+= modifiers.addition
            }        

        } else {
            ret.buggersToAdd+=scutesToMathWith

            if(modifiers?.addition && modifiers.addition>0){
                ret.buggersToAdd+= modifiers.addition
            }        
        }
    }

    if(modifiers?.multiplier && modifiers.multiplier>1){
        ret.scutesToAdd = ret.scutesToAdd * modifiers.multiplier;
        ret.buggersToAdd = ret.buggersToAdd * modifiers.multiplier;
    }

    return(ret)
}
