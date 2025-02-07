import { get_ls } from "../../utilities/handleLS";
import './PreviousData.css';
import DisplayCard from "../Cards/DisplayCard";
function ShowPreviousTasks({data}){
    const arr = get_ls("ca-app");
    console.log('previous tasks : ', arr);

    const requiredArr = data?.filter(e=>arr.includes(e.name.official))
    console.log("Required Array : ", requiredArr)
    return(
        <section className="previousTasks">
            <div>
                <h3>Previously Searched for : </h3>
            </div>
            {
                requiredArr.length>0? requiredArr.map((e, i)=><DisplayCard data={e}/>) : <h2 className='h2_msg' >No History available</h2>
            }
        </section>
    )
}
export default ShowPreviousTasks;