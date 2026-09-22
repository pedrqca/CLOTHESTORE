import { lazy, Suspense } from 'react';

const Hero = lazy(() => import('./components/layout/Hero'));
const ShopByCategories = lazy(
  () => import('./components/home/ShopByCategories')
);

export function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Hero />
        <ShopByCategories />
      </Suspense>
    </>
  );
}

export default App;