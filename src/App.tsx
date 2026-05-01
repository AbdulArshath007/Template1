/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import Hero from './components/Hero';
import BookingPage from './components/BookingPage';
import PageTransition from './components/PageTransition';

type ViewState = 'hero' | 'booking';

export default function App() {
  const [view, setView] = useState<ViewState>('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionOrigin, setTransitionOrigin] = useState({ x: 50, y: 50 });

  const navigateTo = useCallback((targetView: ViewState, x: number, y: number) => {
    setTransitionOrigin({ x, y });
    setIsTransitioning(true);
    
    // Duration matches transition component
    setTimeout(() => {
      setView(targetView);
      // Let the view render before starting to hide the transition
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 800);
  }, []);

  return (
    <main className="min-h-screen bg-[#f0f0f0] relative">
      {view === 'hero' ? (
        <Hero onBookClick={(x, y) => navigateTo('booking', x, y)} />
      ) : (
        <BookingPage onBack={(x, y) => navigateTo('hero', x, y)} />
      )}

      <PageTransition isTransitioning={isTransitioning} origin={transitionOrigin} />
    </main>
  );
}
