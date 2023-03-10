import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function User() {

const router = useRouter()
const { id } = router.query

  return (
    <div className={styles.container}>
      {/* {styles.container} - container klassini styles faylindan buraya verir eslinde */}
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>User Id {id}</h1>
    </div>
  )
}
