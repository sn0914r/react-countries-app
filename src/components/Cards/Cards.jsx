import { NavLink } from "react-router-dom";
import Flag from "./Flag";
import './Cards.css';
import { update_ls } from "../../utilities/handleLS";
const Card=({data})=>{
    update_ls("ca-app", data.name.official)
    return(
        <section className="card" >
            <div className="wrapper">
            <NavLink to='/' className="back_btn" >Back</NavLink>
            </div>
            <article>
                <h1>{data.name.common}</h1>
                <h2>Official Name : {data.name.official}</h2>
                <h3>details : </h3>
                <p>1. Capital : {Array.isArray(data.capital)?data.capital.map((e,i)=><span key={i}>{e}</span>):data.capital}</p>
                <p>2. Region : {data.region}</p>
                <p>3. Languages : {Object.values(data.languages).map((e,i)=><span key={i} >{`${e} `}</span>)}</p>
                <p>4. Longitude : {data.latlng[0]}°</p>
                <p>5. Longitude : {data.latlng[1]}°</p>
                <p>6. Population : {data.population}</p>
                <p>7. Continent : {Array.isArray(data.continents) ? data.continents[0]: data.continents}</p>
            </article>
            <Flag url={data.flags.png} name={data.name.common} />
        </section>
    )
}
export default Card;