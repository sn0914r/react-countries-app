const Flag=({url, name})=>{
    return(
        <figure>
            <img src={url} alt="flag" />
            <figcaption>{name.toUpperCase()}</figcaption>
        </figure>
    )
}
export default Flag;