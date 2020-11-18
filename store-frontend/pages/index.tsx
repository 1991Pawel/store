import Layout from '../components/Layout';
import NewCollection from '../components/NewCollection';
import IntroBanner from '../components/IntroBanner';
import Slider from '../components/Slider';
import { Products } from '../types/type';

const Home = ({ products }: Products) => {
  return (
    <Layout>
      <IntroBanner />
      <main>
        <Slider products={products} />
        <NewCollection />
      </main>
    </Layout>
  );
};

// This function gets called at build time
export const getServerSideProps = async () => {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:1337/items');
  const products = await res.json();

  // By returning {props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products,
    },
  };
};

export default Home;
