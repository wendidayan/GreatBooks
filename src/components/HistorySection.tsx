import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Theater, Scroll } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const timelineEvents = [
  { year: '800 BCE', title: 'Homeric Period', description: 'Oral tradition of Greek mythology established through Homer\'s epics' },
  { year: '534 BCE', title: 'Birth of Tragedy', description: 'Thespis wins first theatrical competition in Athens, inventing tragedy' },
  { year: '497 BCE', title: 'Sophocles Born', description: 'Born during Athens\' Golden Age under Pericles' },
  { year: '472 BCE', title: 'Aeschylus Dominates', description: 'Greek tragedy reaches early maturity with Aeschylus\' innovations' },
  { year: '468 BCE', title: 'Sophocles\' First Victory', description: 'Young Sophocles defeats Aeschylus at the City Dionysia' },
  { year: '430-425 BCE', title: 'Oedipus Rex Premiere', description: 'First performed at the Theatre of Dionysus in Athens' },
  { year: '406 BCE', title: 'Legacy Secured', description: 'Sophocles dies, leaving 7 surviving plays of his 120+ works' }
];

const locations = [
  {
    name: 'Athens',
    description: 'Center of Greek culture and birthplace of tragedy',
    significance: 'Where Oedipus Rex was first performed at the Theatre of Dionysus',
    icon: <Theater className="w-6 h-6" />
  },
  {
    name: 'Thebes',
    description: 'Ancient Greek city and setting of the play',
    significance: 'The plague-stricken city ruled by Oedipus',
    icon: <MapPin className="w-6 h-6" />
  },
  {
    name: 'Delphi',
    description: 'Home of the famous Oracle of Apollo',
    significance: 'Where the prophecies that drive the plot originated',
    icon: <Scroll className="w-6 h-6" />
  }
];

const tragedyStructure = [
  { term: 'Prologue', definition: 'Opening scene that sets up the situation and conflict' },
  { term: 'Parodos', definition: 'Entry of the chorus with singing and dancing' },
  { term: 'Episodes', definition: 'Main dramatic scenes (3-5 episodes in most plays)' },
  { term: 'Stasimon', definition: 'Choral odes between episodes reflecting on events' },
  { term: 'Exodus', definition: 'Final scene and departure of the chorus' }
];

export function HistorySection() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

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
          <h2 className="text-5xl md:text-6xl mb-4 text-amber-500">History & Context</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-xl text-stone-300">
            Ancient Greece, the Golden Age, and the Birth of Theater
          </p>
        </motion.div>

        {/* Historical Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl text-amber-400 mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8" />
            Historical Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-600 via-amber-700 to-amber-900"></div>

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center border-4 border-stone-950 shadow-lg shadow-amber-600/50 relative z-10">
                    <span className="text-xs text-center leading-tight">{event.year}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-stone-900/50 border border-amber-900/30 rounded-lg p-6 backdrop-blur-sm">
                    <h4 className="text-xl text-amber-400 mb-2">{event.title}</h4>
                    <p className="text-stone-300">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Map of Important Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl text-amber-400 mb-8 flex items-center gap-3">
            <MapPin className="w-8 h-8" />
            Key Locations
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Map Visual */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://i.pinimg.com/1200x/3d/98/40/3d984094397fde93e665e3056663bdb3.jpg"
                alt="Greek Landscape"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent"></div>
              
              {/* Location Markers */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-md">
                  {locations.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedLocation(index)}
                      className="absolute w-8 h-8 bg-amber-600 rounded-full border-4 border-white shadow-lg hover:scale-125 transition-transform"
                      style={{
                        top: `${30 + index * 25}%`,
                        left: `${20 + index * 25}%`
                      }}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{
                        scale: selectedLocation === index ? [1, 1.2, 1] : 1
                      }}
                      transition={{
                        scale: { duration: 0.5, repeat: selectedLocation === index ? Infinity : 0 }
                      }}
                    >
                      <span className="sr-only">{locations[index].name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div className="space-y-4">
              {locations.map((location, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedLocation(index)}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                    selectedLocation === index
                      ? 'bg-amber-600 shadow-lg shadow-amber-600/50'
                      : 'bg-stone-900/50 border border-amber-900/30 hover:border-amber-700/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${
                      selectedLocation === index ? 'bg-white text-amber-600' : 'bg-amber-600 text-white'
                    }`}>
                      {location.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-xl mb-2 ${selectedLocation === index ? 'text-white' : 'text-amber-400'}`}>
                        {location.name}
                      </h4>
                      <p className={`mb-2 ${selectedLocation === index ? 'text-amber-50' : 'text-stone-300'}`}>
                        {location.description}
                      </p>
                      {selectedLocation === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-3 pt-3 border-t border-white/30"
                        >
                          <p className="text-sm text-amber-50">
                            <span className="font-semibold">Significance:</span> {location.significance}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Greek Tragedy Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-900/50 border border-amber-900/30 rounded-lg p-8"
        >
          <h3 className="text-3xl text-amber-400 mb-8 flex items-center gap-3">
            <Theater className="w-8 h-8" />
            Structure of Greek Tragedy
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {tragedyStructure.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-amber-600/20 to-amber-800/10 border border-amber-700/30 rounded-lg p-6 h-full">
                  <div className="text-4xl text-amber-500 mb-2">{index + 1}</div>
                  <h4 className="text-xl text-amber-400 mb-3">{item.term}</h4>
                  <p className="text-sm text-stone-300 leading-relaxed">{item.definition}</p>
                </div>
                {index < tragedyStructure.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-amber-600/50"></div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-stone-950/50 rounded-lg border-l-4 border-amber-600">
            <p className="text-stone-300 leading-relaxed">
              <span className="text-amber-400">Note:</span> Oedipus Rex follows this classical structure 
              perfectly, demonstrating Sophocles' mastery of the form. The play maintains the three 
              classical unities: unity of time (takes place in one day), unity of place (set in front 
              of the palace), and unity of action (one main plot).
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
