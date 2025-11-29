import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Award, Users, Scroll } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FaLandmark, FaTrophy, FaTheaterMasks, FaCrown, FaBolt, FaFeather, FaCross } from 'react-icons/fa';

{/*const timelineEvents = [
  { year: '497 BCE', event: 'Born in Colonus, near Athens', icon: '🏛️' },
  { year: '468 BCE', event: 'First victory at the City Dionysia festival', icon: '🏆' },
  { year: '442 BCE', event: 'Antigone is performed', icon: '🎭' },
  { year: '430-425 BCE', event: 'Oedipus Rex premieres in Athens', icon: '👑' },
  { year: '413 BCE', event: 'Electra is performed', icon: '⚡' },
  { year: '409 BCE', event: 'Philoctetes is performed', icon: '🏹' },
  { year: '406/405 BCE', event: 'Dies in Athens at age 90', icon: '🌅' },
];*/}
const timelineEvents = [
  { year: '497 BCE', event: 'Born in Colonus, near Athens', icon: <FaLandmark /> },
  { year: '468 BCE', event: 'First victory at the City Dionysia festival', icon: <FaTrophy /> },
  { year: '442 BCE', event: 'Antigone is performed', icon: <FaTheaterMasks /> },
  { year: '430-425 BCE', event: 'Oedipus Rex premieres in Athens', icon: <FaCrown /> },
  { year: '413 BCE', event: 'Electra is performed', icon: <FaBolt /> },
  { year: '409 BCE', event: 'Philoctetes is performed', icon: <FaFeather /> },
  { year: '406/405 BCE', event: 'Dies in Athens at age 90', icon: <FaCross /> },
];

const facts = [
  { icon: <Scroll className="w-6 h-6" />, label: '120+ Plays Written', value: 'Only 7 Survive' },
  { icon: <Award className="w-6 h-6" />, label: 'Victories', value: '24 Festival Wins' },
  { icon: <Users className="w-6 h-6" />, label: 'Innovation', value: 'Introduced 3rd Actor' },
];

export function AuthorSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextEvent = () => {
    setCurrentIndex((prev) => (prev + 1) % timelineEvents.length);
  };

  const prevEvent = () => {
    setCurrentIndex((prev) => (prev - 1 + timelineEvents.length) % timelineEvents.length);
  };

  return (
    <div className="relative min-h-screen py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-amber-500">Meet Sophocles</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-xl text-stone-300 max-w-3xl mx-auto">
            The Master of Greek Tragedy and One of Athens' Greatest Playwrights
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Portrait Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://media.britishmuseum.org/media/Repository/Documents/2014_10/14_16/528ed6e3_a8d7_4ec3_834e_a3c4010fbd78/mid_00876377_001.jpg"
                alt="Greek Theater"
                className="w-full h-95 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent"></div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-3 gap-4">
              {facts.map((fact, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-stone-900/50 border border-amber-900/30 rounded-lg p-4 text-center"
                >
                  <div className="flex justify-center text-amber-500 mb-2">{fact.icon}</div>
                  <div className="text-amber-400">{fact.value}</div>
                  <div className="text-sm text-stone-400 mt-1">{fact.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bio and Did You Know */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-stone-900/50 border border-amber-900/30 rounded-lg p-6">
              <h3 className="text-2xl text-amber-400 mb-4">Biography</h3>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Sophocles (c. 497/6 – 406/5 BCE) was an ancient Greek tragedian who lived in Athens 
                  during the Golden Age of Greek drama. He is considered one of the three great 
                  tragedians of classical Athens, alongside Aeschylus and Euripides.
                </p>
                <p>
                  Born into a wealthy family, Sophocles was well-educated and held several important 
                  civic positions throughout his life. His contributions to theater revolutionized 
                  the art form and influenced countless playwrights for millennia to come.
                </p>
                <p>
                  His works are characterized by complex characters, intricate plots, and profound 
                  explorations of human suffering, morality, and the relationship between humans 
                  and the divine.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 border border-amber-600/30 rounded-lg p-6">
              <h3 className="text-2xl text-amber-400 mb-4 flex items-center gap-2">
                <span>💡</span> Did You Know?
              </h3>
              <ul className="space-y-3 text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Sophocles introduced a third actor on stage, revolutionizing Greek theater</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>He increased the size of the chorus from 12 to 15 members</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Won 24 festival competitions—more than any other playwright</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Never placed lower than second in any competition he entered</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Served as a general in the Athenian military alongside Pericles</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Timeline Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-900/50 border border-amber-900/30 rounded-lg p-8"
        >
          <h3 className="text-2xl text-amber-400 mb-8 text-center">Life Timeline</h3>
          
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={prevEvent}
              className="p-3 bg-stone-800 hover:bg-amber-600 rounded-full transition-colors"
              aria-label="Previous event"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex-1">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="text-center items-center"
              >
                <div className="text-5xl flex items-center justify-center text-amber-500 mb-4">{timelineEvents[currentIndex].icon}</div>
                <div className="text-3xl text-amber-500 mb-2">{timelineEvents[currentIndex].year}</div>
                <div className="text-xl text-stone-300">{timelineEvents[currentIndex].event}</div>
              </motion.div>

              {/* Progress Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {timelineEvents.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-amber-500 w-8' : 'bg-stone-700'
                    }`}
                    aria-label={`Go to event ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={nextEvent}
              className="p-3 bg-stone-800 hover:bg-amber-600 rounded-full transition-colors"
              aria-label="Next event"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
