import {useState} from "react";


const Product=(props)=>{
    const [count, setCount] = useState(0);
    function increment(){
        console.log('clicked');
        setCount(count+1);

    }
    function decrement(){
        setCount(count-1);
        }
        function  reset(){
            setCount(0);
            }
    return(
        <div className="increm">
           
           
<div className="heading"><h1>increment&decremet gamer</h1></div>
<div  className="button">
<button onClick={increment}> Increments</button>
<h2>{count}</h2>
<button onClick={decrement}>decrements</button></div>
<button className="reset" onClick={reset}>reset</button>


        </div>
    )
}
export  default Product;