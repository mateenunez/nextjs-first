
import React from 'react'
import styles from './page.module.css'
import Card from './components/users';

/* Fetching de datos */
async function FetchData(){
  const res = await fetch("https://reqres.in/api/users?page=2")
  const data = await res.json();
  return data.data
}


/*Contenido de la pagina */
async function Index() {
  const users = await FetchData()
  return (
    <div>
      <h1 class={styles.main}>Pagina principal</h1>
      <Card users={users}/>
    </div>
  )
}

export default Index