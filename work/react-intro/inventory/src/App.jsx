import logo from './logo.svg';
import './app.css';
import Reorder from './Reorder';


import React, { useState } from 'react';


const App = () => {
    const[num , setNum] = useState(0);
    const onReorder =() => {
        setNum(5);
    };
    
    const incNum = () => {
        setNum(num+1);
    };

    const decNum = () => {
       
            setNum(num-1); 
    };
    return(
        <>
        <div className = 'main_div'>
            <div className = 'center_div'>
                <h2>COUNTER APP</h2>
                <h1>{num}</h1>
                <div className = 'btn_div'>
                    <button onClick ={incNum}>+</button>
                    <button onClick ={decNum} disabled={num===0}>-</button>
                    
                    
                 <span className= 'Reorder'>
                     {
                     num === 0 ? <Reorder onReorder={onReorder}/> : null
                     } 
                     
                 </span>
                 
                 
                
                </div>
            </div>

        </div>
        </>


    );

}
export default App;





