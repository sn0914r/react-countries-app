const fetchData= async (url, setState, setErrors, setLoading)=>{
    setLoading(true)
    try{
        const res = await fetch(url);
        if (!res.ok)
            throw new Error ('Failed to fetch Data')
        const data = await res.json();
        console.log("country 1", data[0]);
        setState(data);
        setLoading(false);
    }catch(err){
        console.log("ERROR : ", err.message);
        setErrors(err.message)
        setLoading(false)
    }
}

export default fetchData;