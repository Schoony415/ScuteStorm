import React from 'react'

import './NumBox.css'
export default function NumBox({value, onChange, readonly}:{value:number, onChange?:(value:number)=>void, readonly?:boolean}){
    return (<>
        <input type="number"
        value={value} 
        onChange={(event)=>{
            onChange&&onChange( event.target.valueAsNumber)
        }}
        readOnly={readonly}
        />
        {!readonly&&(<>
            <span onClick={()=>onChange&&onChange(value+1)}>&uarr;</span>
            <span onClick={()=>onChange&&onChange(value-1)}>&darr;</span>

            </>
        )}
    </>)
}