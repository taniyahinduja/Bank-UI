import './NameCards.css'
function NameCards(props){
    return(
        <div class="cards" style={props.style}>
        <div class="content">
            <h5>{props.name}</h5>
            <h5>{props.account}</h5>
            <h5>{props.amount}</h5>
        </div>
        </div>
    )
}
export default NameCards;