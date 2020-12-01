import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import { Product } from '../types/type';
import { useLocalStorage } from '../hooks/useLocalStorage';

type FavoriteConxtextProps = {
  favoriteProducts: Product[];
  addItemToFavorite: any;
};

export const FavoriteContext = createContext<
  FavoriteConxtextProps | undefined
>(undefined);

const FavoriteProvider: React.FC = ({ children }) => {
  const [storedValue, setValue] = useLocalStorage('favorite', []);
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>(
    [],
  );

  useEffect(() => {
    setFavoriteProducts(storedValue);
  }, [storedValue]);

  const addItemToFavorite = (product) => console.log(product);

  return (
    <FavoriteContext.Provider
      value={{
        favoriteProducts,
        addItemToFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = (): FavoriteConxtextProps => {
  const ctx = useContext(FavoriteContext);
  if (ctx === undefined) {
    throw new Error(
      'useFavoriteContext must be used within a FavoriteProvider',
    );
  }
  return ctx;
};

export default FavoriteProvider;
