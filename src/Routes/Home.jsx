import React, { useEffect } from 'react'
import Card from '../Components/Card'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/users"

  const fetchData = async () => {
    const resp = await axios(url)
    console.log(resp.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home