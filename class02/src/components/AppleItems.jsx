import { useState } from 'react';
import AppleDate from './AppleDate';
const AppleItems=(props)=>{
const [ newtitle,setnewtitle]=useState(props.name);

    function clickhandler(){
        console.log('button is clicked');
        setnewtitle('popcorn');
    }
    return(
        <div className="appleitems">
          
<h1>{newtitle}</h1>
<AppleDate date={props.date} />
<h1>{props.price}</h1>
<button onClick={clickhandler}>click me!</button>

        </div>
    )
}
export default AppleItems;