import { NavLink } from "react-router-dom";
import './DisplayCard.css';
const DisplayCard=({data})=>{
    return(
        <NavLink to='/country' state={{data}} className="display_card_nav_link" >
            {
                data? (
                    <section className="display_card">
                        {
                            data.name?(
                                <article className="display_card_names">
                                <h1>{data.name.common}</h1>
                                <h2>{data.name.official}</h2>
                            </article>
                            ):<p>Loading....</p>
                        } 
                        <article className="display_card_details">
                            {
                                data.languages && data.capital?(
                                    <>
                                        <p>Capital : {Array.isArray(data.capital)? data.capital.map((e,i)=><span key={i}>{`${e} `}</span>) : data.capital}</p>
                                        <p>Languages : {Object.values(data.languages).map((e,i)=><span key={i}>{`${e}, `}</span>)}</p>
                                    </>
                                ):<p>Loading...</p>
                            }
                        </article>
                    </section>
                ):(
                    <p>Loading.....</p>
                )
            }
        </NavLink>
    )
}
export default DisplayCard;