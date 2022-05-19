import React from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Transactions from "../Transactions/Transactions";
import './ListHolder.css'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

function ListHolder() {

    return (
        <div class="mainContainer">
            <div class="transactionList">
                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="all" title="ALL">
                        <div class="sc">
                            <Transactions icon={faArrowRightFromBracket} bank="SBI" amount="10,360" />
                            <Transactions icon={faArrowRightToBracket} bank="HDFC" amount="8000" />
                            <Transactions icon={faArrowRightFromBracket} bank="ICICI" amount="462" />
                            <Transactions icon={faArrowRightFromBracket} bank="SBI" amount="7962" />
                            <Transactions icon={faArrowRightToBracket} bank="HDFC" amount="1,00,000" />
                            <Transactions icon={faArrowRightToBracket} bank="ICICI" amount="45" />
                        </div>
                    </Tab>


                    <Tab eventKey="hdfc" title="HDFC">
                        <div class="sc">
                            <Transactions icon={faArrowRightToBracket} bank="HDFC" amount="8000" />
                            <Transactions icon={faArrowRightToBracket} bank="HDFC" amount="1,00,000" />
                        </div>
                    </Tab>


                    <Tab eventKey="icici" title="ICICI">
                        <div class="sc">
                            <Transactions icon={faArrowRightFromBracket} bank="ICICI" amount="462" />
                            <Transactions icon={faArrowRightToBracket} bank="ICICI" amount="45" />
                        </div>
                    </Tab>
                    <Tab eventKey="sbi" title="SBI">
                        <div class="sc">
                            <Transactions icon={faArrowRightFromBracket} bank="SBI" amount="10,360" />
                            <Transactions icon={faArrowRightFromBracket} bank="SBI" amount="7962" />
                        </div>
                    </Tab>
                </Tabs>
            </div>

        </div>
    )
}
export default ListHolder;