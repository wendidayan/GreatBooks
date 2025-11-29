import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Eye, Scale, Crown, AlertTriangle, Search } from 'lucide-react';

const themes = [
  {
    title: 'Fate vs. Free Will',
    icon: <Scale className="w-8 h-8" />,
    color: 'from-purple-600 to-indigo-600',
    description: 'Can humans escape their destiny, or are our lives predetermined by the gods?',
    explanation: 'The central paradox of the play: Oedipus tries desperately to avoid his fate, yet his very actions to escape it lead him directly into it. Every choice he makes—fleeing Corinth, killing at the crossroads, solving the Sphinx\'s riddle—brings the prophecy closer to fulfillment.',
    examples: ['Oedipus leaves Corinth to avoid killing his "father"', 'The prophecy given to both Laius and Oedipus comes true despite their efforts', 'The more Oedipus searches for truth, the closer he gets to his doom'],
    question: 'Is Oedipus responsible for his actions if they were fated to happen?'
  },
  {
    title: 'Blindness vs. Insight',
    icon: <Eye className="w-8 h-8" />,
    color: 'from-teal-600 to-cyan-600',
    description: 'Those who see are blind, and those who are blind can truly see.',
    explanation: 'Physical sight versus spiritual/intellectual insight is explored through multiple characters. Tiresias, though blind, sees the truth clearly. Oedipus, with perfect vision, is metaphorically blind to reality. After learning the truth, Oedipus blinds himself—finally achieving understanding through loss of sight.',
    examples: ['Tiresias: blind prophet who knows all', 'Oedipus: sighted king who refuses to see truth', 'Self-blinding as acceptance of truth', 'Jocasta closes her eyes to obvious signs'],
    question: 'Which is worse: physical blindness or willful ignorance?'
  },
  {
    title: 'Pride (Hubris)',
    icon: <Crown className="w-8 h-8" />,
    color: 'from-amber-600 to-red-600',
    description: 'Excessive pride leads to downfall—the classic Greek tragic flaw.',
    explanation: 'Oedipus\' greatest strength—his intelligence and confidence—becomes his fatal flaw. His pride in solving the Sphinx\'s riddle, his certainty in his own judgment, and his refusal to heed warnings all stem from hubris. The Greeks believed the gods punish excessive pride.',
    examples: ['Oedipus boasts of solving the Sphinx\'s riddle', 'He dismisses Tiresias\' prophecy and insults the prophet', 'Refuses to stop investigating despite warnings', 'His rage at the crossroads stems from wounded pride'],
    question: 'Would humility have saved Oedipus, or was he doomed regardless?'
  },
  {
    title: 'Truth and Knowledge',
    icon: <Search className="w-8 h-8" />,
    color: 'from-blue-600 to-indigo-600',
    description: 'The relentless pursuit of truth, even when it destroys.',
    explanation: 'Oedipus is determined to uncover the truth about Laius\' murder and his own origins, despite multiple warnings to stop. The play asks: Is truth always worth pursuing? Is ignorance sometimes preferable? Oedipus embodies the Greek ideal of knowledge-seeking, but demonstrates its terrible cost.',
    examples: ['Oedipus vows to find Laius\' killer', 'He ignores pleas from Jocasta and others to stop investigating', 'Each revelation brings him closer to horror', 'The shepherd reluctantly reveals the final piece'],
    question: 'Is there such a thing as dangerous knowledge?'
  },
  {
    title: 'Guilt and Innocence',
    icon: <AlertTriangle className="w-8 h-8" />,
    color: 'from-rose-600 to-pink-600',
    description: 'Can someone be guilty of crimes they committed unknowingly?',
    explanation: 'Oedipus committed patricide and incest without knowing the truth. He is technically guilty of the acts, but morally innocent of intent. This raises profound questions about the nature of guilt, pollution (miasma in Greek), and justice.',
    examples: ['Oedipus killed Laius in self-defense without knowing who he was', 'He married Jocasta in good faith', 'Yet the city suffers plague because of his "crimes"', 'He punishes himself despite lack of intent'],
    question: 'Does intent matter when determining guilt?'
  },
  {
    title: 'The Power of the Gods',
    icon: <Sparkles className="w-8 h-8" />,
    color: 'from-yellow-600 to-amber-600',
    description: 'Divine will is inescapable; mortals are subject to forces beyond their control.',
    explanation: 'The gods (particularly Apollo through his Oracle) set events in motion and ensure their fulfillment. No mortal can escape divine will. This reflects Greek religious belief in the overwhelming power of the gods and the limits of human agency.',
    examples: ['Apollo\'s oracle accurately predicts all events', 'No amount of human effort can change fate', 'The plague is divine punishment', 'The gods remain distant and unmoved by human suffering'],
    question: 'Are the gods just, or simply powerful?'
  }
];

const symbols = [
  { icon: '👁️', title: 'Eyes/Blindness', meaning: 'Physical sight vs. inner vision' },
  { icon: '🛣️', title: 'The Crossroads', meaning: 'Choice, fate, and the point of no return' },
  { icon: '🦁', title: 'The Sphinx', meaning: 'Mystery, riddles, and the limits of knowledge' },
  { icon: '☠️', title: 'The Plague', meaning: 'Moral corruption made manifest' },
  { icon: '👶', title: 'Swollen Feet', meaning: 'Identity, marking, and inescapable past' },
  { icon: '🏛️', title: 'Thebes', meaning: 'The polis suffering for one man\'s pollution' }
];

export function ThemesSection() {
  const [selectedTheme, setSelectedTheme] = useState<number | null>(null);
  const [hoveredSymbol, setHoveredSymbol] = useState<number | null>(null);

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
          <h2 className="text-5xl md:text-6xl mb-4 text-amber-500">Themes & Symbols</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-xl text-stone-300">
            Explore the Deep Meanings Behind the Tragedy
          </p>
        </motion.div>

        {/* Theme Bubbles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.button
                onClick={() => setSelectedTheme(selectedTheme === index ? null : index)}
                className="w-full text-left"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                  selectedTheme === index
                    ? 'border-amber-500 shadow-lg shadow-amber-600/30'
                    : 'border-amber-900/30 hover:border-amber-700/50'
                }`}>
                  {/* Theme Header */}
                  <div className={`p-6 bg-gradient-to-br ${theme.color}`}>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white">
                        {theme.icon}
                      </div>
                      <h3 className="text-xl text-white flex-1">{theme.title}</h3>
                    </div>
                    <p className="text-white/90 text-sm">{theme.description}</p>
                  </div>

                  {/* Expanded Content */}
                  {selectedTheme === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-stone-900/95 p-6 space-y-4"
                    >
                      <div>
                        <h4 className="text-amber-400 mb-2">Explanation</h4>
                        <p className="text-stone-300 text-sm leading-relaxed">
                          {theme.explanation}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-amber-400 mb-2">Examples in the Play</h4>
                        <ul className="space-y-2">
                          {theme.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-stone-300 text-sm">
                              <span className="text-amber-500 mt-1">•</span>
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-amber-900/30">
                        <h4 className="text-amber-400 mb-2">Think About It</h4>
                        <p className="text-stone-300 text-sm italic">{theme.question}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Expand Indicator */}
                  {selectedTheme !== index && (
                    <div className="bg-stone-900/50 p-3 text-center text-stone-400 text-sm">
                      Click to explore ▼
                    </div>
                  )}
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Symbols Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-900/50 border border-amber-900/30 rounded-lg p-8"
        >
          <h3 className="text-3xl text-amber-400 mb-8 text-center">Key Symbols</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {symbols.map((symbol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredSymbol(index)}
                onHoverEnd={() => setHoveredSymbol(null)}
                className="relative"
              >
                <motion.div
                  className={`relative p-6 rounded-lg text-center cursor-pointer transition-all ${
                    hoveredSymbol === index
                      ? 'bg-amber-600 shadow-lg shadow-amber-600/50'
                      : 'bg-stone-950/50 hover:bg-stone-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-5xl mb-3">{symbol.icon}</div>
                  <h4 className={`text-sm mb-2 ${
                    hoveredSymbol === index ? 'text-white' : 'text-amber-400'
                  }`}>
                    {symbol.title}
                  </h4>
                  {hoveredSymbol === index && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-amber-50 leading-relaxed"
                    >
                      {symbol.meaning}
                    </motion.p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Thematic Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-transparent via-stone-800/50 to-transparent p-8 rounded-lg border-y border-amber-900/30">
            <p className="text-2xl text-amber-400 italic mb-2">
              "How terrible—to see the truth when the truth is only pain to him who sees!"
            </p>
            <p className="text-stone-400">— Tiresias</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
