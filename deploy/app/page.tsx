'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Download, Instagram, MessageCircle, Users } from 'lucide-react'

export default function Home() {
  const handleDownload = (fileName: string) => {
    // Utiliser l'API route pour télécharger le fichier
    const downloadUrl = `/api/download?file=${encodeURIComponent(fileName)}`;
    
    // Sur mobile, utiliser window.open pour forcer le téléchargement
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.open(downloadUrl, '_blank');
    } else {
      // Sur desktop, créer un lien et le cliquer
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = fileName;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-fixed md:bg-fixed bg-scroll" style={{ backgroundImage: "url(/images/background/texture-fond-papier.png)", backgroundSize: "cover" }}>
      {/* Header */}
      <header className="bg-red-600 h-16 md:h-20 shadow-lg relative z-[100] sticky top-0">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-full">
            {/* Boutons réseaux sociaux */}
            <div className="flex space-x-2 sm:space-x-4 relative z-[110]">
              <a 
                href="https://www.instagram.com/sparkle._game/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:scale-110 transition-all duration-300 relative z-[110] cursor-pointer bg-transparent p-1 rounded"
              >
                <Image 
                  src="/images/boutton/insta 1.png" 
                  alt="Instagram" 
                  width={48} 
                  height={48}
                  className="w-12 h-12 pointer-events-none"
                />
              </a>
              <a 
                href="https://www.tiktok.com/@sparkle._game" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:scale-110 transition-all duration-300 relative z-[110] cursor-pointer bg-transparent p-1 rounded"
              >
                <Image 
                  src="/images/boutton/tiktok 1.png" 
                  alt="TikTok" 
                  width={48} 
                  height={48}
                  className="w-12 h-12 pointer-events-none"
                />
              </a>
            </div>

            {/* Logo SPARKLE centré */}
            <div className="flex-1 flex justify-center items-center mt-1 md:mt-2">
              <Image 
                src="/images/logo/logo_sparkle.png?v=2" 
                alt="SPARKLE" 
                width={350} 
                height={150}
                className="h-12 md:h-16 lg:h-20 w-auto"
                priority
              />
            </div>

            {/* Boutons de navigation */}
            <div className="flex space-x-1 sm:space-x-2">
              <Link 
                href="/personnages" 
                className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-red-600 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-red-700 transition-colors duration-300 shadow-md"
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Personnages</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Section Personnages */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-1 -mt-[200px] sm:-mt-[400px] md:-mt-[570px] pb-8 relative z-10">
        <div className="relative -mt-[100px] sm:-mt-[200px] md:-mt-[400px]">
          <div className="relative w-full h-[800px] sm:h-[1200px] md:h-[1800px] rounded-lg overflow-hidden">
            <Image 
              src="/images/background/image des perso.png" 
              alt="Personnages du jeu" 
              width={1500} 
              height={2000}
              className="w-full h-full object-contain max-w-7xl mx-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Section principale avec fond papier */}
      <div className="relative -mt-[300px] sm:-mt-[600px] md:-mt-[940px]">
        <Image 
          src="/images/background/fondpapier 1.png" 
          alt="Fond papier" 
          width={1200} 
          height={800}
          className="w-full max-w-6xl mx-auto h-auto object-cover object-top" 
          priority
        />
        <div className="absolute inset-0 p-3 sm:p-4 md:p-6 lg:p-10">
          <div className="mb-4 sm:mb-8 relative ml-0 sm:ml-2 md:ml-4 lg:ml-8 -mt-2 sm:-mt-4 md:-mt-6">
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="md:col-span-2">
                <div className="leander-text text-justify w-full max-w-full md:max-w-5xl ml-6 sm:ml-8 md:ml-14 lg:ml-20 xl:ml-28 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-3 sm:mt-4 md:mt-6 lg:mt-10 px-2 sm:px-0" style={{ lineHeight: "1.8" }}>
                  <p>Jeune étudiante en photographie, vous jonglez entre les études, la danse classique et son travail au café. Malgré tout, l'occasion de devenir la photographe d'un groupe de musique amateur s'offre à vous. Et alors que vous pensiez que ce travail ne serait qu'un passe-temps dans votre emploi du temps déjà chargé, des liens finiront par se tisser. Ce groupe, composé de quatre membres radicalement différents, va finir par prendre une place importante dans votre vie. Entre sentiments naissants, passé difficile et projets de carrière différents, vous n'êtes pas au bout de vos surprises…</p>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Scotche à l'extrémité du papier fond */}
          <div className="absolute -bottom-8 sm:-bottom-12 right-2 sm:right-4">
            <img
              src="/images/decoration/scotche.png?v=3"
              alt="Scotche décoratif"
              className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain transform -rotate-45"
            />
          </div>
        </div>
      </div>

      {/* Section Téléchargement */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="text-center">
          <h2 className="leander-text text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">Télécharger maintenant !</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <div className="bg-slate-700 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
              <div className="text-center">
                <Download className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 text-white" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">Version PC</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">Pour Windows</p>
                <button 
                  onClick={() => handleDownload('Sparkle-1.0-pc.zip')}
                  type="button"
                  className="w-full bg-red-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-semibold hover:bg-red-700 active:bg-red-800 transition-colors duration-300 cursor-pointer relative z-20 touch-manipulation"
                >
                  Télécharger
                </button>
              </div>
            </div>
            <div className="bg-slate-700 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
              <div className="text-center">
                <Download className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 text-white" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">Version Mac</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">Pour macOS</p>
                <button 
                  onClick={() => handleDownload('Sparkle-1.0-mac.zip')}
                  type="button"
                  className="w-full bg-red-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-semibold hover:bg-red-700 active:bg-red-800 transition-colors duration-300 cursor-pointer relative z-20 touch-manipulation"
                >
                  Télécharger
                </button>
              </div>
            </div>
            <div className="bg-slate-700 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
              <div className="text-center">
                <Download className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 text-white" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">Version Android</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">Pour Android</p>
                <button 
                  onClick={() => handleDownload('sparkle.androide-release.apk')}
                  type="button"
                  className="w-full bg-red-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-semibold hover:bg-red-700 active:bg-red-800 transition-colors duration-300 cursor-pointer relative z-20 touch-manipulation"
                >
                  Télécharger
                </button>
              </div>
            </div>
          </div>
        </div>
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
            
            {/* Copyright */}
            <p className="leander-text text-sm font-medium" style={{ color: 'white' }}>
              © 2025 Velserinne & Morgiana – Sparkle.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
