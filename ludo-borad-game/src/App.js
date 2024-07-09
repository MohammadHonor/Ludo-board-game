
import './App.css';
import MidSection from './componets/MidSection/index.js';
import Box from './componets/ButtonBox/index.js';
import Column from './componets/Collumn/index.js';
import Row from './componets/row/index.js';
function App() {
  return (
    < div class="container">
     
    < Box item={"key"}/> 
      < Row/>  
      < Box item={"key"}/>
      < Column/> 
      < MidSection/>
      < Column/> 
      < Box item={"key"}/>
    < Row/>
    < Box item={"key"}/>
  

    </div>
  );
}

export default App;
