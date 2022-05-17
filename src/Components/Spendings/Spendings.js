import './Spendings.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
function Spendings() {
    return (
        <div class="spending">
            Spending/Income
            <br></br>
            <span id="spent">₹14502</span>
            <span id="slash">/</span>
            <span id="total">₹24999</span>
            <span id="progressBar"><ProgressBar variant="success" now={58} /></span>
        </div>
    )
}
export default Spendings;