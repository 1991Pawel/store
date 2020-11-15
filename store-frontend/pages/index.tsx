import Layout from '../components/Layout'
import NewCollection from '../components/NewCollection'
import IntroBanner from '../components/IntroBanner'
import Slider from '../components/Slider'
import Footer from '../components/Footer'


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
      <IntroBanner />
      <main>
        <Slider />
        <NewCollection />
      </main>
    </Layout>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:1337/items')
  const items = await res.json()

  // By returning {props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      items,
    },
  }
}

export default Home;
