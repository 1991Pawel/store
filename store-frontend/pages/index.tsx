import Head from 'next/head'
import styles from '../styles/Home.module.css'


function Home({ items }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>main</p>
      </main>
      <p>lorem</p>
      <div className="item">
        {items.map((item) => (
          <li key={item.title}>
            {item.title}
            <img src={item.image} alt="" />
            {console.log(item.image[0].formats.medium.url)}
            <p>{item.description}</p>
            <img src={`http://localhost:1337${item.image[0].formats.medium.url}`} />
          </li>
        ))}
      </div>

      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </div>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:1337/items')
  const items = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      items,
    },
  }
}

export default Home;
