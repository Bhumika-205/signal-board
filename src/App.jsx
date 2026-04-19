import { useState, useEffect } from 'react';
import './App.css'
import Card from './card'
import Navbar from './navbar';
import Sort from './sort';

function App() {

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [source, setSource] = useState("all");
  const [sortType, setSortType] = useState("time");

  // fake loading state
  const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);

    if (loading) return <h3 style={{ padding: "20px" }}>Loading...</h3>;

  // click signal board logo and it reset filter
  const resetFilters = () => {
    setSearch("");
    setStatus("all");
    setSource("all");
    setSortType("time");
  };



  return (
    <>
      <Navbar setSearch = {setSearch} 
              setStatus={setStatus} 
              setSource={setSource}
              resetFilters={resetFilters}/>

      <Sort setSortType={setSortType}/>

      <Card search={search}
            status={status}
            source={source}
            sortType={sortType}/>
            
    </>
  );
}



export default App;
