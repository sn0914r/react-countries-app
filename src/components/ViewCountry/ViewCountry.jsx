import { useParams, useLocation } from "react-router-dom";
import Card from '../Cards/Cards'
import './ViewCountry.css'
export default function ViewCountry(){
    const {id} = useParams();
    const location = useLocation();
    const data = location.state?.data;
    return(
        <>
            {
                data && (
                    <>
                        {console.log("id", id)}
                        <Card data={data}/>
                    </>
                )
            }
            {
                !data && <p>Error....</p>
            }
        </>
    )
}
