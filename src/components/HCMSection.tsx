'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface IdeaData {
  id: string
  title: string
  content: string
  icon: string
  position: { x: number; y: number }
  color: string
}

const ideasData: IdeaData[] = [
  {
    id: 'independence',
    title: 'Độc lập dân tộc',
    content: 'Độc lập là quyền thiêng liêng, bất khả xâm phạm của các dân tộc. "Không có gì quý hơn độc lập, tự do". Độc lập phải thật sự, hoàn toàn, triệt để - bao gồm chính trị, kinh tế, quân sự, ngoại giao.',
    icon: '🏛️',
    position: { x: -50, y: -150 },
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'people-center',
    title: 'Nhân dân là trung tâm',
    content: 'Lấy nhân dân làm gốc, nhân dân là chủ thể sáng tạo lịch sử. Độc lập phải gắn với hạnh phúc, đời sống thực tế của dân: "Làm cho dân có ăn, có mặc, có chỗ ở, có học hành".',
    icon: '👥',
    position: { x: 150, y: -50 },
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'socialism',
    title: 'Gắn với CNXH',
    content: 'Cách mạng giải phóng dân tộc muốn thắng lợi phải đi theo con đường cách mạng vô sản. Chỉ có cách mạng vô sản mới đảm bảo giải phóng dân tộc triệt để.',
    icon: '⚖️',
    position: { x: -50, y: 90 },
    color: 'from-green-500 to-green-700'
  },
  {
    id: 'international',
    title: 'Phong trào thế giới',
    content: 'Cách mạng thuộc địa có thể nổ ra và thắng lợi trước cách mạng ở chính quốc. Thắng lợi Cách mạng Tháng Tám 1945 ở Việt Nam có ý nghĩa cổ vũ phong trào thuộc địa toàn thế giới.',
    icon: '🌍',
    position: { x: -250, y: -50 },
    color: 'from-purple-500 to-purple-700'
  }
]

interface HCMSectionProps {
  onNext: () => void
  onBack: () => void
}

export default function HCMSection({ onNext, onBack }: HCMSectionProps) {
  const [selectedIdea, setSelectedIdea] = useState<string | null>(null)
  const [showIdeas, setShowIdeas] = useState(false)
  const [showNextButton, setShowNextButton] = useState(false)

  const handleCenterClick = () => {
    setShowIdeas(true)
    setTimeout(() => setShowNextButton(true), 3000)
  }

  return (
    <div className="h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-700 relative overflow-hidden flex items-center justify-center">
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="absolute top-4 left-4 z-20 bg-white/90 hover:bg-white text-red-800 px-4 py-2 rounded-full font-bold shadow-lg transition-all duration-300 flex items-center space-x-1 cursor-pointer hover:scale-105 ease-in-out"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-lg">←</span>
        <span className="text-sm">Quay lại</span>
      </motion.button>

      {/* Simplified background with floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Simplified Title - Hidden when ideas are shown */}
        <AnimatePresence>
          {!showIdeas && (
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30, transition: { duration: 0.5 } }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-1"
                animate={!showIdeas ? {
                  textShadow: [
                    "0 0 20px rgba(251, 191, 36, 0.5)",
                    "0 0 40px rgba(251, 191, 36, 0.8)",
                    "0 0 20px rgba(251, 191, 36, 0.5)"
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                TƯ TƯỞNG HỒ CHÍ MINH
              </motion.h2>
              <motion.h3
                className="text-sm md:text-base font-semibold text-yellow-300/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                VỀ ĐỘC LẬP DÂN TỘC
              </motion.h3>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Central Portrait */}
        <motion.div
          className="relative mb-4 cursor-pointer"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, type: "spring", stiffness: 100 }}
          onClick={handleCenterClick}
        >
          <motion.div
            className="w-52 h-52 mx-auto rounded-full overflow-hidden relative group"
            whileHover={{ scale: 1.05 }}
            animate={showIdeas ? {} : {
              boxShadow: [
                "0 0 40px rgba(251, 191, 36, 0.4), 0 0 80px rgba(251, 191, 36, 0.2)",
                "0 0 60px rgba(251, 191, 36, 0.6), 0 0 120px rgba(251, 191, 36, 0.4)",
                "0 0 40px rgba(251, 191, 36, 0.4), 0 0 80px rgba(251, 191, 36, 0.2)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {/* Multiple border layers for depth */}
            <div className="absolute inset-0 rounded-full border-3 border-yellow-300/50 z-10"></div>
            <div className="absolute inset-2 rounded-full border-2 border-yellow-400/70 z-10"></div>

            <Image
              src="/images/Ho_Chi_Minh.jpg"
              alt="Hồ Chí Minh"
              width={208}
              height={208}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              priority
            />

            {/* Enhanced overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-red-500/20"></div>
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-yellow-400/10 to-yellow-600/30"></div>

            {/* Rotating border effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent"
              style={{
                background: "conic-gradient(from 0deg, transparent, rgba(251, 191, 36, 0.8), transparent)",
                mask: "radial-gradient(circle, transparent 98%, black 100%)",
                WebkitMask: "radial-gradient(circle, transparent 98%, black 100%)"
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {!showIdeas && (
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.p
                className="text-yellow-200 text-sm font-medium bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block"
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [0.98, 1, 0.98]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨ Nhấp để khám phá tư tưởng ✨
              </motion.p>
            </motion.div>
          )}
        </motion.div>

        {/* Ideas bubbles */}
        <AnimatePresence>
          {showIdeas && ideasData.map((idea, index) => (
            <motion.div
              key={idea.id}
              className="absolute"
              style={{
                left: `calc(50% + ${idea.position.x}px)`,
                top: `calc(50% + ${idea.position.y}px)`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: idea.position.x,
                y: idea.position.y
              }}
              transition={{
                duration: 1,
                delay: index * 0.3,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div
                className={`w-40 h-28 bg-gradient-to-br ${idea.color} rounded-2xl p-3 cursor-pointer shadow-xl border-2 border-white/80 backdrop-blur-sm relative overflow-hidden group`}
                whileHover={{
                  scale: 1.08,
                  rotateZ: 1,
                  boxShadow: "0 16px 30px rgba(0,0,0,0.25)"
                }}
                onClick={() => setSelectedIdea(idea.id)}
              >
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)`
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />

                <div className="relative text-center h-full flex flex-col justify-center">
                  <motion.div
                    className="text-3xl mb-1"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {idea.icon}
                  </motion.div>
                  <h3 className="text-white font-bold text-xs leading-tight drop-shadow-lg">
                    {idea.title}
                  </h3>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-white/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Enhanced connection line */}
              <svg className="absolute inset-0 pointer-events-none" style={{ width: '100vw', height: '100vh' }}>
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${idea.position.x}px)`}
                  y2={`calc(50% + ${idea.position.y}px)`}
                  stroke="url(#gradient)"
                  strokeWidth="1.5"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FDE047" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#FDE047" stopOpacity="1" />
                    <stop offset="100%" stopColor="#FDE047" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Idea Detail Modal */}
        <AnimatePresence>
          {selectedIdea && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIdea(null)}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 max-w-xl w-full shadow-2xl max-h-[85vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                transition={{ type: "spring", duration: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                {ideasData
                  .filter(idea => idea.id === selectedIdea)
                  .map(idea => (
                    <div key={idea.id} className="text-center">
                      <motion.div
                        className="text-5xl mb-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        {idea.icon}
                      </motion.div>
                      <motion.h3
                        className="text-2xl font-bold text-gray-800 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {idea.title}
                      </motion.h3>
                      <motion.div
                        className="text-gray-700 text-sm leading-relaxed mb-6 text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <p className="mb-4">{idea.content}</p>
                      </motion.div>
                      <motion.button
                        onClick={() => setSelectedIdea(null)}
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors shadow-lg cursor-pointer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Đóng
                      </motion.button>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Next button */}
        {showNextButton && (
          <motion.div
            className="fixed bottom-4 right-4"
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
          >
            <motion.button
              onClick={onNext}
              className="relative bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-red-900 px-5 py-3 rounded-full font-bold text-sm shadow-xl overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 10px 30px rgba(251, 191, 36, 0.3)",
                  "0 15px 40px rgba(251, 191, 36, 0.5)",
                  "0 10px 30px rgba(251, 191, 36, 0.3)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
              <span className="relative z-10 text-xs">
                Tiếp theo: So sánh hai con đường →
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
