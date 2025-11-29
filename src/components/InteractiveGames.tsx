import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, HelpCircle, Check, X, RefreshCw } from 'lucide-react';

const quizQuestions = [
  {
    question: 'What does the crossroads symbolize?',
    options: ['Fate and choice', 'Journey', 'Conflict', 'Mystery'],
    correct: 0,
    explanation: 'The crossroads represents the moment of choice where Oedipus unknowingly sealed his fate by killing his father.'
  },
  {
    question: 'What do eyes/blindness represent?',
    options: ['Physical disability', 'Insight vs. ignorance', 'Darkness', 'Fear'],
    correct: 1,
    explanation: 'Eyes and blindness symbolize the contrast between physical sight and true understanding or insight.'
  },
  {
    question: 'What does the Sphinx symbolize?',
    options: ['Evil', 'Power', 'Mystery and knowledge', 'Death'],
    correct: 2,
    explanation: 'The Sphinx represents the mysteries of life and the limits of human knowledge.'
  },
  {
    question: 'What does the plague symbolize?',
    options: ['Disease', 'Moral corruption', 'Punishment', 'Both B and C'],
    correct: 3,
    explanation: 'The plague symbolizes both moral corruption made physical and divine punishment for Oedipus\' crimes.'
  }
];

const prophecyScenarios = [
  {
    situation: 'You are King Laius. The Oracle says your son will kill you. What do you do?',
    choices: [
      {
        text: 'Keep the child and love him',
        outcome: 'Noble, but the prophecy will find a way. Your attempt to change fate only delays it.',
        tragedy: 'Your son still grows up to kill you, but without knowing who you are.'
      },
      {
        text: 'Abandon the child on a mountain',
        outcome: 'You think you\'ve escaped fate, but a shepherd saves the baby...',
        tragedy: 'Your son survives, is raised elsewhere, and kills you at a crossroads years later.'
      },
      {
        text: 'Consult another oracle for a second opinion',
        outcome: 'All oracles speak the truth of Apollo. There is no escape.',
        tragedy: 'You waste time seeking other answers. Fate remains unchanged.'
      }
    ]
  },
  {
    situation: 'You are young Oedipus. You hear you\'re fated to kill your father and marry your mother. What do you do?',
    choices: [
      {
        text: 'Stay in Corinth with your parents',
        outcome: 'But they\'re not your real parents! You don\'t know this...',
        tragedy: 'You eventually leave anyway and the prophecy unfolds.'
      },
      {
        text: 'Flee Corinth forever',
        outcome: 'A noble sacrifice to protect those you love. But...',
        tragedy: 'You head straight toward Thebes—toward your REAL parents and your doom.'
      },
      {
        text: 'Kill yourself to prevent the prophecy',
        outcome: 'The prophecy said nothing about your death...',
        tragedy: 'This isn\'t your choice to make. Fate has other plans.'
      }
    ]
  },
  {
    situation: 'You are King Oedipus. The plague ravages Thebes. Tiresias hints that YOU are the cause. What do you do?',
    choices: [
      {
        text: 'Ignore the blind prophet',
        outcome: 'Willful ignorance. But the truth emerges anyway...',
        tragedy: 'Others will tell you. You cannot unhear what is true.'
      },
      {
        text: 'Investigate immediately',
        outcome: 'Your determination to find truth is admirable but...',
        tragedy: 'Each question brings you closer to unbearable horror.'
      },
      {
        text: 'Stop investigating as Jocasta begs',
        outcome: 'Perhaps ignorance is bliss? But you\'re too proud to stop...',
        tragedy: 'Your nature won\'t let you stop. You MUST know the truth.'
      }
    ]
  }
];

const chorusQuotes = [
  'Alas, how terrible is wisdom when it brings no profit to the wise!',
  'Time, which sees all things, has found you out against your will.',
  'What is your sorrow? Do not be afraid to speak.',
  'Count no man happy until he carries his happiness to the grave.',
  'The greatest griefs are those we cause ourselves.',
  'How dreadful knowledge of the truth can be when there\'s no help in truth!',
  'I would not wish to see you harmed. That would be a double grief.',
  'Let every man in mankind\'s frailty consider his last day.',
  'Destiny guide me always. Destiny find me filled with reverence.',
  'What good were eyes to me? Nothing I could see could bring me joy.'
];

export function InteractiveGames() {
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const [prophecyScenario, setProphecyScenario] = useState(0);
  const [prophecyChoice, setProphecyChoice] = useState<number | null>(null);

  const [chorusQuote, setChorusQuote] = useState(chorusQuotes[0]);

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    setTimeout(() => {
      if (answerIndex === quizQuestions[currentQuestion].correct) {
        if (quizScore === null) setQuizScore(1);
        else setQuizScore(quizScore + 1);
      } else {
        if (quizScore === null) setQuizScore(0);
      }

      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setQuizScore(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const randomChorus = () => {
    const newQuote = chorusQuotes[Math.floor(Math.random() * chorusQuotes.length)];
    setChorusQuote(newQuote);
  };

  const nextProphecy = () => {
    setProphecyScenario((prophecyScenario + 1) % prophecyScenarios.length);
    setProphecyChoice(null);
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
          <h2 className="text-5xl md:text-6xl mb-4 text-amber-500">Interactive Games</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-xl text-stone-300">
            Test Your Knowledge and Experience the Tragedy
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Quiz Game */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-900/50 border border-amber-900/30 rounded-lg p-8"
          >
            <h3 className="text-3xl text-amber-400 mb-6 flex items-center gap-3">
              <HelpCircle className="w-8 h-8" />
              Guess the Symbol
            </h3>

            {quizScore !== null && currentQuestion >= quizQuestions.length ? (
              <div className="text-center space-y-6">
                <div className="text-6xl mb-4">🏆</div>
                <p className="text-2xl text-amber-400">
                  Quiz Complete!
                </p>
                <p className="text-xl text-stone-300">
                  Your score: {quizScore} / {quizQuestions.length}
                </p>
                <button
                  onClick={resetQuiz}
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors flex items-center gap-2 mx-auto"
                >
                  <RefreshCw className="w-5 h-5" />
                  Try Again
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center text-stone-400">
                  <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                  {quizScore !== null && <span>Score: {quizScore}</span>}
                </div>

                <p className="text-xl text-stone-200 leading-relaxed">
                  {quizQuestions[currentQuestion].question}
                </p>

                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => !showResult && handleQuizAnswer(index)}
                      disabled={showResult}
                      className={`w-full p-4 rounded-lg text-left transition-all ${
                        showResult
                          ? index === quizQuestions[currentQuestion].correct
                            ? 'bg-green-600 text-white'
                            : index === selectedAnswer
                            ? 'bg-red-600 text-white'
                            : 'bg-stone-800 text-stone-400'
                          : 'bg-stone-800 text-stone-200 hover:bg-stone-700'
                      }`}
                      whileHover={!showResult ? { scale: 1.02 } : {}}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showResult && index === quizQuestions[currentQuestion].correct && (
                          <Check className="w-5 h-5" />
                        )}
                        {showResult && index === selectedAnswer && index !== quizQuestions[currentQuestion].correct && (
                          <X className="w-5 h-5" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                <AnimatePresence>
                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-amber-900/20 border border-amber-700/30 rounded-lg"
                    >
                      <p className="text-stone-300 text-sm">
                        {quizQuestions[currentQuestion].explanation}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>

          {/* Prophecy Simulator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-900/50 border border-amber-900/30 rounded-lg p-8"
          >
            <h3 className="text-3xl text-amber-400 mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              The Prophecy Simulator
            </h3>

            <div className="space-y-6">
              <div className="p-4 bg-amber-900/20 border-l-4 border-amber-600 rounded">
                <p className="text-stone-200 leading-relaxed">
                  {prophecyScenarios[prophecyScenario].situation}
                </p>
              </div>

              <div className="space-y-3">
                {prophecyScenarios[prophecyScenario].choices.map((choice, index) => (
                  <div key={index}>
                    <motion.button
                      onClick={() => setProphecyChoice(index)}
                      className={`w-full p-4 rounded-lg text-left transition-all ${
                        prophecyChoice === index
                          ? 'bg-amber-600 text-white'
                          : 'bg-stone-800 text-stone-200 hover:bg-stone-700'
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      {choice.text}
                    </motion.button>

                    <AnimatePresence>
                      {prophecyChoice === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 space-y-3"
                        >
                          <div className="p-4 bg-stone-950/50 rounded-lg border border-stone-700">
                            <p className="text-sm text-stone-300 mb-2">
                              <span className="text-amber-400">Outcome:</span> {choice.outcome}
                            </p>
                          </div>
                          <div className="p-4 bg-red-900/20 rounded-lg border border-red-700/30">
                            <p className="text-sm text-red-200">
                              <span className="text-red-400">💀 Tragedy:</span> {choice.tragedy}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {prophecyChoice !== null && (
                <button
                  onClick={nextProphecy}
                  className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  Try Another Scenario
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Greek Chorus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 border border-amber-700/30 rounded-lg p-8 text-center"
        >
          <h3 className="text-3xl text-amber-400 mb-6">Greek Chorus 🎭</h3>
          
          <motion.div
            key={chorusQuote}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 min-h-[100px] flex items-center justify-center"
          >
            <p className="text-2xl text-stone-200 italic leading-relaxed max-w-3xl">
              "{chorusQuote}"
            </p>
          </motion.div>

          <button
            onClick={randomChorus}
            className="px-8 py-4 bg-amber-600 hover:bg-amber-700 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Hear the Chorus Speak
          </button>
          
          <p className="mt-4 text-sm text-stone-400">
            Click to hear wisdom from the Greek Chorus
          </p>
        </motion.div>
      </div>
    </div>
  );
}
