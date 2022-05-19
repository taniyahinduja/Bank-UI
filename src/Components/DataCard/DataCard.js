import "./DataCard.css"
import BankCards from "../BankCards/BankCards";
import Navbar from "../Navbar/Navbar";
import AddButton from "../AddButton/AddButton";
import Spendings from "../Spendings/Spendings";
import ListHolder from "../ListHolder/ListHolder";

function DataCard(props) {
    return (
        <div class="Card-Container">
            <Navbar />
            <BankCards setPage={props.setPage} page={props.page}/>
            <hr></hr>
            <Spendings />
            <ListHolder />
            
           
            <AddButton />
        </div>
    )
}
export default DataCard;