import { useCartContext } from '../context/CartContext';
import { useSlideNumber } from '../hooks/useSlideNumber';
import Carousel from 'nuka-carousel';
import styles from '../styles/Slider.module.scss';
import SingleProduct from './SingleProduct';
import { Products } from '../types/type';

const Slider: React.FC<Products> = ({ products }) => {
  const slideNumberToShow = useSlideNumber();
  const { addItemToCart, removeItemFromCart } = useCartContext();

  return (
    <div className="wrapper">
      <div className={styles.slider}>
        <Carousel
          slidesToShow={slideNumberToShow}
          renderBottomCenterControls={null}
        >
          {products.map((product) => (
            <div key={product.id} className={styles.slider__wrapper}>
              <SingleProduct
                removeItemFromCart={removeItemFromCart}
                addItemToCart={addItemToCart}
                product={product}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Slider;
