import React from "react";
const Card=({id,image,info,name,price,Btnhandler})=>{
    //const id=props.id
    return(
        <div className="card"> 
          
            <img src={image} className="image"/>
            <div className="tour-info">
                <div className="tour-details">
           
            <h1 className="tour-name">{name}</h1>
            <h2 className="tour-price"> ${price}</h2>
            </div>
            <h3 className="description">{info}</h3>

            </div>
<button className="btn-red" onClick={()=> Btnhandler(id)}>not intrested</button>
        </div>
    )
}
export default Card;