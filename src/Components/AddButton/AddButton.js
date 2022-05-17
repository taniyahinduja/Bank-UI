import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import './AddButton.css'
function AddButton(){
    return(
        <div class="addButton"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></div>
    )
}
export default AddButton;