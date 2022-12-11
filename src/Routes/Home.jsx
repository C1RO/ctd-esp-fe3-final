import React, { useState, useEffect } from 'react';
import Card from '../Components/Card'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [gridData, setGridData] = useState(null);





  if (window.localStorage.getItem('Favs') === null) {
    window.localStorage.setItem('Favs', [0]);
  }

  const getData = async () => {
    const Data = await axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setGridData(res.data)


      })
      .catch(err => console.log(err))

  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <main className="" >
                        {<h1 style={{color: "#1976d2", fontFamily:"fantasy" , marginTop:"2.2%" , marginBottom:"2%"}}>Home</h1>}


      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}

        {
          gridData ? (
            gridData.map(dentist => (
              <Card props={dentist} key={dentist.id}></Card>
            ))

          ) : (
            <CircularProgress />
          )





        }


      </div>
    </main>
  )
}

export default Home