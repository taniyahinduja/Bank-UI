import './Transactions.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Transactions(props){
    return(
        <div class="transactions">
            <div class="div1">
                {props.bank}
                <br></br>
                XXXXXXX6734

            </div>
            <div class="div2">
            <FontAwesomeIcon icon={props.icon} />
            </div>
            <div class="div3">
                <span style={{color:"black", fontWeight:"800"}}>{props.amount}</span>
                <br></br>
                <span style={{ fontWeight:"800"}}>ABC Store</span>
                <br></br>
                <span>Jun 1, 2021</span>
            </div>
        </div>
    )
}
export default Transactions;