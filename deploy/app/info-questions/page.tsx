'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Send, MessageCircle, Info, Calendar, Users } from 'lucide-react'
import Link from 'next/link'

export default function InfoQuestionsPage() {
  const [question, setQuestion] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Question envoyée ! Nous vous répondrons bientôt.')
    setQuestion('')
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header - Barre rouge bordeaux */}
      <header className="bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour
            </Link>
            <h1 className="text-xl font-bold">Infos & Questions</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Section Actualités */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-6">
              <Info className="h-6 w-6 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Actualités du Jeu</h2>
            </div>

            <div className="space-y-6">
              {/* Actualité 1 */}
              <div className="border-l-4 border-red-500 pl-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>15 Janvier 2024</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Nouvelle version disponible !</h3>
                <p className="text-gray-600">
                  La version 1.2 de SPARKLE est maintenant disponible avec de nouvelles fonctionnalités 
                  et des corrections de bugs.
                </p>
              </div>

              {/* Actualité 2 */}
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>10 Janvier 2024</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Nouveau personnage annoncé</h3>
                <p className="text-gray-600">
                  Découvrez bientôt un nouveau personnage mystérieux qui rejoindra l'histoire de Lulla !
                </p>
              </div>

              {/* Actualité 3 */}
              <div className="border-l-4 border-green-500 pl-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>5 Janvier 2024</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Trailer en préparation</h3>
                <p className="text-gray-600">
                  Le trailer officiel de SPARKLE est en cours de finalisation. 
                  Restez connectés pour la sortie !
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section Questions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-6">
              <MessageCircle className="h-6 w-6 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Posez votre question</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Votre question
                </label>
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  rows={4}
                  placeholder="Écrivez votre question ici..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Votre email (pour recevoir la réponse)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Envoyer ma question
              </motion.button>
            </form>

            {/* FAQ */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Questions fréquentes</h3>
              <div className="space-y-3">
                <details className="group">
                  <summary className="cursor-pointer text-gray-700 hover:text-red-600 font-medium">
                    Quand sortira le jeu complet ?
                  </summary>
                  <p className="mt-2 text-gray-600 pl-4">
                    Le jeu complet sortira au printemps 2024. Restez connectés pour plus d'informations !
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer text-gray-700 hover:text-red-600 font-medium">
                    Sur quelles plateformes sera disponible SPARKLE ?
                  </summary>
                  <p className="mt-2 text-gray-600 pl-4">
                    SPARKLE sera disponible sur Windows, Mac, et mobile (iOS/Android).
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer text-gray-700 hover:text-red-600 font-medium">
                    Le jeu sera-t-il gratuit ?
                  </summary>
                  <p className="mt-2 text-gray-600 pl-4">
                    Une version de démonstration gratuite sera disponible. Le jeu complet sera payant.
                  </p>
                </details>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 