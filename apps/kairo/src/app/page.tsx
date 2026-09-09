import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Intro } from '@/components/Intro';
import { Faq } from '@/components/Faq';
import { JoinSection } from '@/components/JoinSection';
import { PracticeStory } from '@/components/PracticeStory';
import { Sessions } from '@/components/Sessions';
import { Space } from '@/components/Space';
import { SiteFooter } from '@/components/SiteFooter';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <PracticeStory />
        <Space />
        <Sessions />
        <Faq />
        <JoinSection />
      </main>
      <SiteFooter />
    </>
  );
}
