import React from "react";

const AppleDate=(props)=>{
    const month=props.date.toLocaleString('en-us',{month:'long'});
    const day=props.date.toLocaleString('en-us',{day:'2-digit'});
    const year=props.date.getFullYear();

    return(
        <div>
{month}/{day}/{year}.

        </div>
    )
}
export default AppleDate;