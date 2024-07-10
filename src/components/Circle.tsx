import react, {PropsWithChildren} from 'react';


import './Circle.css'

type CircleProps = {
    className?: string;
    onClick?: ()=>void;
    backgroundColor?: string; //'csstype' DataType.Color;
}

export default function Circle({children, className, onClick, backgroundColor}:PropsWithChildren<CircleProps>){
    return (<span className={((className?(className+" "):"")+'Circle')} onClick={onClick} style={{backgroundColor}}>{children}</span>)
}

