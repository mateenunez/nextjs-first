"use client"

import { useRouter } from "next/navigation"
import styles from "@/app/page.module.css"

 function Card({users}) {
    const router = useRouter()
    return(
    <div className={styles.center}>
        <ul>
        {users.map((user) => (
            <li key={user.id} className={styles.li}>
            <div onClick={()=>{router.push(`/users/${user.id-6}`)}} className={styles.userdata}>
            <img src={user.avatar} alt={user.first_name + user.last_name} className={styles.picture}></img>
                <div className={styles.usertext}>
                <h3 >{user.first_name + ' ' +user.last_name}</h3>
                <p>{user.email}</p>
                </div>
            </div>
            </li>))}
        </ul>
    </div>

    )
}

export default Card
