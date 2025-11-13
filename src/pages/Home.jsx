import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Features } from '@/components/home/Features';
import { Products } from '@/components/home/Products';
import { Contact } from '@/components/home/Contact';

export const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Products />
      <Contact />
    </main>
  );
};