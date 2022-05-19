import DataCard from '../DataCard/DataCard'
import React, {useState} from "react";
import Page2 from '../Page2/Page2';
import './Home.css'
function Home() {
    const [page, setPage] = useState(false);
    if(!page){
        return (

            <div class="container">
                <DataCard setPage={setPage} page={page}/>
            </div>
    
        )

    }
    else{
        return (

            <div class="container">
                <Page2 setPage={setPage} page={page}/>
            </div>
    
        )
    }
   
}
export default Home;