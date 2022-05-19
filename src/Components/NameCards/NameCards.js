import './NameCards.css'

function NameCards(props){
    
    
    function handleClick(e){
        props.setPage(true)
    }
        return(
        
            <div class="cards" style={props.style} onClick={handleClick}>
            <div class="content">
                <h5>{props.name}</h5>
                <h5>{props.account}</h5>
                <h5>{props.amount}</h5>
            </div>
            </div>
        )
    }
export default NameCards;