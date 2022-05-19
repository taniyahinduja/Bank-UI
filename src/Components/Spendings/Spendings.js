import './Spendings.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
function Spendings() {
    return (
        <div class="spending">
            <span style={{fontWeight:"bold", fontSize:"13px"}}>Spending/Income</span>
            <br></br>
            <span id="spent">₹14502</span>
            <span id="slash">/</span>
            <span id="total">₹24999</span>
            <br></br>
            <span id="progressBar"><ProgressBar variant="success" now={38} /></span>
        </div>
    )
}
export default Spendings;