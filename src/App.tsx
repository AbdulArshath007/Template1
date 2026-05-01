/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import PageTransition from './components/PageTransition';
import LoadingScreen from './components/LoadingScreen';

type ViewState = 'hero' | 'booking';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState<ViewState>('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionOrigin, setTransitionOrigin] = useState({ x: 50, y: 50 });

  const navigateTo = useCallback((targetView: ViewState, x: number, y: number) => {
    setTransitionOrigin({ x, y });
    setIsTransitioning(true);
    
    // Duration matches transition component
    setTimeout(() => {
      setView(targetView);
      // Scroll to top when navigating
      window.scrollTo(0, 0);
      // Let the view render before starting to hide the transition
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 800);
  }, []);

  return (
    <main className={`min-h-screen bg-[#f0f0f0] relative ${isLoading || isTransitioning ? 'overflow-hidden' : 'overflow-x-hidden'}`}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div 
        style={{ 
          opacity: isLoading ? 0 : 1, 
          transition: "opacity 0.5s ease-out",
          pointerEvents: isLoading ? 'none' : 'auto'
        }}
        className="w-full h-full"
      >
        {view === 'hero' ? (
          <HomePage onBookClick={(x, y) => navigateTo('booking', x, y)} />
        ) : (
          <BookingPage onBack={(x, y) => navigateTo('hero', x, y)} />
        )}

        <PageTransition isTransitioning={isTransitioning} origin={transitionOrigin} />
      </div>
    </main>
  );
}
