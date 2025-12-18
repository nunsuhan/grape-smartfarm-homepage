import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { Problem } from '@/components/sections/problem';
import { Solution } from '@/components/sections/solution';
import { Technology } from '@/components/sections/technology';
import { Product } from '@/components/sections/product';
import { CTA } from '@/components/sections/cta';
import { Footer } from '@/components/footer';
import { AppScreenshots } from '@/components/sections/app-screenshots';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-black text-white selection:bg-secondary-gold">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Technology />
      <Product />
      <AppScreenshots />
      <CTA />
      <Footer />
    </main>
  );
}
