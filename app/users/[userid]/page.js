import React from 'react'
import styles from '../../page.module.css'



async function getUser(id){
  const userid = Number(id)+6
  const res = await fetch(`https://reqres.in/api/users/${userid}`)
  const user = await res.json()
return user.data
}

async function UserPage({params}) {
  
  const user = await getUser(params.userid)
  return (
    <div>
        <h1 className={styles.main}> Pagina de usuario {params.userid} </h1>
        <div className={styles.center2}>
        <img src={user.avatar} alt={user.first_name + user.last_name} className={styles.picture}></img>
        <div className={styles.singleuser}>
        <h3 className={styles.name}>{user.first_name + ' ' +user.last_name}</h3>
          <h4 className={styles.secondname}> Usuario generado por API </h4>
          <p className={styles.description}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dolore autem, dolores quisquam nobis aliquid quidem? Quisquam ea accusamus voluptatem voluptas, nobis labore, quos animi ipsa repellat dolores eos nulla eveniet blanditiis! Quia quis, sapiente, veritatis nobis esse minus quam possimus porro sequi iure distinctio necessitatibus debitis optio consequatur architecto voluptas magni maxime earum consequuntur molestias doloremque! Qui necessitatibus eveniet tempore magni nisi fugiat sit commodi facere voluptatem facilis voluptates officiis maiores ab neque, voluptas velit quos ex architecto! Iusto perspiciatis nam impedit, enim voluptas asperiores repudiandae animi veritatis ex eligendi eos? Illo explicabo nemo libero nisi expedita beatae facere!
          </p>
        </div>
          
        </div>
    </div>
    
  )
}

export default UserPage