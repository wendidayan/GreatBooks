import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, Heart, Shield, Eye, Skull, Sparkles } from 'lucide-react';

const characters = [
  {
    name: 'Oedipus',
    role: 'King of Thebes',
    icon: <Crown className="w-8 h-8" />,
    traits: ['Intelligent', 'Proud', 'Hot-tempered', 'Determined'],
    symbolism: 'Represents humanity\'s quest for knowledge and the limits of human understanding. His name means "swollen foot," marking him from birth.',
    quote: '"I must know who I am and where I came from."',
    fate: 'Cursed to kill his father and marry his mother. Self-blinds upon discovering the truth.',
    color: 'from-amber-600 to-red-600'
  },
  {
    name: 'Jocasta',
    role: 'Queen of Thebes',
    icon: <Heart className="w-8 h-8" />,
    traits: ['Caring', 'Rational', 'Fearful', 'Tragic'],
    symbolism: 'Represents the attempt to escape fate through denial. Caught between duty and horror.',
    quote: '"Why should anyone fear what is fated?"',
    fate: 'Mother and wife to Oedipus. Takes her own life when the truth is revealed.',
    color: 'from-purple-600 to-pink-600'
  },
  {
    name: 'Creon',
    role: 'Brother of Jocasta',
    icon: <Shield className="w-8 h-8" />,
    traits: ['Loyal', 'Rational', 'Patient', 'Honorable'],
    symbolism: 'Represents political stability and rational governance. Serves as a foil to Oedipus\' passion.',
    quote: '"I would not seek to be a king rather than act like a king."',
    fate: 'Becomes King of Thebes after Oedipus\' downfall. Rules with wisdom.',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'Tiresias',
    role: 'Blind Prophet',
    icon: <Eye className="w-8 h-8" />,
    traits: ['Wise', 'Reluctant', 'Prophetic', 'Truthful'],
    symbolism: 'Represents spiritual sight and divine knowledge. Though physically blind, he sees the truth.',
    quote: '"You have eyes, yet you cannot see where you are in sin."',
    fate: 'Tries to spare Oedipus the truth, but ultimately reveals it. The only character who truly "sees."',
    color: 'from-teal-600 to-cyan-600'
  },
  {
    name: 'Laius',
    role: 'Former King of Thebes',
    icon: <Skull className="w-8 h-8" />,
    traits: ['Arrogant', 'Fearful', 'Cruel', 'Doomed'],
    symbolism: 'Represents the sins of fathers visited upon children. His attempt to escape fate sets tragedy in motion.',
    quote: '"The child must die."',
    fate: 'Killed by his own son at a crossroads, fulfilling the first half of the prophecy.',
    color: 'from-gray-600 to-stone-600'
  },
  {
    name: 'The Oracle',
    role: 'Voice of Apollo',
    icon: <Sparkles className="w-8 h-8" />,
    traits: ['Mysterious', 'Prophetic', 'Ambiguous', 'Divine'],
    symbolism: 'Represents fate, divine will, and the inescapable nature of destiny.',
    quote: '"The plague will end when the murderer is found."',
    fate: 'The Oracle\'s prophecies drive the entire narrative. Cannot be defied or escaped.',
    color: 'from-yellow-600 to-amber-600'
  }
];

export function CharacterSection() {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);

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
            Tap to Reveal Their Secrets, Symbolism, and Fate
          </p>
        </motion.div>

        {/* Character Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <motion.button
                onClick={() => setSelectedCharacter(selectedCharacter === index ? null : index)}
                className="w-full text-left"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                  selectedCharacter === index 
                    ? 'border-amber-500 shadow-lg shadow-amber-600/30' 
                    : 'border-amber-900/30 hover:border-amber-700/50'
                }`}>
                  {/* Front of Card */}
                  <div className={`p-6 bg-gradient-to-br ${character.color} bg-opacity-10`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-stone-950/50 rounded-full text-amber-400">
                        {character.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl text-white">{character.name}</h3>
                        <p className="text-stone-300">{character.role}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {character.traits.map((trait, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-stone-950/50 text-amber-400 rounded-full text-sm"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>

                    <div className="text-center text-stone-400 text-sm mt-4">
                      {selectedCharacter === index ? '▼ Close' : '▼ Tap to reveal more'}
                    </div>
                  </div>
                </div>
              </motion.button>

              {/* Expanded Content */}
              <AnimatePresence>
                {selectedCharacter === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 bg-stone-900/50 border border-amber-900/30 rounded-lg p-6 space-y-4">
                      {/* Symbolism */}
                      <div>
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

                      {/* Fate */}
                      <div>
                        <h4 className="text-amber-400 mb-2 flex items-center gap-2">
                          <span>⚡</span> What Fate Says About Them
                        </h4>
                        <p className="text-stone-300 text-sm leading-relaxed">
                          {character.fate}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
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
    </div>
  );
}
