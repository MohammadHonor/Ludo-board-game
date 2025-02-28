import './style.css';
// import image from "../../public/red-icon.avif"
import { ImLocation2 } from "react-icons/im";
function Box(props) {
    // console.log("boxxx",props.image)
    const moveKey = ()=>{
        // console.log(props.image)
  }
  // console.log(props)
    return(
        <div className={props.box} >
            {
                [...Array(4)].map((_,index)=>{
                return (
                <div key={index} className={props.item}>
                    <ImLocation2 onClick={moveKey} className={props.image} />
                    {/* <img src='icons8-location.gif' className={props.image } /> */}
                    {/* <a href="https://www.flaticon.com/free-icons/location" title="location icons"
                    onClick={moveKey} className={props.image} */}
                    {/* ></a> */}
                </div>
                )})
            }
            {/* <div class={props.item}>
                <ImLocation2 onClick={moveKey} className={props.image}/>
            </div>
            <div class={props.item}>
                <ImLocation2 onClick={moveKey} className={props.image}/>
            </div>
            <div class={props.item}>
                <ImLocation2 onClick={moveKey} className={props.image}/>
            </div>
            <div class={props.item}>
                <ImLocation2 onClick={moveKey} className={props.image}/>
            </div> */}
        </div>
        
    )
}
export default Box;