'use client'

import { motion } from 'framer-motion'

interface FinalPageProps {
  onReplay: () => void
  onBack: () => void
  onQuiz: () => void
}

export default function FinalPage({ onReplay, onBack, onQuiz }: FinalPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden flex items-center justify-center">
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="absolute top-8 left-8 z-20 bg-white/90 hover:bg-white text-blue-800 px-6 py-3 rounded-full font-bold shadow-xl transition-all duration-300 flex items-center space-x-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xl">←</span>
        <span>Quay lại</span>
      </motion.button>
      {/* Background stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => {
          const x = (i * 7.3) % 100;
          const y = (i * 11.7) % 100;
          const duration = 2 + (i % 4);
          const delay = (i % 10) * 0.2;

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              animate={{
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

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
          style={{ left: '10%', top: '20%' }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          style={{ right: '15%', bottom: '25%' }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* Main content container */}
        <motion.div
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          {/* Celebration emoji */}
          <motion.div
            className="text-8xl mb-8"
            animate={{
              rotateZ: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🎓
          </motion.div>

          {/* Thank you message */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Xin cảm ơn thầy cô và các bạn
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              đã lắng nghe
            </span>
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 1 }}
          />

          {/* Summary message */}
          <motion.p
            className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Chúng ta đã cùng nhau khám phá hành trình tư tưởng độc lập dân tộc từ các tiền nhân
            đến Chủ tịch Hồ Chí Minh, con đường quá độ lên CNXH với nhiệm vụ và nguyên tắc xây dựng
            xã hội dân giàu, nước mạnh, dân chủ, công bằng, văn minh.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.button
              onClick={onQuiz}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl border-2 border-white/20 cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(34, 197, 94, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(34, 197, 94, 0.3)",
                  "0 0 40px rgba(34, 197, 94, 0.6)",
                  "0 0 20px rgba(34, 197, 94, 0.3)"
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
              📝 Làm Quiz - Kiểm tra hiểu biết
            </motion.button>

            <motion.button
              onClick={onReplay}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl border-2 border-white/20 cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 40px rgba(59, 130, 246, 0.6)",
                  "0 0 20px rgba(59, 130, 246, 0.3)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }
              }}
            >
              🔄 Replay - Xem lại từ đầu
            </motion.button>
          </motion.div>

          {/* Additional decorative elements */}
          <motion.div
            className="flex justify-center space-x-8 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            {['🇻🇳', '📚', '⭐', '🎯', '🎓'].map((emoji, index) => (
              <motion.div
                key={index}
                className="text-3xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer credits */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <p className="text-gray-500 text-sm">
            Được tạo với ❤️ cho môn Tư tưởng Hồ Chí Minh
          </p>
        </motion.div>
      </div>

      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const x = (i * 5) % 100;
          const xMovement = (i % 2 === 0 ? 1 : -1) * (50 + (i % 5) * 30);
          const duration = 8 + (i % 3);
          const delay = (i % 8) * 0.625;

          return (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white/10 rounded-full"
              style={{
                left: `${x}%`,
                bottom: '-20px',
              }}
              animate={{
                y: [0, -800],
                x: [0, xMovement],
                opacity: [0, 0.6, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeOut"
              }}
            />
          );
        })}
      </div>
    </div>
  )
}
