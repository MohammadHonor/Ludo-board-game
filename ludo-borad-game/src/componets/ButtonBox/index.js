import './style.css';

function Box(props){
    // console.log(props.box)
    return(
        <><div class={props.box}>
            <div class={props.item}></div>
            <div class={props.item}></div>
            <div class={props.item}></div>
            <div class={props.item}></div>
        </div>
        </>
    )
}
export default Box;