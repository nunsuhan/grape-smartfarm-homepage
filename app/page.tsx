import { Hero } from '@/components/sections/hero';
import { Solutions } from '@/components/sections/solutions';
import { Modules } from '@/components/sections/modules';
import { Crops } from '@/components/sections/crops';
import { ExportIntelligence } from '@/components/sections/export-intelligence';
import { Technology } from '@/components/sections/technology';
import { DataSection } from '@/components/sections/data-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Solutions />
      <Modules />
      <Crops />
      <ExportIntelligence />
      <Technology />
      <DataSection />
      <Footer />
    </main>
  );
}
