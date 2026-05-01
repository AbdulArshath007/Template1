import Hero from './Hero';
import StatsSection from './StatsSection';
import BentoGrid from './BentoGrid';
import VideoCard from './VideoCard';
import Footer from './Footer';

interface HomePageProps {
  onBookClick: (x: number, y: number) => void;
}

export default function HomePage({ onBookClick }: HomePageProps) {
  return (
    <div className="w-full flex flex-col">
      <Hero onBookClick={onBookClick} />
      <StatsSection />
      <BentoGrid />
      <VideoCard />
      <Footer />
    </div>
  );
}
