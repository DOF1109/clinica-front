import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/users"
  const [dentists, setDentists] = useState([])

  const fetchData = async () => {
    const resp = await axios(url)
    // console.log(resp.data)
    return resp.data
  }

  useEffect(() => {
    console.log(fetchData())
  }, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {}
      </div>
    </main>
  )
}

export default Home