import React from 'react'
import Circle from './Circle'

import './NumBox.css'

type NumBoxType = {
    value: number;
    onChange?: (value: number) => void;
    readonly?: boolean;

    multiplesOfTen?:boolean;
}

export default function NumBox({value, onChange, readonly, multiplesOfTen}:NumBoxType){
    return (<>
        <input type="number"
        value={value} 
        onChange={(event)=>{
            onChange&&onChange( event.target.valueAsNumber)
        }}
        readOnly={readonly}
        />
        {!readonly&&(<>
            &nbsp;<Circle onClick={()=>onChange&&onChange(value+1)}>&uarr;</Circle>
            &nbsp;<Circle onClick={()=>onChange&&onChange(value-1)}>&darr;</Circle>

        </>)}
        {!readonly&&multiplesOfTen&&(<>
            &nbsp;<Circle onClick={()=>onChange&&onChange(value+10)}>&uarr;10</Circle>
            &nbsp;<Circle onClick={()=>onChange&&onChange(value-10)}>&darr;10</Circle>

        </>)}


    </>)
}