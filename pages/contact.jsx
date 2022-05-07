import React from 'react'
import styles from "../styles/Home.module.css";
import Image from 'next/image'

const Contact = () => {
  return (
    <main className={styles.main}>
    <div className={styles.contact}>
    
      <div className={styles.info}>
        <div  className={styles.image} style={{height:"150px"}}>
        <Image  className={styles.image} src="/frontend-developer.jpg" layout="responsive" height={200} width={200}/> <div className={styles.name}> Shivang Khandelwal (Frontend Developer)</div>
        </div> 
        <div className={styles.contactinfo}>
          Shivang is currently pursuing ECE from IIIT Surat, has made numerous frontend projects using  React and Nextjs, and has decent experience regarding the same. All the frontend in this project is done by him from start till end.
          <br /><br />
           Email: shivangkh26@gmail.com <br />
          Contact No.:  9079377724

        </div>
        {/* Shivang Khandelwal : Frontend Developer */}
      </div>
      <br />
      <hr />

      <div className={styles.info}>
        <div  className={styles.image} style={{height:"150px"}}>
        <Image  className={styles.image} src="/backend-developer.jpg" layout="responsive" height={200} width={200}/> <div className={styles.name}> Diksha Singla (Backend Developer)</div>
        </div> 
        <div className={styles.contactinfo}>
          Diksha is currently pursuing ECE from IIIT Surat, has build few Web projects and has an edge on backend over other people. All the work regarding backend and authentication is done by her in this project using firebase.
          <br /><br />
           Email: Diksha1.dcmc@gmail.com <br />
          Contact No.:  7814780675

        </div>
        {/* Shivang Khandelwal : Frontend Developer */}
      </div>
 
    </div>
    </main>
  )
}

export default Contact