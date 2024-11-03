import React from "react";
import Card from "./Card";
function Tour({data,Btnhandler}){
    //const Data=props.data
    


return(
        <div className="container">
            <h1 className="heading01">plan  with love</h1>
            <div className="cards">
                {
                data.map((Tour)=>{
                    return  <Card key={Tour.id}{...Tour} Btnhandler={Btnhandler}/>

        

                })
            }
            </div>
        </div>
    )
}

export default Tour;