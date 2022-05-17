import React, {useState} from "react";
import "./BankCards.css"
import NameCards from "../NameCards/NameCards";
function BankCards() {
    const [page, setPage] = useState(0);
    return (
        <div class="card">
          <div class="container">
            <div class="wrapper">
            
            {/* <div className='main bg2'> <h1>2</h1></div>
            <div className='main bg3' > <h1>3</h1></div> */}
            <NameCards name="HDFC" account="XXXXXXX6734" amount="₹77,630" style={{backgroundColor:"aqua"}} onClick={()=>setPage(1)}/>
            {console.log(page)}
            <NameCards name="ICICI" account="XXXXXXX6734" amount="₹7000" style={{backgroundColor:"beige"}}/>
            <NameCards name="SBI" account="XXXXXXX6734" amount="₹21,500" style={{backgroundColor:"blanchedalmond"}}/>


        </div>
        </div>  
        </div>
    )
}
export default BankCards;