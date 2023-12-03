import React from 'react'
import Link from 'next/link'
import styles from '../page.module.css'



const Navbar = () => {
    return (
     <div className={styles.nav}>
       <Link className={styles.navbar} href="/">Navegacion</Link>
       <ul className={styles.about}>
        <Link href="/about">About</Link>
       </ul>
     </div>
    );
  };
  
  export default Navbar;