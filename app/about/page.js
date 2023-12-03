import React from 'react'
import styles from '../page.module.css'

function AboutPage() {
  return (
    <div>
     <h1 className={styles.main}>Quien soy</h1> 
     <div className={styles.center2}>
      <h3> Soy un estudiante de ingenieria en sistemas de informacion, al momento de hacer esta simple pagina de NextJs tengo 20 años y busco con esto el aprendizaje de frameworks para front-end.</h3>

      <p className={styles.description}> Esta pagina la desarrolle con la ayuda del video de "FaztWeb", los objetivos eran listar datos de una pagina en formato JSON y comprender el uso de componentes y paginas en NextJS. 
        Hay muchas cosas que mejorar, sobretodo de diseño !!
      </p>
    </div>   
    </div>
  )
}
