import { useEffect, useState } from 'react';
import './style.css';

function Row(props){

  //   const [redColor,setRedColor] = useState();
  // const [yellowColor, setYellowColor] = useState();
  
        
    return(
      <div id="clm">
        
        {
          [...Array(18)].map((_,index) => {
            const isRed = props.mid === 'red-color-bg' &&
              ![6, 8, 9, 11, 12, 14, 15].includes(index) && index > 3 && index < 17;
            const isYellow = props.mid === 'yellow-color-bg' && [1, 4, 7, 13, 12,10].includes(index);
            return (
              <div key={index} className="sml-container" id={isRed ? 'red-color-bg' : isYellow ? 'yellow-color-bg' :''} >
              </div>
            )
          })
        }
                {/* <div className="sml-container" >1</div>
                <div className="sml-container" id={redColor}>2</div>
                <div className="sml-container" >3</div>
           
                <div className="sml-container" >4</div>
                <div className="sml-container" id={props.mid}>5</div>
                <div className="sml-container" id={yellowColor}>6</div>
            
                <div className="sml-container" >7</div>
                <div className="sml-container" id={props.mid}>8</div>
                <div className="sml-container" >9</div>
           
                <div className="sml-container" >10</div>
                <div className="sml-container" id={props.mid}>11</div>
                <div className="sml-container" >12</div>
            
                <div className="sml-container" id={redColor}>13</div>
                <div className="sml-container" id={props.mid}>14</div>
                <div className="sml-container" >15</div>
            
                <div className="sml-container" >16</div>
                <div className="sml-container" id={yellowColor}>17</div>
                <div className="sml-container" >18</div> */}
           
        </div>
    )
}

export default Row;