const ErrLoad=({msg, color})=>{
    return(
        <div className="err" style={{color : color}} >
            <p>{msg}</p>
        </div>
    )
}
export default ErrLoad;