import { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Film, Book, Palette, BarChart3 } from 'lucide-react';

const modernConnections = [
  {
    title: 'Leadership & Accountability',
    icon: '👔',
    description: 'Oedipus represents leaders who refuse to acknowledge their mistakes until it\'s too late.',
    examples: ['Political scandals', 'Corporate corruption', 'Authority figures denying responsibility']
  },
  {
    title: 'The Search for Identity',
    icon: '🔍',
    description: 'The play speaks to anyone questioning their origins, family, or place in the world.',
    examples: ['Adoption stories', 'DNA testing revelations', 'Family secrets uncovered']
  },
  {
    title: 'Truth vs. Comfortable Lies',
    icon: '🎭',
    description: 'Sometimes ignorance feels safer than facing painful truths.',
    examples: ['Climate change denial', 'Avoiding medical diagnoses', 'Ignoring relationship problems']
  },
  {
    title: 'The Limits of Control',
    icon: '🎲',
    description: 'We like to think we control our destinies, but chance and circumstance often decide.',
    examples: ['Unexpected life changes', 'Global pandemics', 'Economic crises']
  }
];

const adaptations = [
  {
    type: 'Film',
    title: 'Oedipus Rex (1967)',
    creator: 'Pier Paolo Pasolini',
    description: 'Italian film adaptation staying close to the original'
  },
  {
    type: 'Opera',
    title: 'Oedipus Rex',
    creator: 'Igor Stravinsky (1927)',
    description: 'Opera-oratorio in Latin, one of Stravinsky\'s most famous works'
  },
  {
    type: 'Theater',
    title: 'The Gospel at Colonus',
    creator: 'Lee Breuer (1983)',
    description: 'Musical adaptation set in Black Pentecostal church'
  },
  {
    type: 'Literature',
    title: 'The Machine Stops',
    creator: 'E.M. Forster',
    description: 'Sci-fi story exploring similar themes of fate and hubris'
  },
  {
    type: 'Film',
    title: 'Chinatown (1974)',
    creator: 'Roman Polanski',
    description: 'Film noir with Oedipus-inspired plot structure'
  },
  {
    type: 'Psychology',
    title: 'Oedipus Complex',
    creator: 'Sigmund Freud',
    description: 'Psychoanalytic theory named after the character'
  }
];

const pollOptions = [
  { text: 'Victim of fate — the gods decided everything', votes: 0 },
  { text: 'Guilty — his pride and rage caused his downfall', votes: 0 },
  { text: 'Both — fate and choice are intertwined', votes: 0 },
  { text: 'Neither — it\'s a question of moral luck', votes: 0 }
];

export function ModernRelevance() {
  const [votes, setVotes] = useState(pollOptions.map(() => 0));
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedVote, setSelectedVote] = useState<number | null>(null);

  const handleVote = (index: number) => {
    if (!hasVoted) {
      const newVotes = [...votes];
      newVotes[index] += 1;
      setVotes(newVotes);
      setHasVoted(true);
      setSelectedVote(index);
    }
  };

  const totalVotes = votes.reduce((sum, v) => sum + v, 0);

  const getIcon = (type: string) => {
    switch (type) {
      case 'Film': return <Film className="w-5 h-5" />;
      case 'Literature': return <Book className="w-5 h-5" />;
      case 'Opera': case 'Theater': return <Palette className="w-5 h-5" />;
      default: return <TrendingUp className="w-5 h-5" />;
    }
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
          <h2 className="text-5xl md:text-6xl mb-4 text-amber-500">Modern Relevance</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-xl text-stone-300">
            Why Oedipus Rex Still Matters Today
          </p>
        </motion.div>

        {/* Modern Connections */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {modernConnections.map((connection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-stone-900/50 border border-amber-900/30 rounded-lg p-6 hover:border-amber-700/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl">{connection.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl text-amber-400 mb-3">{connection.title}</h3>
                  <p className="text-stone-300 mb-4 leading-relaxed">{connection.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm text-amber-400">Modern Examples:</p>
                    {connection.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-stone-400 text-sm">
                        <span className="text-amber-500">•</span>
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Adaptations Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl text-amber-400 mb-8 text-center">
            Modern Adaptations & Influences
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adaptations.map((adaptation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-stone-900/50 to-stone-800/50 border border-amber-900/30 rounded-lg p-6 hover:shadow-lg hover:shadow-amber-600/20 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-amber-600 rounded-lg text-white">
                    {getIcon(adaptation.type)}
                  </div>
                  <div>
                    <span className="text-xs text-amber-400 uppercase tracking-wider">
                      {adaptation.type}
                    </span>
                    <h4 className="text-lg text-white">{adaptation.title}</h4>
                  </div>
                </div>
                <p className="text-sm text-stone-400 mb-2">{adaptation.creator}</p>
                <p className="text-sm text-stone-300 leading-relaxed">{adaptation.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Poll */}
        {/*<motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-900/50 border border-amber-900/30 rounded-lg p-8"
        >
          <h3 className="text-3xl text-amber-400 mb-6 text-center flex items-center justify-center gap-3">
            <BarChart3 className="w-8 h-8" />
            Opinion Poll
          </h3>

          <p className="text-xl text-center text-stone-200 mb-8">
            Do you think Oedipus was guilty or a victim of fate?
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {pollOptions.map((option, index) => {
              const percentage = totalVotes > 0 ? (votes[index] / totalVotes * 100) : 0;
              
              return (
                <motion.button
                  key={index}
                  onClick={() => handleVote(index)}
                  disabled={hasVoted}
                  className={`w-full text-left relative overflow-hidden rounded-lg border-2 transition-all ${
                    hasVoted
                      ? selectedVote === index
                        ? 'border-amber-500'
                        : 'border-stone-700'
                      : 'border-amber-900/30 hover:border-amber-700/50'
                  } ${hasVoted ? 'cursor-default' : 'cursor-pointer'}`}
                  whileHover={!hasVoted ? { scale: 1.02 } : {}}
                >
                  {/* Progress Bar */}
                  {/*{hasVoted && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="absolute inset-y-0 left-0 bg-amber-600/30"
                    />
                  )}

                  {/* Content */}
                  {/*</div><div className="relative p-4 flex items-center justify-between">
                    <span className="text-stone-200">{option.text}</span>
                    {hasVoted && (
                      <div className="flex items-center gap-4">
                        <span className="text-amber-400">{votes[index]} votes</span>
                        <span className="text-stone-400">{percentage.toFixed(1)}%</span>
                      </div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {!hasVoted && (
            <p className="text-center text-stone-400 mt-6 text-sm">
              Click an option to cast your vote
            </p>
          )}

          {hasVoted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-amber-400 mt-6"
            >
              Thank you for voting! {totalVotes} total vote{totalVotes !== 1 ? 's' : ''}.
            </motion.p>
          )}
        </motion.div>*/}

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-transparent via-stone-800/50 to-transparent p-8 rounded-lg border-y border-amber-900/30">
            <p className="text-2xl text-amber-400 italic mb-4">
              "Oedipus Rex is not a tragedy of fate, but a tragedy of self-discovery."
            </p>
            <p className="text-stone-400">— Modern Literary Criticism</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
