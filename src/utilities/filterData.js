const filterData = (arr, search) => {
    const searchItem = search?.trim().toLowerCase();
    return arr.filter(i =>i.name?.common?.toLowerCase().includes(searchItem) ||
    (Array.isArray(i.capital) && i.capital.some(cap => cap.toLowerCase().includes(searchItem))) ||
    i.name?.official?.toLowerCase().includes(searchItem) 
    );
};
export default filterData;
