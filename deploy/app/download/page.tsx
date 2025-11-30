'use client'

import { motion } from 'framer-motion'
import { Download, Smartphone, Monitor, Tablet, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'

export default function DownloadPage() {
  const platforms = [
    {
      name: 'Windows',
      icon: Monitor,
      description: 'Version complète pour PC Windows',
      features: ['Interface optimisée', 'Sauvegarde locale', 'Support complet'],
      downloadUrl: '/downloads/visual-novel-windows.exe',
      size: '256 MB'
    },
    {
      name: 'macOS',
      icon: Monitor,
      description: 'Version native pour Mac',
      features: ['Optimisé pour macOS', 'Retina Display', 'iCloud Sync'],
      downloadUrl: '/downloads/visual-novel-macos.dmg',
      size: '245 MB'
    },
    {
      name: 'Android',
      icon: Smartphone,
      description: 'Application mobile Android',
      features: ['Interface tactile', 'Sauvegarde cloud', 'Notifications'],
      downloadUrl: '/downloads/visual-novel-android.apk',
      size: '180 MB'
    },
    {
      name: 'iOS',
      icon: Smartphone,
      description: 'Application iPhone/iPad',
      features: ['Optimisé iOS', 'Sauvegarde iCloud', 'Contrôles tactiles'],
      downloadUrl: '/downloads/visual-novel-ios.ipa',
      size: '195 MB'
    }
  ]

  const features = [
    'Synchronisation cloud entre appareils',
    'Sauvegarde automatique',
    'Interface adaptative',
    'Support hors ligne',
    'Mises à jour automatiques',
    'Support multilingue'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Télécharger l'Application
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuez votre aventure sur tous vos appareils. Téléchargez l'application 
              et synchronisez votre progression entre ordinateur et mobile.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Platforms */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <platform.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {platform.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Taille: {platform.size}
                    </span>
                    <Link
                      href={platform.downloadUrl}
                      className="btn-primary flex items-center"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fonctionnalités de l'Application
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profitez d'une expérience optimale avec toutes les fonctionnalités 
              avancées de notre application.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Prêt à Continuer Votre Aventure ?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Téléchargez l'application et reprenez votre histoire exactement 
              où vous l'avez laissée, sur n'importe quel appareil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/game"
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Jouer en Ligne
              </Link>
              <Link
                href="#platforms"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Télécharger
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Avis des Utilisateurs
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez ce que pensent nos joueurs de l'application.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marie L.',
                rating: 5,
                comment: 'Application parfaite ! La synchronisation entre mon PC et mon téléphone fonctionne parfaitement.'
              },
              {
                name: 'Thomas B.',
                rating: 5,
                comment: 'Interface intuitive et histoire captivante. Je recommande vivement !'
              },
              {
                name: 'Sophie M.',
                rating: 5,
                comment: 'Excellent visual novel avec une expérience utilisateur fluide sur tous les appareils.'
              }
            ].map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "{review.comment}"
                </p>
                <p className="font-semibold text-gray-900">
                  {review.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 