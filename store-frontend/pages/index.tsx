import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'


function Home({ items }) {
  return (
    <Layout>
      {console.log(items)}
      <main className={styles.main}>
        <p>main</p>
      </main>
      <p>lorem</p>
    </Layout>
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
