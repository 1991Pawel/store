import Head from 'next/head'
import Layout from '../components/Layout'


export interface ItemsProps {
  items: Products;
}
export interface Products {
  id: number,
  title: string,
  descritpion: string,
  price: number,
}



function Home({ items }: ItemsProps) {
  return (
    <Layout>
      <main>
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
