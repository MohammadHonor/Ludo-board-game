import "./App.css";
import MidSection from "./componets/MidSection/index.js";
import Box from "./componets/ButtonBox/index.js";
import Column from "./componets/Collumn/index.js";
import Row from "./componets/row/index.js";
import { DiceBox } from "./componets/dice/diceBox.jsx";
import { createContext } from "react";
function App() {
    const keyContext = createContext();
    return (
      <keyContext.Provider value={""}>
            
        <div className="container">
            <div className="dice-box">
            <DiceBox />
            <DiceBox/>
            </div>
            <div className="first-row">
            <Box item={"key1"} box={"box1"} image={"blue-button"}/>
            <Row mid={"red-color-bg"}/>
            <Box item={"key2"} box={"box2"} image={"red-button"}/> 
            </div>
            <div className="second-row">
            <Column container={"sml-container"} mid={"blue-color-bg"}/>
            <MidSection />
            <Column container={"sml-container"} mid={"green-color-bg"}/>
            </div>
            <div className="third-row">
            <Box item={"key3"} box={"box3"} image={"yellow-button"}/>
            <Row mid={"yellow-color-bg"} />
            <Box item={"key4"} box={"box4"} image={"green-button"}/>
          </div>
          <div className="dice-box">
            <DiceBox />
            <DiceBox/>
            </div>
        </div>
        </keyContext.Provider>
        
    );
}

export default App;
