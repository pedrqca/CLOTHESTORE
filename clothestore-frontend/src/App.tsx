import { useEffect } from 'react';

import Hero from './components/layout/Hero/Hero';
import ShopByCategories from './components/home/ShopByCategories';
import MarqueeBanner from './components/home/MarqueeBanner';
import AllProducts from './components/home/AllProducts';
import AboutPreview from './components/home/AboutPreview';

import { getProducts } from './services/api';

export function App() {
  useEffect(() => {
    getProducts()
      .then((products) => {
        console.log('Produtos da API:', products);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  return (
    <>
      <Hero />
      <ShopByCategories />
      <MarqueeBanner />
      <AllProducts />
      <AboutPreview />
    </>
  );
}

export default App;