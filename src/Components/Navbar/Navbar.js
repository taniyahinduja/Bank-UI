import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons'
function Navbar(){
    return(
        <div class="nav">
                <button class="but">
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                </button>
                <button class="but">
                    <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
                </button>
        </div>
    )
}
export default Navbar;