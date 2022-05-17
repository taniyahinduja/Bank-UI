import "./DataCard.css"
import BankCards from "../BankCards/BankCards";
import Navbar from "../Navbar/Navbar";
import AddButton from "../AddButton/AddButton";
import Spendings from "../Spendings/Spendings";
import ListHolder from "../ListHolder/ListHolder";

function DataCard() {
    return (
        <div class="Card-Container">
            <Navbar />
            <BankCards />
            <hr></hr>
            <Spendings />
            <ListHolder />
            
           
            <AddButton />
        </div>
    )
}
export default DataCard;