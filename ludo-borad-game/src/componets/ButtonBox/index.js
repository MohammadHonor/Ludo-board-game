import './style.css';
import { ImLocation2 } from "react-icons/im";
import { BoardContext } from '../../Context.js/ludoBoardContext';
import { useContext, useEffect } from 'react';

function Box(props) {
  const { boardState, setBoardState } = useContext(BoardContext);

  const moveKey = (index) => {
    console.log("before change ", boardState, index, props.image);

    if (props.image === "red-button" && index === 1) {
      setBoardState((prevState) => {
        const updatedState = {
          ...prevState,
          red_button: {
            ...prevState.red_button,
            first_icon: {
              ...prevState.red_button.first_icon,
              x_coordinate: prevState.red_button.first_icon.x_coordinate + 20
            }
          }
        };
        return updatedState;
      });
    }
  };
  return (
    <div className={props.box}>
      {[...Array(4)].map((_, index) => (
        <div key={index} className={props.item}>
          <ImLocation2
            className={props.image}
            onClick={() => moveKey(index + 1)}
          />
        </div>
      ))}
    </div>
  );
}

export default Box;
