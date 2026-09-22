import Hero from './components/layout/Hero';
import ShopByCategories from './components/home/ShopByCategories';
import MarqueeBanner from './components/home/MarqueeBanner';
import AllProducts from './components/home/AllProducts';

export function App() {
  return (
    <>
      <Hero />
      <MarqueeBanner />
      <ShopByCategories />
      <MarqueeBanner />
      <AllProducts />
    </>
  );
}

export default App;