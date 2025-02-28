import { useEffect, useState } from 'react';
import './style.css';
import { ImLocation2 } from "react-icons/im";

function Column(props){

    return(
        <div id="clm1">

            {
                [...Array(18)].map((_,index)=>{
                  const isBlue = props.mid === 'blue-color-bg' &&
                    [1, 7, 8, 9, 10, 11].includes(index);
                  const isGreen = props.mid === 'green-color-bg' &&
                    [6, 7, 8, 9, 10, 16].includes(index);
                    return (
                      <div key={index} className='sml-container' id={
                        isBlue ?"blue-color-bg" :isGreen ? 'green-color-bg':''
                      }>
                        {/* <ImLocation2/> */}{index}
                      </div>
                    )
                })
            }
                {/* <div className={props.container}>1</div> */}
                {/* <div className={props.container} id={greenColor}>2</div>
                <div className={props.container}>3</div>
                <div className={props.container}>4</div>
                <div className={props.container}>5</div>
                <div className={props.container}>6</div>
            
                <div className={props.container} id={blueColor}>7</div>
                <div className={props.container} id={props.mid}>8</div>
                <div className={props.container} id={props.mid}>9</div>

                <div className={props.container} id={props.mid}>10</div>
                <div className={props.container} id={props.mid}>11</div>
                <div className={props.container} id={greenColor}>12</div>

                <div className={props.container}>13</div>
                <div className={props.container}>14</div>
                <div className={props.container}>15</div>

                <div className={props.container}>16</div>
                <div className={props.container} id={blueColor}>17</div>
                <div className={props.container}>18</div> */}

        </div>
    )
}

export default Column;