'use client'

import { motion } from 'framer-motion'

interface FinalPageProps {
  onReplay: () => void
  onBack: () => void
  onQuiz: () => void
}

export default function FinalPage({ onReplay, onBack, onQuiz }: FinalPageProps) {
  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden flex items-center justify-center">
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="absolute top-4 left-4 z-20 bg-white/90 hover:bg-white text-blue-800 px-4 py-2 rounded-full font-bold shadow-lg transition-all duration-300 flex items-center space-x-1"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-lg">←</span>
        <span className="text-sm">Quay lại</span>
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

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        {/* Main content container */}
        <motion.div
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          {/* Celebration emoji */}
          <motion.div
            className="text-6xl mb-6"
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
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
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
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 1 }}
          />

          {/* AI usage summary */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 shadow-lg mb-6 text-left max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-center mb-2">
              <span className="text-xl mr-2">🤖</span>
              <h2 className="text-base md:text-lg font-bold text-white">Sử dụng AI trong bài trình bày</h2>
            </div>
            <ul className="list-disc pl-5 space-y-1.5 text-xs md:text-sm text-gray-300">
              <li><span className="font-semibold text-white">Mục đích</span>: Ứng dụng AI để hệ thống hóa kiến thức, trực quan hóa và tối ưu trải nghiệm học.</li>
              <li><span className="font-semibold text-white">ChatGPT</span>: Tìm hiểu nội dung, tóm lược tài liệu, gợi ý cấu trúc trình bày.</li>
              <li><span className="font-semibold text-white">Cursor</span>: Hỗ trợ viết, chỉnh sửa và tối ưu code web nhanh chóng.</li>
            </ul>
          </motion.div>

          {/* Summary message */}
          <motion.p
            className="text-base text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.button
              onClick={onQuiz}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-7 py-3 rounded-full font-bold text-sm shadow-xl border border-white/20 cursor-pointer"
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
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-7 py-3 rounded-full font-bold text-sm shadow-xl border border-white/20 cursor-pointer"
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

        </motion.div>

        {/* Footer credits */}
        <motion.div
          className="hidden md:block mt-4 text-center"
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
