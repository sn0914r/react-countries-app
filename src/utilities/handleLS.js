const update_ls=(key, value)=>{
    if (localStorage.getItem(key)){
        const prevData = JSON.parse(localStorage.getItem(key)); 
        return localStorage.setItem(key, JSON.stringify([...prevData, value]));
    }else{
        localStorage.setItem(key, JSON.stringify([value]));
        return value;
    }
}

const get_ls=(key)=>JSON.parse(localStorage.getItem(key)) || [];

const delete_ls=key=>localStorage.removeItem(key);

export { update_ls, get_ls, delete_ls };