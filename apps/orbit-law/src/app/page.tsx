import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Sections } from '@/components/Sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sections />
      </main>
    </>
  );
}
