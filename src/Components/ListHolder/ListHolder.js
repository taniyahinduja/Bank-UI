import React from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Transactions from "../Transactions/Transactions";
import './ListHolder.css'


function ListHolder() {

    return (
        <div class="mainContainer">
            <div class="transactionList">
            <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="all" title="ALL">

                </Tab>
                <Tab eventKey="hdfc" title="HDFC">

                </Tab>
                <Tab eventKey="icici" title="ICICI">
                </Tab>

                <Tab eventKey="sbi" title="SBI">
                </Tab>
            </Tabs>
         </div>
         <div class="sc">
            <Transactions/>
            <Transactions/>
            <Transactions/>
            <Transactions/>
            <Transactions/>
            <Transactions/>
        </div>
        </div>
    )
}
export default ListHolder;