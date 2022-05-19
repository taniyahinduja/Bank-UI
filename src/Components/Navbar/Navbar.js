import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons'
function Navbar(props){
    function handleClick(e){
        props.setPage(false)
    }
    return(
        <div class="nav">
                <button class="but" onClick={handleClick}>
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                </button>
                <button class="but">
                    <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
                </button>
        </div>
    )
}
export default Navbar;