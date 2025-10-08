import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuExperience from '@/components/MenuExperience';
import WhyAloy from '@/components/WhyAloy';
import Experiences from '@/components/Experiences';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MenuExperience />
      <WhyAloy />
      <Experiences />
      <CTA />
      <Footer />
    </main>
  );
}
