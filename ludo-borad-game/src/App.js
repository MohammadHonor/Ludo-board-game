import "./App.css";
import MidSection from "./componets/MidSection/index.js";
import Box from "./componets/ButtonBox/index.js";
import Column from "./componets/Collumn/index.js";
import Row from "./componets/row/index.js";
function App() {
    return (
        <div class="container">
            <div className="first-row">
            <Box item={"key1"} box={"box1"} />
            <Row />
            <Box item={"key2"} box={"box2"} /> 
            </div>
            <div className="second-row">
            <Column />
            <MidSection />
            <Column />
            </div>
            <div className="third-row">
            <Box item={"key3"} box={"box3"}/>
            <Row />
            <Box item={"key4"} box={"box4"}/>
            </div>
        </div>
    );
}

export default App;
