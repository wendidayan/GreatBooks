import { useState } from 'react';
import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';
import { 
  FaEye,       // The Prophecy
  FaBaby,      // The Survivor
  FaExclamationTriangle, // The Revelation
  FaCross,     // The Crossroads
  FaPuzzlePiece,      // The Sphinx
  FaCrown,     // The King
  FaSkullCrossbones, // The Plague
  FaSurprise,     // The Truth
  FaHeartBroken // The Tragedy
} from 'react-icons/fa';
import React from 'react';

const storyChapters = [
  {
    title: 'The Prophecy',
    content: 'King Laius and Queen Jocasta of Thebes receive a horrifying prophecy from the Oracle of Delphi: their son will kill his father and marry his mother.',
    decision: 'What should they do?',
    choices: [
      { text: 'Abandon the child', consequence: 'They pierce the baby\'s ankles and give him to a shepherd to leave on a mountain...' },
      { text: 'Defy the gods', consequence: 'You cannot defy fate. The gods always find a way...' }
    ],
    icon: FaEye
  },
  {
    title: 'The Survivor',
    content: 'The shepherd takes pity on the infant and gives him to a messenger from Corinth. The child, named Oedipus ("swollen foot"), is raised by King Polybus and Queen Merope as their own son.',
    decision: null,
    icon: FaBaby
  },
  {
    title: 'The Revelation',
    content: 'As a young man, Oedipus hears rumors about his parentage. He consults the Oracle at Delphi, who tells him he is fated to kill his father and marry his mother.',
    decision: 'How does Oedipus respond?',
    choices: [
      { text: 'Return to Corinth', consequence: 'No! That would fulfill the prophecy (or so he thinks)...' },
      { text: 'Flee from Corinth', consequence: 'To avoid harming those he believes are his parents, he vows never to return to Corinth...' }
    ],
    icon: FaExclamationTriangle
  },
  {
    title: 'The Crossroads',
    content: 'On his journey, Oedipus encounters a chariot at a crossroads. An argument erupts. In rage, Oedipus kills the stranger—unaware that he is King Laius, his biological father.',
    decision: null,
    icon: FaCross
  },
  {
    title: 'The Sphinx',
    content: 'Oedipus arrives at Thebes, which is terrorized by the Sphinx—a monster that devours those who cannot answer her riddle. Oedipus solves it: "What walks on four legs in the morning, two at noon, and three in the evening?" Answer: Man.',
    decision: null,
    icon: FaPuzzlePiece
  },
  {
    title: 'The King',
    content: 'As reward for saving the city, Oedipus marries the recently widowed Queen Jocasta and becomes King of Thebes. Years pass. They have four children. All seems well.',
    decision: null,
    icon: FaCrown
  },
  {
    title: 'The Plague',
    content: 'A terrible plague strikes Thebes. The Oracle declares it will only end when the murderer of King Laius is found and punished. Oedipus vows to find the killer.',
    decision: null,
    icon: FaSkullCrossbones
  },
  {
    title: 'The Truth',
    content: 'Through the testimony of the blind prophet Tiresias, the shepherd, and the messenger from Corinth, the horrifying truth emerges: Oedipus himself is the murderer. Laius was his father. Jocasta is his mother.',
    decision: null,
    icon: FaSurprise
  },
  {
    title: 'The Tragedy',
    content: 'Jocasta hangs herself in despair. Oedipus, unable to bear the sight of what he has done, blinds himself with her golden brooches. He begs to be exiled from Thebes.',
    decision: null,
    icon: FaHeartBroken
  }
];

export function StorySection() {
  const [selectedChoice, setSelectedChoice] = useState<{ [key: number]: number }>({});

  const handleChoice = (chapterIndex: number, choiceIndex: number) => {
    setSelectedChoice({ ...selectedChoice, [chapterIndex]: choiceIndex });
  };

  return (
    <div className="relative min-h-screen py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900/90 to-stone-950"></div>
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-amber-500">The Story</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-xl text-stone-300">A Journey Through Fate, Pride, and Tragic Discovery</p>
        </motion.div>

        {/* Story Panels */}
        <div className="space-y-12">
          {storyChapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className={`flex items-start gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center text-4xl shadow-lg shadow-amber-600/50">
                    {React.createElement(chapter.icon)}
                  </div>
                </div>

                <div className="flex-1 bg-stone-900/50 border border-amber-900/30 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-amber-500 text-xl">Chapter {index + 1}</span>
                    <div className="h-px flex-1 bg-amber-900/30"></div>
                  </div>
                  <h3 className="text-2xl text-amber-400 mb-3">{chapter.title}</h3>
                  <p className="text-stone-300 leading-relaxed mb-4">{chapter.content}</p>

                  {chapter.decision && chapter.choices && (
                    <div className="mt-6 p-4 bg-amber-900/20 border border-amber-700/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertCircle className="w-5 h-5 text-amber-400" />
                        <span className="text-amber-400">{chapter.decision}</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {chapter.choices.map((choice, choiceIndex) => (
                          <div key={choiceIndex}>
                            <button
                              onClick={() => handleChoice(index, choiceIndex)}
                              className={`w-full p-3 rounded-lg transition-all ${
                                selectedChoice[index] === choiceIndex
                                  ? 'bg-amber-600 text-white'
                                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                              }`}
                            >
                              {choice.text}
                            </button>

                            {selectedChoice[index] === choiceIndex && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-3 p-3 bg-stone-950/50 rounded-lg border border-amber-800/30"
                              >
                                <p className="text-sm text-stone-400 italic">{choice.consequence}</p>
                              </motion.div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {index < storyChapters.length - 1 && (
                <div className="absolute left-10 top-20 bottom-0 w-px bg-gradient-to-b from-amber-600 to-transparent -z-10"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Fate Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-transparent via-stone-800/50 to-transparent p-8 rounded-lg border-y border-amber-900/30">
            <p className="text-2xl text-amber-400 italic mb-2">
              "Time, which sees all things, has found you out."
            </p>
            <p className="text-stone-400">— Sophocles, Oedipus Rex</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
