import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Database, User, Book, Lightbulb, History, Quote } from 'lucide-react';

type Category = 'all' | 'author' | 'characters' | 'story' | 'themes' | 'history' | 'quotes';

const databaseEntries = [
  {
    id: 1,
    category: 'author',
    title: 'Sophocles',
    subtitle: 'c. 497/6 – 406/5 BCE',
    content: 'Ancient Greek tragedian, one of three great tragedians of classical Athens. Wrote 120+ plays, only 7 survive.',
    tags: ['Playwright', 'Golden Age', 'Athens']
  },
  {
    id: 2,
    category: 'characters',
    title: 'Oedipus',
    subtitle: 'King of Thebes',
    content: 'Protagonist who unknowingly kills his father and marries his mother, fulfilling a prophecy he tried to avoid.',
    tags: ['Protagonist', 'Tragic Hero', 'King']
  },
  {
    id: 3,
    category: 'characters',
    title: 'Jocasta',
    subtitle: 'Queen of Thebes',
    content: 'Mother and wife to Oedipus. Takes her own life when the truth is revealed.',
    tags: ['Queen', 'Mother', 'Tragic']
  },
  {
    id: 4,
    category: 'characters',
    title: 'Tiresias',
    subtitle: 'Blind Prophet',
    content: 'Though physically blind, sees the truth about Oedipus. Represents spiritual insight.',
    tags: ['Prophet', 'Blind', 'Wise']
  },
  {
    id: 5,
    category: 'characters',
    title: 'Creon',
    subtitle: 'Brother of Jocasta',
    content: 'Becomes King after Oedipus. Represents rational governance and political stability.',
    tags: ['Brother', 'King', 'Rational']
  },
  {
    id: 6,
    category: 'story',
    title: 'The Prophecy',
    subtitle: 'Beginning of the Tragedy',
    content: 'Oracle predicts that Laius and Jocasta\'s son will kill his father and marry his mother.',
    tags: ['Oracle', 'Fate', 'Beginning']
  },
  {
    id: 7,
    category: 'story',
    title: 'The Crossroads',
    subtitle: 'Moment of No Return',
    content: 'Oedipus encounters and kills a stranger at a crossroads—his biological father, King Laius.',
    tags: ['Murder', 'Fate', 'Crossroads']
  },
  {
    id: 8,
    category: 'story',
    title: 'The Sphinx',
    subtitle: 'Riddle and Reward',
    content: 'Oedipus solves the Sphinx\'s riddle, saves Thebes, and becomes King, marrying Jocasta.',
    tags: ['Sphinx', 'Riddle', 'Victory']
  },
  {
    id: 9,
    category: 'story',
    title: 'The Plague',
    subtitle: 'Divine Punishment',
    content: 'Thebes is struck by plague. Oracle says it will only end when Laius\' murderer is found.',
    tags: ['Plague', 'Investigation', 'Oracle']
  },
  {
    id: 10,
    category: 'story',
    title: 'The Truth Revealed',
    subtitle: 'Anagnorisis',
    content: 'Through testimony from various sources, Oedipus discovers he is the murderer he seeks.',
    tags: ['Discovery', 'Truth', 'Tragedy']
  },
  {
    id: 11,
    category: 'themes',
    title: 'Fate vs. Free Will',
    subtitle: 'Central Theme',
    content: 'Can humans escape destiny? Oedipus tries to avoid fate but his actions fulfill it.',
    tags: ['Philosophy', 'Destiny', 'Choice']
  },
  {
    id: 12,
    category: 'themes',
    title: 'Blindness vs. Insight',
    subtitle: 'Symbolic Theme',
    content: 'Physical sight vs. spiritual understanding. Tiresias is blind but sees truth; Oedipus has sight but is blind.',
    tags: ['Vision', 'Knowledge', 'Irony']
  },
  {
    id: 13,
    category: 'themes',
    title: 'Pride (Hubris)',
    subtitle: 'Tragic Flaw',
    content: 'Excessive pride leads to downfall. Oedipus\' confidence in his own intelligence becomes his weakness.',
    tags: ['Hubris', 'Flaw', 'Downfall']
  },
  {
    id: 14,
    category: 'themes',
    title: 'Truth and Knowledge',
    subtitle: 'Dangerous Knowledge',
    content: 'The relentless pursuit of truth can be destructive. Is ignorance sometimes preferable?',
    tags: ['Truth', 'Knowledge', 'Discovery']
  },
  {
    id: 15,
    category: 'history',
    title: 'Athens Golden Age',
    subtitle: '480-404 BCE',
    content: 'Period of cultural flourishing when Sophocles wrote. Athens was center of Greek culture.',
    tags: ['Athens', 'Culture', 'Golden Age']
  },
  {
    id: 16,
    category: 'history',
    title: 'Theatre of Dionysus',
    subtitle: 'Performance Venue',
    content: 'Open-air theater in Athens where Oedipus Rex was first performed, seating up to 17,000.',
    tags: ['Theater', 'Athens', 'Performance']
  },
  {
    id: 17,
    category: 'history',
    title: 'City Dionysia',
    subtitle: 'Festival Competition',
    content: 'Annual festival honoring Dionysus where playwrights competed. Sophocles won 24 times.',
    tags: ['Festival', 'Competition', 'Dionysus']
  },
  {
    id: 18,
    category: 'quotes',
    title: '"Time, which sees all things, has found you out."',
    subtitle: 'Sophocles',
    content: 'Truth cannot remain hidden forever. Time reveals all secrets.',
    tags: ['Time', 'Truth', 'Revelation']
  },
  {
    id: 19,
    category: 'quotes',
    title: '"How terrible—to see the truth when the truth is only pain!"',
    subtitle: 'Tiresias',
    content: 'Sometimes knowledge brings suffering rather than enlightenment.',
    tags: ['Knowledge', 'Pain', 'Wisdom']
  },
  {
    id: 20,
    category: 'quotes',
    title: '"I must know who I am and where I came from."',
    subtitle: 'Oedipus',
    content: 'The driving force of the tragedy—Oedipus\' need to know the truth about himself.',
    tags: ['Identity', 'Truth', 'Quest']
  }
];

export function DatabaseView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [expandedEntry, setExpandedEntry] = useState<number | null>(null);

  const categories: { value: Category; label: string; icon: JSX.Element }[] = [
    { value: 'all', label: 'All', icon: <Database className="w-4 h-4" /> },
    { value: 'author', label: 'Author', icon: <User className="w-4 h-4" /> },
    { value: 'characters', label: 'Characters', icon: <User className="w-4 h-4" /> },
    { value: 'story', label: 'Story', icon: <Book className="w-4 h-4" /> },
    { value: 'themes', label: 'Themes', icon: <Lightbulb className="w-4 h-4" /> },
    { value: 'history', label: 'History', icon: <History className="w-4 h-4" /> },
    { value: 'quotes', label: 'Quotes', icon: <Quote className="w-4 h-4" /> },
  ];

  const filteredEntries = databaseEntries.filter(entry => {
    const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;
    const matchesSearch = searchTerm === '' ||
      entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      author: 'from-purple-600 to-indigo-600',
      characters: 'from-amber-600 to-red-600',
      story: 'from-blue-600 to-cyan-600',
      themes: 'from-teal-600 to-green-600',
      history: 'from-orange-600 to-yellow-600',
      quotes: 'from-pink-600 to-rose-600'
    };
    return colors[category] || 'from-stone-600 to-stone-700';
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
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-amber-500">Database</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-xl text-stone-300">
            Comprehensive Collection of Oedipus Rex Information
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-900/50 border border-amber-900/30 rounded-lg p-6 mb-8"
        >
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search database... (try 'fate', 'Tiresias', 'riddle', etc.)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-stone-950 border border-stone-700 rounded-lg text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-600"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="text-amber-400 w-5 h-5" />
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                  selectedCategory === cat.value
                    ? 'bg-amber-600 text-white'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-4 text-stone-400 text-sm">
            Showing {filteredEntries.length} of {databaseEntries.length} entries
          </div>
        </motion.div>

        {/* Database Entries */}
        <div className="space-y-4">
          {filteredEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setExpandedEntry(expandedEntry === entry.id ? null : entry.id)}
                className="w-full text-left"
              >
                <div className={`bg-stone-900/50 border-2 transition-all rounded-lg overflow-hidden ${
                  expandedEntry === entry.id
                    ? 'border-amber-500 shadow-lg shadow-amber-600/20'
                    : 'border-amber-900/30 hover:border-amber-700/50'
                }`}>
                  {/* Entry Header */}
                  <div className="flex items-start gap-4 p-6">
                    {/* Category Badge */}
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${getCategoryColor(entry.category)} rounded-lg flex items-center justify-center text-white shadow-lg`}>
                      <span className="text-2xl">
                        {entry.category === 'author' && '✍️'}
                        {entry.category === 'characters' && '👤'}
                        {entry.category === 'story' && '📖'}
                        {entry.category === 'themes' && '💡'}
                        {entry.category === 'history' && '🏛️'}
                        {entry.category === 'quotes' && '💬'}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-xl text-amber-400">{entry.title}</h3>
                          <p className="text-sm text-stone-400">{entry.subtitle}</p>
                        </div>
                        <span className="text-xs uppercase tracking-wider px-3 py-1 bg-amber-900/30 text-amber-400 rounded-full whitespace-nowrap">
                          {entry.category}
                        </span>
                      </div>

                      <p className={`text-stone-300 leading-relaxed ${expandedEntry === entry.id ? '' : 'line-clamp-2'}`}>
                        {entry.content}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {entry.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-stone-950/50 text-stone-400 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expand Indicator */}
                  {expandedEntry !== entry.id && (
                    <div className="px-6 pb-4 text-center text-stone-500 text-sm">
                      Click to expand ▼
                    </div>
                  )}
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredEntries.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-stone-400">No entries found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
