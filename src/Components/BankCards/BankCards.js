
import "./BankCards.css"
import NameCards from "../NameCards/NameCards";
function BankCards(props) {


    return (
        <div class="card" >
            <div class="container" >
                <div class="wrapper">
                    <NameCards name="HDFC" account="XXXXXXX6734" amount="₹77,630" style={{ backgroundColor: "#54b8cc" }} setPage={props.setPage} page={props.page} />
                    <NameCards name="ICICI" account="XXXXXXX6734" amount="₹7000" style={{ backgroundColor: "beige" }} />
                    <NameCards name="SBI" account="XXXXXXX6734" amount="₹21,500" style={{ backgroundColor: "blanchedalmond" }} />
                </div>
            </div>
        </div>
    )
}
export default BankCards;