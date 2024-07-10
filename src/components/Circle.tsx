import react, {PropsWithChildren} from 'react';


import './Circle.css'

type CircleProps = {
    onClick?: ()=>void;
    backgroundColor?: string; //'csstype' DataType.Color;
}

export default function Circle({children, onClick, backgroundColor}:PropsWithChildren<CircleProps>){
    return (<span className='Circle' onClick={onClick} style={{backgroundColor}}>{children}</span>)
}

