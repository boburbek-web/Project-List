import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import Users from "./components/Users";

const App = () => {

  const URL = "https://reqres.in/api/users"


  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);





  const FetchData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((result) => setData(result), setTimeout(() => { setLoading(true) }, 3000))
      .catch((err) => console.log(err))

  }
  const showCard=()=>{
    setModal(true)
  }


  useEffect(() => {
    FetchData();
    showCard();
  }, [])


  console.log(data);
  console.log(loading);

  const [modal, setModal] = useState(false);



  return (
    <>
      <Navbar/>

      <div className="card">
        {loading ? <Users data={data} /> : <Spinner />}

      </div>

      <Footer/>
    </>

  );

};

export default App;