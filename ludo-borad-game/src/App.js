import "./App.css";
import MidSection from "./componets/MidSection/index.js";
import Box from "./componets/ButtonBox/index.js";
import Column from "./componets/Collumn/index.js";
import Row from "./componets/row/index.js";
import { DiceBox } from "./componets/dice/diceBox.jsx";
import { BoardContext } from "./Context.js/ludoBoardContext.js";
import { useState } from "react";
function App() {

  const boardPath = [
    { row: 5, col: 0 }, { row: 5, col: 1 }, { row: 5, col: 2 }, { row: 5, col: 3 }, { row: 5, col: 4 }, 
    { row: 4, col: 4 }, { row: 3, col: 4 }, { row: 2, col: 4 }, { row: 1, col: 4 }, { row: 0, col: 4 }, 
    { row: 0, col: 5 }, { row: 0, col: 6 }, { row: 1, col: 6 }, { row: 2, col: 6 }, { row: 3, col: 6 }, 
    { row: 4, col: 6 }, { row: 5, col: 6 }, { row: 5, col: 7 }, { row: 5, col: 8 }, { row: 5, col: 9 }, 
    { row: 5, col: 10 }, { row: 6, col: 10 }, { row: 7, col: 10 }, { row: 8, col: 10 }, { row: 9, col: 10 }, 
    { row: 10, col: 10 }, { row: 10, col: 9 }, { row: 10, col: 8 }, { row: 10, col: 7 }, { row: 10, col: 6 }, 
    { row: 10, col: 5 }, { row: 9, col: 5 }, { row: 8, col: 5 }, { row: 7, col: 5 }, { row: 6, col: 5 }, 
    { row: 5, col: 5 }, { row: 5, col: 4 } // End of one full loop
  ];
  
  // const [boardState, setBoardState] = useState({
  //   red_button:[0, 0 , 0 , 0],
  //   blue_button:[0, 0 , 0 , 0],
  //   green_button:[0, 0 , 0 , 0],
  //   yellow_button:[0, 0 , 0 , 0],
  // })

  const [boardState, setBoardState] = useState({
    red_button: [{ position: -1 }, { position: -1 }, { position: -1 }, { position: -1 }], // -1 means home
    blue_button: [{ position: -1 }, { position: -1 }, { position: -1 }, { position: -1 }],
    green_button: [{ position: -1 }, { position: -1 }, { position: -1 }, { position: -1 }],
    yellow_button: [{ position: -1 }, { position: -1 }, { position: -1 }, { position: -1 }]
  });
  

  // const moveKey = (color,steps,pos) => {
  //   setBoardState((prev)=>({
  //     ...prev,
  //     [color]:prev[color].map((value,index)=>index === pos ? value + steps : value)
  //   }));
  // }

  const safeZones = [0, 8, 13, 21, 26, 34, 39, 47];

const moveKey = (color, pos, steps) => {

  setBoardState((prev) => {
    let newPos = prev[color][pos].position + steps;
    console.log(newPos)
    if (newPos >= boardPath.length) newPos = boardPath.length - 1;

    // Check if another player is there
    for (const otherColor of Object.keys(prev)) {
      if (otherColor !== color) {
        for (let i = 0; i < 4; i++) {
          if (
            prev[otherColor][i].position === newPos &&
            !safeZones.includes(newPos)
          ) {
            prev[otherColor][i].position = -1; // Send back home
          }
        }
      }
    }

    return {
      ...prev,
      [color]: prev[color].map((token, index) =>
        index === pos ? { position: newPos } : token
      ),
    };
  });
};

  
    return (
      <BoardContext.Provider value={{boardState,moveKey,boardPath}}>  
        <div className="container">
            {/* <div className="dice-box">
            <DiceBox />
            <DiceBox/>
            </div> */}
            <div className="first-row">
            <Box item={"key1"} box={"box1"} image={"blue_button"}/>
            <Row mid={"red-color-bg"}/>
            <Box item={"key2"} box={"box2"} image={"red_button"}/> 
            </div>
            <div className="second-row">
            <Column container={"sml-container"} mid={"blue-color-bg"}/>
            <MidSection />
            <Column container={"sml-container"} mid={"green-color-bg"}/>
            </div>
            <div className="third-row">
            <Box item={"key3"} box={"box3"} image={"yellow_button"}/>
            <Row mid={"yellow-color-bg"} />
            <Box item={"key4"} box={"box4"} image={"green_button"}/>
          </div>
          {/* <div className="dice-box">
            <DiceBox />
            <DiceBox/>
            </div> */}
        </div>
        </BoardContext.Provider>
        
    );
}

export default App;
