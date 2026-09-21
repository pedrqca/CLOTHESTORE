import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { Hero } from './components/layout/Hero';
import { ShopByCategories } from './components/home/ShopByCategories';

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Header />

      <main>
        <Hero />
        <ShopByCategories />
      </main>
    </div>
  );
}

export default App;