import { useState, useEffect, useRef } from 'react';
import { HeroSection } from './components/HeroSection';
import { AuthorSection } from './components/AuthorSection';
import { StorySection } from './components/StorySection';
import { CharacterSection } from './components/CharacterSection';
import { HistorySection } from './components/HistorySection';
import { ThemesSection } from './components/ThemesSection';
import { InteractiveGames } from './components/InteractiveGames';
import { ModernRelevance } from './components/ModernRelevance';
{/*import { DatabaseView } from './components/DatabaseView';*/}
import { Navigation } from './components/Navigation';
import { Music } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [soundEnabled, setSoundEnabled] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/greek-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (soundEnabled) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [soundEnabled]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'author', 'story', 'characters', 'history', 'themes', 'games', 'modern', 'database'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-stone-950 text-stone-100">
      {/* Greek Pattern Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Navigation */}
      <Navigation currentSection={currentSection} />

      {/* Sound Toggle */}
      <button
        onClick={() => setSoundEnabled(!soundEnabled)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full transition-all duration-300 ${
          soundEnabled ? 'bg-amber-600' : 'bg-stone-800'
        } hover:scale-110 shadow-lg`}
        title="Toggle Greek Music"
      >
        <Music className={soundEnabled ? 'text-white' : 'text-stone-400'} />
      </button>

      {/* Main Content */}
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="author">
          <AuthorSection />
        </section>
        
        <section id="story">
          <StorySection />
        </section>
        
        <section id="characters">
          <CharacterSection />
        </section>
        
        <section id="history">
          <HistorySection />
        </section>
        
        <section id="themes">
          <ThemesSection />
        </section>
        
        <section id="games">
          <InteractiveGames />
        </section>
        
        <section id="modern">
          <ModernRelevance />
        </section>
        
        {/*<section id="database">
          <DatabaseView />
        </section>*/}
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-900/30 bg-stone-950/50 backdrop-blur-sm py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-stone-400">
          <p>A Journey Through Ancient Greek Tragedy</p>
          <p className="mt-2">© 2025 Oedipus Rex </p>
        </div>
      </footer>
    </div>
  );
}
