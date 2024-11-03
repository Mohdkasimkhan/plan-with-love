import React from "react";
import AppleItems from './AppleItems';
const Apple=(props)=>{
    return(
        <div>
        <AppleItems name={props.arr[0].name} price={props.arr[0].price} date={props.arr[0].date}/>
        <AppleItems name={props.arr[1].name} price={props.arr[1].price} date={props.arr[1].date}/>
        <AppleItems name={props.arr[2].name} price={props.arr[2].price} date={props.arr[2].date}/>
        <AppleItems name={props.arr[3].name} price={props.arr[3].price} date={props.arr[3].date}/>
        </div>
    )
}
export default Apple;