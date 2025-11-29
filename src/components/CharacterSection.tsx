import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, Heart, Shield, Eye, Skull, Sparkles, RotateCw } from 'lucide-react';

const characters = [
  {
    name: 'Oedipus',
    role: 'King of Thebes / Tragic Hero',
    image: '/images/characters/oedipus.png',
    icon: <Crown className="w-8 h-8" />,
    traits: ['Intelligent', 'Proud', 'Hot-tempered', 'Determined'],
    symbolism: 'Represents humanity\'s quest for knowledge and the limits of human understanding. His name means "swollen foot," marking him from birth.',
    quote: '"I must know who I am and where I came from."',
    color: 'from-amber-500/20 to-amber-600/20',
    borderColor: "border-amber-500/30",
  },
  {
    name: 'Jocasta',
    role: 'Queen of Thebes / Oedipus\' Wife and Mother',
    image: '/images/characters/jocasta.png',
    icon: <Heart className="w-8 h-8" />,
    traits: ['Caring', 'Rational', 'Fearful', 'Tragic'],
    symbolism: 'Represents the attempt to escape fate through denial. Caught between duty and horror.',
    quote: '"Why should anyone fear what is fated?"',
    color: 'from-purple-500/20 to-purple-600/20',
    borderColor: "border-purple-500/30",
  },
  {
    name: 'Creon',
    role: 'Brother of Jocasta / Future King',
    image: '/images/characters/creon.png',
    icon: <Shield className="w-8 h-8" />,
    traits: ['Loyal', 'Rational', 'Patient', 'Honorable'],
    symbolism: 'Represents political stability and rational governance. Serves as a foil to Oedipus\' passion.',
    quote: '"I would not seek to be a king rather than act like a king."',
    color: 'from-blue-500/20 to-blue-300/20',
    borderColor: "border-blue-500/30",
  },
  {
    name: 'Tiresias',
    role: 'Blind Prophet',
     image: '/images/characters/tiresia.png',
    icon: <Eye className="w-8 h-8" />,
    traits: ['Wise', 'Reluctant', 'Prophetic', 'Truthful'],
    symbolism: 'Represents spiritual sight and divine knowledge. Though physically blind, he sees the truth.',
    quote: '"You have eyes, yet you cannot see where you are in sin."',
    color: 'from-indigo-500/20 to-indigo-600/10',
    borderColor: "border-indigo-500/30",
  },
  {
    name: 'Laius',
    role: 'Former King of Thebes / Oedipus\' Father',
    image: '/images/characters/lauis.png',
    icon: <Skull className="w-8 h-8" />,
    traits: ['Arrogant', 'Fearful', 'Cruel', 'Doomed'],
    symbolism: 'Represents the sins of fathers visited upon children. His attempt to escape fate sets tragedy in motion.',
    quote: '"The child must die."',
    color: 'from-red-500/20 to-red-600/10',
    borderColor: "border-red-500/20",
  },
  {
    name: 'The Oracle',
    role: 'Voice of Apollo',
    image: '/images/characters/oracle.png',
    icon: <Sparkles className="w-8 h-8" />,
    traits: ['Mysterious', 'Prophetic', 'Ambiguous', 'Divine'],
    symbolism: 'Represents fate, divine will, and the inescapable nature of destiny.',
    quote: '"The plague will end when the murderer is found."',
    color: 'from-emerald-500/20 to-emerald-600/10',
    borderColor: "border-emerald-500/30",
  }
];

export function CharacterSection() {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="relative min-h-screen py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-amber-500">Character Profiles</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-xl text-stone-300">
             Discover the key figures in this timeless tragedy.
          </p>
        </motion.div>

        {/* Character Grid */}
        <div className="relative">
          <div className="overflow-x-auto pb-8 -mx-4 px-4 md:overflow-visible">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-max md:min-w-0">
              {characters.map((character, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="w-full sm:w-80 md:w-auto"
                >
                  <div
                    className="relative h-[500px] cursor-pointer perspective-1000"
                    onClick={() => toggleCard(index)}
                  >
                    <AnimatePresence mode="wait">
                      {!flippedCards[index] ? (
                        <motion.div
                          key="front"
                          initial={{ rotateY: 0 }}
                          exit={{ rotateY: 90 }}
                          transition={{ duration: 0.3 }}
                          className={`absolute inset-0 bg-gradient-to-br ${character.color} border ${character.borderColor} rounded-lg p-6 backdrop-blur-sm cursor-pointer`}
                          style={{ backfaceVisibility: 'hidden' }}
                        >
                          <div className="flex flex-col h-full items-center">
                            <div className="flex justify-center mb-4">
                              <img
                                src={character.image}
                                alt={character.name}
                                className="w-32 h-24 object-cover rounded-lg shadow-md"
                              />
                            </div>
                            <h3 className="text-2xl text-amber-50 mb-2 text-center">
                              {character.name}
                            </h3>
                            <p className="text-amber-300 text-center mb-6 opacity-80 text-sm">
                              {character.role}
                            </p>

                            <div className="flex-1">
                              <h4 className="text-amber-100 mb-3 text-sm">
                                Key Traits:
                              </h4>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {character.traits.map((trait, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-200 text-sm"
                                  >
                                    {trait}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex items-center justify-center gap-2 text-amber-400/60 mt-4 text-sm">
                              <RotateCw className="w-4 h-4" />
                              <span>Tap to reveal more</span>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="back"
                          initial={{ rotateY: -90 }}
                          animate={{ rotateY: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`absolute inset-0 bg-gradient-to-br ${character.color} border ${character.borderColor} border-amber-900/30 rounded-lg p-6 backdrop-blur-sm cursor-pointer`}
                          style={{ backfaceVisibility: 'hidden' }}
                        >
                          <div className="flex flex-col h-full items-center">

                            <div className="p-3 bg-amber-500/20 backdrop-blur-sm rounded-full text-7xl mb-6 text-center text-amber-400">
                              {character.icon}
                            </div>

                            <h3 className="text-2xl text-white mb-6 text-center">{character.name}</h3>

                            <div className="flex-1 space-y-6">

                              {/* Symbolism */}
                              <div className="mb-6">
                                <h4 className="text-amber-400 mb-2 flex items-center gap-2">
                                  <span>🎭</span> Symbolism
                                </h4>
                                <p className="text-stone-300 text-sm leading-relaxed">
                                  {character.symbolism}
                                </p>
                              </div>

                              {/* Quote */}
                              <div className="bg-stone-950/50 border-l-4 border-amber-600 p-4 rounded">
                                <h4 className="text-amber-400 mb-2 flex items-center gap-2">
                                  <span>💬</span> Famous Quote
                                </h4>
                                <p className="text-stone-300 italic text-sm">
                                  {character.quote}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center justify-center gap-2 text-amber-400/60 mt-4 text-sm">
                              <RotateCw className="w-4 h-4" />
                              <span>Tap to flip back</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Character Relationships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-stone-900/50 border border-amber-900/30 rounded-lg p-8"
        >
          <h3 className="text-2xl text-amber-400 mb-6 text-center">Character Relationships</h3>
          <div className="max-w-3xl mx-auto space-y-4 text-stone-300">
            <div className="flex items-center gap-4 p-4 bg-stone-950/50 rounded-lg">
              <span className="text-2xl">👨‍👦</span>
              <div>
                <span className="text-amber-400">Oedipus & Laius:</span> Father and son, though neither knows it. Their fatal encounter at the crossroads sets the tragedy in motion.
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-stone-950/50 rounded-lg">
              <span className="text-2xl">💑</span>
              <div>
                <span className="text-amber-400">Oedipus & Jocasta:</span> Husband and wife, mother and son. The ultimate taboo that drives the tragedy.
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-stone-950/50 rounded-lg">
              <span className="text-2xl">🤝</span>
              <div>
                <span className="text-amber-400">Oedipus & Creon:</span> Brothers-in-law who clash over accusations and truth. Creon inherits the throne after Oedipus's fall.
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-stone-950/50 rounded-lg">
              <span className="text-2xl">👁️</span>
              <div>
                <span className="text-amber-400">Oedipus & Tiresias:</span> The blind prophet who sees all versus the sighted king who is blind to truth.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add perspective for 3D flip */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}