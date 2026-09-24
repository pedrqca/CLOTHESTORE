import Hero from './components/layout/Hero/Hero';
import ShopByCategories from './components/home/ShopByCategories';
import MarqueeBanner from './components/home/MarqueeBanner';
import AllProducts from './components/home/AllProducts';
import AboutPreview from './components/home/AboutPreview';

export function App() {
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