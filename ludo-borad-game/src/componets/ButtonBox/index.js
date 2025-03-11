import './style.css';
import { ImLocation2 } from "react-icons/im";
import { BoardContext } from '../../Context.js/ludoBoardContext';
import { useContext, useEffect } from 'react';

function Box(props) {
  const { boardState, moveKey,boardPath} = useContext(BoardContext);
   console.log(boardState)
  return (
    <div className={props.box} >
      {[...Array(4)].map((_, index) => {
        // const position = boardState[props.image][index] *20;
        return (
        <div key={index} className={props.item} 
        >
          <ImLocation2
            className={props.image}
            style={{
              position: "absolute",
              top: `${boardPath[boardState[props.image][index].position]?.row * 50}px`,
              left: `${boardPath[boardState[props.image][index].position]?.col * 50}px`,
              transition: "all 0.3s ease-in-out",
            }}
            onClick={() => moveKey(props.image,index,2)}
          />
        </div>
      )})}
    </div>
  );
}

export default Box;
