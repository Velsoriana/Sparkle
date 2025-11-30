'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Settings, Save, Download, SkipForward } from 'lucide-react'

interface Dialogue {
  id: string
  character: string
  text: string
  choices?: Choice[]
}

interface Choice {
  id: string
  text: string
  nextDialogue: string
}

interface GameState {
  currentDialogue: string
  variables: Record<string, any>
  choices: Record<string, string>
}

// Données du jeu (à remplacer par votre histoire Ren'Py)
const gameData: Record<string, Dialogue> = {
  'start': {
    id: 'start',
    character: 'Narrateur',
    text: 'Bienvenue dans votre aventure interactive. Vous vous réveillez dans une chambre inconnue...',
    choices: [
      { id: 'choice1', text: 'Explorer la chambre', nextDialogue: 'explore_room' },
      { id: 'choice2', text: 'Sortir de la chambre', nextDialogue: 'leave_room' }
    ]
  },
  'explore_room': {
    id: 'explore_room',
    character: 'Narrateur',
    text: 'Vous examinez attentivement la chambre. Il y a une fenêtre, un bureau avec des papiers, et une porte fermée.',
    choices: [
      { id: 'choice1', text: 'Regarder par la fenêtre', nextDialogue: 'window' },
      { id: 'choice2', text: 'Examiner les papiers', nextDialogue: 'papers' },
      { id: 'choice3', text: 'Essayer d\'ouvrir la porte', nextDialogue: 'door' }
    ]
  },
  'leave_room': {
    id: 'leave_room',
    character: 'Narrateur',
    text: 'Vous sortez de la chambre et vous trouvez dans un couloir sombre...',
    choices: [
      { id: 'choice1', text: 'Aller à gauche', nextDialogue: 'left_corridor' },
      { id: 'choice2', text: 'Aller à droite', nextDialogue: 'right_corridor' }
    ]
  },
  'window': {
    id: 'window',
    character: 'Narrateur',
    text: 'Par la fenêtre, vous voyez un jardin magnifique. Le soleil brille et les oiseaux chantent.',
    choices: [
      { id: 'choice1', text: 'Ouvrir la fenêtre', nextDialogue: 'open_window' },
      { id: 'choice2', text: 'Retourner explorer', nextDialogue: 'explore_room' }
    ]
  },
  'papers': {
    id: 'papers',
    character: 'Narrateur',
    text: 'Sur le bureau, vous trouvez une lettre qui semble vous être adressée...',
    choices: [
      { id: 'choice1', text: 'Lire la lettre', nextDialogue: 'read_letter' },
      { id: 'choice2', text: 'Retourner explorer', nextDialogue: 'explore_room' }
    ]
  },
  'door': {
    id: 'door',
    character: 'Narrateur',
    text: 'La porte est verrouillée. Vous entendez des bruits de l\'autre côté...',
    choices: [
      { id: 'choice1', text: 'Frapper à la porte', nextDialogue: 'knock_door' },
      { id: 'choice2', text: 'Retourner explorer', nextDialogue: 'explore_room' }
    ]
  }
}

export default function GamePage() {
  const [gameState, setGameState] = useState<GameState>({
    currentDialogue: 'start',
    variables: {},
    choices: {}
  })
  const [isTyping, setIsTyping] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const [showChoices, setShowChoices] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const currentDialogue = gameData[gameState.currentDialogue]

  useEffect(() => {
    if (currentDialogue) {
      typeText(currentDialogue.text)
    }
  }, [gameState.currentDialogue])

  const typeText = (text: string) => {
    setIsTyping(true)
    setDisplayedText('')
    setShowChoices(false)
    
    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        setShowChoices(true)
        clearInterval(interval)
      }
    }, 30)
  }

  const makeChoice = (choice: Choice) => {
    setGameState(prev => ({
      ...prev,
      currentDialogue: choice.nextDialogue,
      choices: {
        ...prev.choices,
        [gameState.currentDialogue]: choice.id
      }
    }))
  }

  const skipText = () => {
    if (isTyping) {
      setIsTyping(false)
      setDisplayedText(currentDialogue.text)
      setShowChoices(true)
    }
  }

  const saveGame = async () => {
    try {
      const response = await fetch('/api/game/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gameState),
      })
      
      if (response.ok) {
        alert('Partie sauvegardée !')
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error)
    }
  }

  const loadGame = async () => {
    try {
      const response = await fetch('/api/game/load')
      if (response.ok) {
        const savedState = await response.json()
        setGameState(savedState)
      }
    } catch (error) {
      console.error('Erreur lors du chargement:', error)
    }
  }

  if (!currentDialogue) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl mb-4">Erreur de jeu</h1>
          <p>Dialogue non trouvé</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-purple-900 opacity-50"></div>
      
      {/* Game UI */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Top Bar */}
        <div className="bg-black/50 backdrop-blur-sm p-4 flex justify-between items-center">
          <div className="text-white">
            <h1 className="text-lg font-semibold">Visual Novel</h1>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={saveGame}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              title="Sauvegarder"
            >
              <Save className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={loadGame}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              title="Charger"
            >
              <Download className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              title="Paramètres"
            >
              <Settings className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        {/* Main Game Area */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-4xl w-full">
            {/* Character Image Placeholder */}
            <div className="mb-8 flex justify-center">
              <div className="w-64 h-80 bg-white/10 rounded-lg border border-white/20 flex items-center justify-center">
                <div className="text-white/50 text-center">
                  <div className="text-6xl mb-4">👤</div>
                  <p>Image du personnage</p>
                </div>
              </div>
            </div>

            {/* Dialogue Box */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-black/70 backdrop-blur-sm rounded-lg p-6 border border-white/20"
            >
              {/* Character Name */}
              <div className="text-primary-400 font-semibold mb-3">
                {currentDialogue.character}
              </div>
              
              {/* Dialogue Text */}
              <div className="text-white text-lg leading-relaxed mb-6 min-h-[4rem]">
                {displayedText}
                {isTyping && <span className="animate-pulse">|</span>}
              </div>

              {/* Skip Button */}
              {isTyping && (
                <button
                  onClick={skipText}
                  className="flex items-center text-white/70 hover:text-white transition-colors mb-4"
                >
                  <SkipForward className="h-4 w-4 mr-2" />
                  Passer
                </button>
              )}

              {/* Choices */}
              <AnimatePresence>
                {showChoices && currentDialogue.choices && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-3"
                  >
                    {currentDialogue.choices.map((choice, index) => (
                      <motion.button
                        key={choice.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => makeChoice(choice)}
                        className="w-full text-left p-4 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all duration-200 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white">{choice.text}</span>
                          <ChevronRight className="h-5 w-5 text-white/50 group-hover:text-white transition-colors" />
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pause Menu */}
      <AnimatePresence>
        {isPaused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-8 max-w-md w-full mx-4"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Menu</h2>
              <div className="space-y-4">
                <button
                  onClick={saveGame}
                  className="w-full btn-primary"
                >
                  Sauvegarder
                </button>
                <button
                  onClick={loadGame}
                  className="w-full btn-secondary"
                >
                  Charger
                </button>
                <button
                  onClick={() => setIsPaused(false)}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Reprendre
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 