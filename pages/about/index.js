import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Image from 'next/image';

export default function About(props) {

  const {users} = props;

  console.log(users.data[0])

  const myLoader = () => {
    return `https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952h4umlb33ggp8zsuvekefh4l3yuphhf1fvsoqq549&rid=200w.gif&ct=g`
  }

  return (
    <div className={styles.container}>
      {/* {styles.container} - container klassini styles faylindan buraya verir eslinde */}
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1>About Me</h1>

      <h1>Users</h1>

      {users.data?.map((r, i) => (
        <div key={i}>
        <h1> + {r.first_name}</h1>
        <Image
          // loader={myLoader}
          src={r.avatar}
          alt="Picture of the author"
          width={40}
          height={40}
        />
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://reqres.in/api/users?page=2')
  const users = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      users,
    },
  }
}
