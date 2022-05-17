import './Page2.css'
import NameCards from '../NameCards/NameCards';
import Spendings from '../Spendings/Spendings';
import Navbar from '../Navbar/Navbar';


function Page2() {
    return (
        <div class="Card-Container">
            <Navbar />
            <NameCards name="HDFC" account="XXXXXXX6734" amount="₹77,630" style={{ backgroundColor: "aqua" }} />
            <hr></hr>
            <Spendings />
            <hr></hr>

            <h6>Spending for last 7 days of April</h6>
            <span>
                April 1-7th
            </span>

        </div>
    )
}
export default Page2;