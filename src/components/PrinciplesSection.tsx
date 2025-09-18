'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PrincipleData {
  id: string
  title: string
  subtitle: string
  content: string
  details: string[]
  icon: string
  color: string
}

const principlesData: PrincipleData[] = [
  {
    id: 'marxism-leninism',
    title: 'Dựa trên nền tảng chủ nghĩa Mác – Lênin',
    subtitle: 'Cơ sở lý luận, kim chỉ nam',
    content: 'Mọi tư tưởng, hành động phải dựa trên nền tảng chủ nghĩa Mác – Lênin, kết hợp với tư tưởng Hồ Chí Minh để định hướng con đường phát triển đúng đắn.',
    details: [
      'Cơ sở lý luận, kim chỉ nam cho mọi đường lối, chính sách',
      'Kết hợp với tư tưởng Hồ Chí Minh',
      'Định hướng con đường phát triển đúng đắn',
      'Vận dụng sáng tạo vào điều kiện Việt Nam'
    ],
    icon: '📖',
    color: 'from-red-600 to-red-800'
  },
  {
    id: 'independence-socialism',
    title: 'Giữ vững độc lập dân tộc',
    subtitle: 'CNXH gắn với độc lập dân tộc',
    content: 'CNXH gắn với độc lập dân tộc là đặc điểm nổi bật của cách mạng Việt Nam. Độc lập dân tộc là tiền đề để đi lên CNXH; CNXH là con đường bảo đảm độc lập dân tộc vững bền.',
    details: [
      'CNXH gắn với độc lập dân tộc là đặc điểm nổi bật',
      'Độc lập dân tộc là tiền đề để đi lên CNXH',
      'CNXH là con đường bảo đảm độc lập dân tộc vững bền',
      'Không thể tách rời hai nhiệm vụ này'
    ],
    icon: '🛡️',
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 'solidarity-learning',
    title: 'Đoàn kết, học tập kinh nghiệm các nước anh em',
    subtitle: 'Đoàn kết quốc tế là sức mạnh thời đại',
    content: 'Đoàn kết quốc tế là sức mạnh thời đại. Vừa tranh thủ sự giúp đỡ, vừa tiếp thu kinh nghiệm, song phải biết chọn lọc để phù hợp điều kiện Việt Nam.',
    details: [
      'Đoàn kết quốc tế là sức mạnh thời đại',
      'Tranh thủ sự giúp đỡ từ các nước anh em',
      'Tiếp thu kinh nghiệm có chọn lọc',
      'Phù hợp với điều kiện cụ thể của Việt Nam'
    ],
    icon: '🤝',
    color: 'from-green-600 to-green-800'
  },
  {
    id: 'build-defend',
    title: 'Xây phải đi đôi với chống',
    subtitle: 'Hai mặt gắn bó, bổ sung cho nhau',
    content: 'Xây: bồi đắp cái mới, tạo ra cơ sở vật chất – kỹ thuật, nền kinh tế, văn hóa, con người của CNXH. Chống: đấu tranh xóa bỏ tàn dư xã hội cũ. Hai mặt này gắn bó, bổ sung cho nhau.',
    details: [
      'Xây: bồi đắp cái mới, tạo cơ sở vật chất – kỹ thuật của CNXH',
      'Xây: phát triển nền kinh tế, văn hóa, con người mới',
      'Chống: xóa bỏ tàn dư xã hội cũ (áp bức, bất công, quan liêu...)',
      'Hai mặt gắn bó, bổ sung cho nhau'
    ],
    icon: '⚔️',
    color: 'from-purple-600 to-purple-800'
  }
]

interface PrinciplesSectionProps {
  onNext: () => void
  onBack: () => void
}

export default function PrinciplesSection({ onNext, onBack }: PrinciplesSectionProps) {
  const [currentPrinciple, setCurrentPrinciple] = useState(0)
  const [completedPrinciples, setCompletedPrinciples] = useState<Set<number>>(new Set())

  const nextPrinciple = () => {
    setCompletedPrinciples(prev => new Set([...prev, currentPrinciple]))

    if (currentPrinciple < principlesData.length - 1) {
      setTimeout(() => {
        setCurrentPrinciple(prev => prev + 1)
      }, 500)
    }
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative overflow-hidden flex flex-col">
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="absolute top-8 left-8 z-20 bg-white/90 hover:bg-white text-slate-800 px-6 py-3 rounded-full font-bold shadow-xl transition-all duration-300 flex items-center space-x-2 cursor-pointer hover:scale-105 ease-in-out"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xl">←</span>
        <span>Quay lại</span>
      </motion.button>
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />

        {/* Floating elements */}
        {[...Array(15)].map((_, i) => {
          const x = (i * 23.7) % 100;
          const y = (i * 31.3) % 100;
          const duration = 4 + (i % 3);
          const delay = (i % 6) * 0.33;

          return (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white rounded-full opacity-20"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 flex-1 flex flex-col p-4 md:p-6">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Nguyên Tắc Xây Dựng CNXH Trong Thời Kỳ Quá Độ
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Bốn nguyên tắc cốt lõi trong việc xây dựng chủ nghĩa xã hội trong thời kỳ quá độ ở Việt Nam
          </p>
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          className="max-w-2xl mx-auto mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex justify-center space-x-3 mb-2">
            {principlesData.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full border-2 ${index === currentPrinciple
                  ? 'bg-yellow-400 border-yellow-400'
                  : completedPrinciples.has(index)
                    ? 'bg-green-500 border-green-500'
                    : 'bg-transparent border-white'
                  }`}
                animate={index === currentPrinciple ? {
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(251, 191, 36, 0.7)",
                    "0 0 0 8px rgba(251, 191, 36, 0)",
                    "0 0 0 0 rgba(251, 191, 36, 0.7)"
                  ]
                } : {}}
                transition={{
                  duration: 1.5,
                  repeat: index === currentPrinciple ? Infinity : 0,
                }}
              />
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm">
            Nguyên tắc {currentPrinciple + 1} / {principlesData.length}
          </p>
        </motion.div>

        {/* Main principle display */}
        <div className="flex-1 flex flex-col max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPrinciple}
              className="flex-1 flex flex-col gap-4"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              {/* Header Card */}
              <motion.div
                className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-xl border border-gray-200"
                initial={{ scale: 0.8, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.8 }}
              >
                <div className="text-center">
                  {/* Icon */}
                  <motion.div
                    className="text-5xl md:text-6xl mb-4"
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {principlesData[currentPrinciple].icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 leading-tight">
                    {principlesData[currentPrinciple].title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-base md:text-lg text-gray-600 mb-4 italic font-medium">
                    {principlesData[currentPrinciple].subtitle}
                  </p>

                  {/* Content */}
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    {principlesData[currentPrinciple].content}
                  </p>
                </div>
              </motion.div>

              {/* Details Card */}
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 md:p-6 border border-blue-200 shadow-lg"
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
              >
                <h4 className="text-lg md:text-xl font-bold text-blue-800 mb-4 flex items-center justify-center">
                  <span className="mr-3 text-2xl">📋</span>
                  <span>Các điểm chính</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {principlesData[currentPrinciple].details.map((detail, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className="flex items-start space-x-3">
                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 text-sm md:text-base font-medium leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Action button */}
              <motion.div
                className="flex justify-center mt-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  onClick={nextPrinciple}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentPrinciple < principlesData.length - 1 ? (
                    <>
                      <span className="mr-2">✅</span>
                      Nguyên tắc tiếp theo
                    </>
                  ) : (
                    <>
                      <span className="mr-2">🎯</span>
                      Hoàn thành tất cả
                    </>
                  )}
                </motion.button>
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Completion message and next button */}
        {completedPrinciples.size === principlesData.length && (
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-green-200 shadow-xl mb-4">
              <div className="text-center">
                <motion.div
                  className="text-4xl md:text-5xl mb-3"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎯
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3">
                  Đã nắm vững 4 nguyên tắc cốt lõi!
                </h3>
                <p className="text-gray-700 text-base md:text-lg">
                  Bạn đã hiểu rõ các nguyên tắc xây dựng chủ nghĩa xã hội ở Việt Nam.
                </p>
              </div>
            </div>

            <div className="text-center">
              <motion.button
                onClick={onNext}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(251, 146, 60, 0.6)",
                    "0 0 30px rgba(251, 146, 60, 0.8)",
                    "0 0 20px rgba(251, 146, 60, 0.6)"
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
                <span className="mr-2">🚀</span>
                Tiếp theo: Kết luận
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
