'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import TypingEffect from './TypingEffect'

interface ConclusionSectionProps {
  onNext: () => void
  onBack: () => void
}

export default function ConclusionSection({ onNext, onBack }: ConclusionSectionProps) {
  const [showConclusion, setShowConclusion] = useState(false)
  const [showQuote, setShowQuote] = useState(false)
  const [showNextButton, setShowNextButton] = useState(false)

  const conclusionText = "Con đường quá độ lên CNXH ở Việt Nam là con đường tất yếu, lâu dài, phức tạp, bỏ qua TBCN nhưng tiếp thu thành tựu văn minh nhân loại, nhằm xây dựng xã hội dân giàu, nước mạnh, dân chủ, công bằng, văn minh."

  const quote = "Không có gì quý hơn độc lập, tự do"

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConclusion(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleConclusionComplete = () => {
    setTimeout(() => {
      setShowQuote(true)
    }, 1000)
  }

  const handleQuoteComplete = () => {
    setTimeout(() => {
      setShowNextButton(true)
    }, 2000)
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-red-900 via-yellow-700 to-red-800 relative overflow-hidden flex flex-col">
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="absolute top-8 left-8 z-20 bg-white/90 hover:bg-white text-red-800 px-6 py-3 rounded-full font-bold shadow-xl transition-all duration-300 flex items-center space-x-2 cursor-pointer hover:scale-105 ease-in-out"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xl">←</span>
        <span>Quay lại</span>
      </motion.button>
      {/* Radial light effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-yellow-400/30 via-transparent to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Golden rays emanating from center */}
      <div className="absolute inset-0">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 bg-gradient-to-t from-transparent via-yellow-400/60 to-transparent"
            style={{
              height: '200%',
              left: '50%',
              top: '-50%',
              transformOrigin: 'bottom',
              transform: `rotate(${i * 22.5}deg)`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scaleY: [0.6, 1.4, 0.6],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating light particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => {
          const x = (i * 12.3) % 100;
          const y = (i * 19.7) % 100;
          const duration = 3 + (i % 3);
          const delay = (i % 8) * 0.25;

          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-6xl mx-auto px-4 md:px-6 text-center">


        {/* Main conclusion */}
        <AnimatePresence>
          {showConclusion && (
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
            >

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 border-2 border-yellow-400/30 shadow-xl max-w-4xl mx-auto">

                {/* Title */}
                <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-100 mb-8"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Kết Luận: Con Đường Quá Độ Lên CNXH
                </motion.h2>
                <motion.div
                  className="text-4xl md:text-5xl mb-4"
                  animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  🎯
                </motion.div>

                <div className="text-sm md:text-base lg:text-lg text-white leading-relaxed font-medium">
                  <TypingEffect
                    text={conclusionText}
                    speed={35}
                    onComplete={handleConclusionComplete}
                    className="text-white"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Famous quote */}
        <AnimatePresence>
          {showQuote && (
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "spring" }}
            >
              <motion.div
                className="relative"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Glowing aura */}
                <motion.div
                  className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <div className="relative bg-gradient-to-r from-yellow-500/20 via-yellow-400/30 to-yellow-500/20 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-yellow-400/50 shadow-xl max-w-3xl mx-auto">
                  <motion.div
                    className="mb-3 filter drop-shadow-lg flex justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src="/images/Ho_Chi_Minh.jpg"
                      alt="Chủ tịch Hồ Chí Minh"
                      width={80}
                      height={80}
                      className="rounded-full border-2 border-yellow-400 shadow-lg"
                    />
                  </motion.div>

                  <blockquote className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-100 leading-tight">
                    <TypingEffect
                      text={`"${quote}"`}
                      speed={60}
                      onComplete={handleQuoteComplete}
                      className="text-yellow-100"
                    />
                  </blockquote>

                  <motion.div
                    className="text-sm md:text-base text-yellow-200 mt-3 italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4 }}
                  >
                    - Chủ tịch Hồ Chí Minh -
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Final light burst effect */}
        {showQuote && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'left center',
                  transform: `rotate(${i * 45}deg)`,
                }}
                animate={{
                  scaleX: [0, 2, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        )}

        {/* Next button */}
        <AnimatePresence>
          {showNextButton && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="mt-4"
            >
              <motion.button
                onClick={onNext}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-red-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl border-2 border-yellow-300"
                whileHover={{
                  scale: 1.05,
                  rotateZ: [0, -1, 1, 0],
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(251, 191, 36, 0.6)",
                    "0 0 30px rgba(251, 191, 36, 0.8)",
                    "0 0 20px rgba(251, 191, 36, 0.6)"
                  ],
                  y: [0, -3, 0],
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                🎉 Kết thúc hành trình
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
