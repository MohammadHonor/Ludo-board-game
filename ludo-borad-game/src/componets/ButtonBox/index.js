import './style.css';

function Box(probs){
    return(
        <><div class="squar-box">
            <p class={probs.item}></p>
            <p class={probs.item}></p>
            <p class={probs.item}></p>
            <p class={probs.item}></p>
        </div>
        </>
    )
}
export default Box;