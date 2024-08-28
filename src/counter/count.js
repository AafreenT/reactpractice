import { useState } from "react";
import './counter.css';

export function Counter(){
   
    const [count, setCount]= useState(10); 

function increment(){
    setCount((count) => count+1);
}
function decrement(){
    setCount((count) =>count-1);
}

    return(
        <div className="text-center">
            <h1 className="counterHeading">This is First counter App</h1>
            <p className="count-content">{count}</p>
            <button className="btn btn-success"
            onClick={() =>{
                increment();
                increment();
                increment();
                increment();
            }}     
            >
                 Increment </button> 
            <button  className="btn btn-danger ml-4"
            onClick={() =>{
                decrement();
                decrement();
                decrement();
                decrement();
            }}     
            > decrement</button>
        </div>
    )
}
    // const increment =() =>{
    //     const updateCount = count+1;
    //     setCount(updateCount);
    //     console.log("Update Count Is: ", updateCount);
    //     props.onCountChange(updateCount);
    // }

    // decrease the count 

//     const decrement =() =>{
//         const updateCount = count-1;
//         setCount(updateCount);
//         console.log("Update Count: ", updateCount);
//         props.onCountChange(updateCount);
//     }
//     return <div id="counter-component">
//     <p>Counter Component: {props.counterName}</p>
//     Count: {count}
//     <br></br><br></br>
//     <button onClick={increment}>Increment </button>
    
//     <button onClick={decrement}>Decrement </button>
// </div>
    


