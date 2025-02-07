import './App.css';
import React, { useState, useEffect} from "react";
import fetchData from './utilities/fetchData.js';
import filterData from './utilities/filterData.js';
import DisplayCard from './components/Cards/DisplayCard.jsx';
import ErrLoad from './utilities/ErrLoad.jsx';
import ShowPreviousTasks from './components/PreviousData/PreviousData.jsx';
import Github from './components/github/Github.jsx';

export default function App(){
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  const [dataSet, setDataSet] = useState([]);

  const URL = "https://restcountries.com/v3.1/all";
  useEffect(()=>{
    fetchData(URL, setDataSet, setErrors, setLoading);
    console.log("useEffect-[] is called")
  }, []) 

  const handleChange=e=>setSearch(e.target.value);
  const handleClear=()=>setSearch('');
  const filteredArray = dataSet.length>0?filterData(dataSet, search):[];

  return(
    <main>
      <section className='search_bar_section'>
        <input
          type='search'
          placeholder='search here...'
          onChange={handleChange}
          value={search}
          onInput={handleClear}
        />
      </section>
      <section>

        {
          loading && <ErrLoad msg="LOADING...." color="gray"/>
        }
        {
          !loading && search?.length!==0 && dataSet.length>0 &&(
            filteredArray.map(e=><DisplayCard data={e}/>)
          )
        }
        {
          errors!==false && !loading && <ErrLoad msg={errors} color="red"/>
        }
        {
          search.length===0 && <ShowPreviousTasks data={dataSet} />
        }{
          filteredArray.length===0 && <h2 className='h2_msg' >Not Found</h2>
        }
      </section>
      <Github/>
    </main>
  )
}