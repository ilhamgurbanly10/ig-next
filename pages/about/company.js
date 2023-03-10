import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Company() {
  return (
    <div className={styles.container}>
      {/* {styles.container} - container klassini styles faylindan buraya verir eslinde */}
      <Head>
        <title>Company Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Company Page</h1>
    </div>
  )
}
