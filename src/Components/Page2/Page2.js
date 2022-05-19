import './Page2.css'
import NameCards from '../NameCards/NameCards';
import Spendings from '../Spendings/Spendings';
import Navbar from '../Navbar/Navbar';
import pic from './Chart.png'


function Page2(props) {

    return (
        <div class="Card-Container">
            <div>
                <Navbar page={props.page} setPage={props.setPage} />
                <NameCards name="HDFC" account="XXXXXXX6734" amount="₹77,630" style={{ backgroundColor: "#54b8cc" }} />
                <hr></hr>
                <Spendings />
                <hr></hr>

                <h6>Spending for last 7 days of April</h6>
                <span>
                    April 1-7th
                </span>
            </div>
            <img src={pic}></img>
        </div>
    )
}
export default Page2;