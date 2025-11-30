'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Heart, Music, Users } from 'lucide-react'

export default function PersonnagesPage() {
  const personnages = [
    {
      nom: "Sasha",
      age: "24 ans",
      role: "chanteuse/guitariste",
      personnalite: "énergique, optimiste, spontané, impulsif",
      travail: "aide à domicile",
      image: "/images/fiche_sasha.png",
      couleur: "from-green-400 to-emerald-500"
    },
    {
      nom: "Lovana", 
      age: "24 ans",
      role: "batteuse",
      personnalite: "déterminée, protectrice, sans tact, taquin",
      etudes: "STAPS (sport)",
      travail: "coach sportif",
      image: "/images/fiche_lovana.png",
      couleur: "from-amber-400 to-orange-500"
    },
    {
      nom: "Kehan",
      age: "25 ans", 
      role: "bassiste",
      personnalite: "travailleur, calme, protecteur, serein",
      etudes: "vétérinaire",
      travail: "apprenti mécanicien",
      image: "/images/fiche_kehan.png",
      couleur: "from-gray-400 to-slate-500"
    },
    {
      nom: "Serena",
      age: "23 ans",
      role: "pianiste", 
      personnalite: "froide, introvertie, curieuse, maladroite",
      etudes: "sculpture",
      travail: "fleuriste",
      image: "/images/fiche_serena.png",
      couleur: "from-purple-400 to-violet-500"
    }
  ]

  return (
    <div className="min-h-screen bg-cover bg-fixed" style={{ backgroundImage: "url(/images/background/texture fond papier.png)", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
      {/* Header */}
      <header className="bg-red-600 h-20 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-full">
            {/* Bouton retour */}
            <Link 
              href="/"
              className="flex items-center space-x-2 px-4 py-2 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-md"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour</span>
            </Link>

            {/* Logo SPARKLE centré */}
            <div className="flex-1 flex justify-center">
              <Image 
                src="/images/logo/logo_sparkle.png" 
                alt="SPARKLE" 
                width={350} 
                height={150}
                className="h-20 w-auto"
                priority
              />
            </div>

            {/* Boutons réseaux sociaux */}
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/sparkle._game/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <Image 
                  src="/images/boutton/insta 1.png" 
                  alt="Instagram" 
                  width={48} 
                  height={48}
                  className="w-12 h-12"
                />
              </a>
              <a 
                href="https://www.tiktok.com/@sparkle._game" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <Image 
                  src="/images/boutton/tiktok 1.png" 
                  alt="TikTok" 
                  width={48} 
                  height={48}
                  className="w-12 h-12"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="leander-text text-8xl font-bold text-gray-800 mb-4">
            Les Personnages
          </h1>
        </motion.div>

        {/* Grille des personnages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {personnages.map((perso, index) => (
            <motion.div
              key={perso.nom}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-80">
                  <Image
                    src={perso.image}
                    alt={`Fiche de ${perso.nom}`}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="leander-text text-3xl font-bold text-gray-800">
                      {perso.nom}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Music className="w-5 h-5 text-red-500" />
                      <Heart className="w-5 h-5 text-pink-500" />
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section groupe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center"
        >
          <div className="text-center mb-6">
            <h2 className="leander-text text-4xl font-bold text-gray-800">Le Groupe</h2>
          </div>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Quatre personnalités radicalement différentes qui se sont réunies autour de leur passion commune pour la musique. 
            Chacun apporte sa propre énergie et ses propres défis au groupe, créant une dynamique unique qui va 
            captiver Lulla et changer sa vie à jamais.
          </p>
          
          <div className="mt-8 flex justify-center">
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg"
            >
              <span>Découvrir l'histoire</span>
              <Heart className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-700 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a 
                href="https://www.instagram.com/sparkle._game/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a 
                href="https://www.tiktok.com/@sparkle._game" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                TikTok
              </a>
            </div>
            <p className="leander-text text-sm text-white">
              © 2025 Velserinne & Morgiana – Sparkle.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
