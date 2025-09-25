'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FieldData {
  id: string
  title: string
  icon: string
  color: string
  tasks: string[]
  description: string
}

const fieldsData: FieldData[] = [
  {
    id: 'politics',
    title: 'Chính trị',
    icon: '🏛️',
    color: 'from-red-500 to-red-700',
    description: 'Xây dựng nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân',
    tasks: [
      'Giữ vững và tăng cường vai trò lãnh đạo của Đảng Cộng sản',
      'Xây dựng Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân',
      'Bảo đảm quyền làm chủ của nhân dân, thực hành dân chủ rộng rãi',
      'Giữ vững độc lập dân tộc, bảo vệ Tổ quốc'
    ]
  },
  {
    id: 'economy',
    title: 'Kinh tế',
    icon: '🏭',
    color: 'from-green-500 to-green-700',
    description: 'Xây dựng nền kinh tế nhiều thành phần vận hành theo cơ chế thị trường định hướng XHCN',
    tasks: [
      'Xóa bỏ tàn tích kinh tế phong kiến, thực dân',
      'Phát triển lực lượng sản xuất, tiến hành công nghiệp hóa – hiện đại hóa',
      'Xây dựng nền kinh tế nhiều thành phần vận hành theo cơ chế thị trường định hướng XHCN',
      'Kinh tế nhà nước giữ vai trò chủ đạo; kinh tế tập thể được củng cố'
    ]
  },
  {
    id: 'culture',
    title: 'Văn hóa',
    icon: '📚',
    color: 'from-blue-500 to-blue-700',
    description: 'Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc',
    tasks: [
      'Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc',
      'Xóa bỏ tàn dư văn hóa lạc hậu, mê tín, hủ tục',
      'Tiếp thu tinh hoa văn hóa nhân loại',
      'Đẩy mạnh giáo dục – đào tạo, khoa học – công nghệ để nâng cao dân trí'
    ]
  },
  {
    id: 'social',
    title: 'Quan hệ xã hội',
    icon: '👥',
    color: 'from-purple-500 to-purple-700',
    description: 'Thực hiện công bằng xã hội, xây dựng con người mới XHCN',
    tasks: [
      'Thực hiện công bằng xã hội, chăm lo đời sống nhân dân',
      'Xóa bỏ áp bức, bất công, thực hiện bình đẳng giới',
      'Giữ gìn, củng cố khối đại đoàn kết toàn dân tộc',
      'Xây dựng con người mới XHCN – có tri thức, đạo đức, ý thức công dân'
    ]
  }
]

interface TransitionSectionProps {
  onNext: () => void
  onBack: () => void
}

export default function TransitionSection({ onNext, onBack }: TransitionSectionProps) {
  const [selectedField, setSelectedField] = useState<string | null>(null)
  const [completedFields, setCompletedFields] = useState<Set<string>>(new Set())
  const [showRoadmap, setShowRoadmap] = useState(false)

  const handleFieldClick = (fieldId: string) => {
    setSelectedField(fieldId)
    setCompletedFields(prev => new Set([...prev, fieldId]))
  }

  const closeModal = () => {
    setSelectedField(null)
    if (completedFields.size === fieldsData.length && !showRoadmap) {
      setTimeout(() => setShowRoadmap(true), 1000)
    }
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden flex flex-col">
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="absolute top-4 left-4 z-20 bg-white/90 hover:bg-white text-purple-800 px-4 py-2 rounded-full font-bold shadow-lg transition-all duration-300 flex items-center space-x-1 cursor-pointer hover:scale-105 ease-in-out"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-lg">←</span>
        <span className="text-sm">Quay lại</span>
      </motion.button>
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Animated background particles */}
        {[...Array(30)].map((_, i) => {
          const x = (i * 13.7) % 100; // Distribute evenly
          const y = (i * 17.3) % 100; // Different multiplier for y
          const duration = 3 + (i % 3); // Duration between 3-5
          const delay = (i % 10) * 0.2; // Delay between 0-1.8

          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
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
        {/* Title */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotateY: [0, 10, -10, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Nhiệm Vụ Thời Kỳ Quá Độ
            </h2>
          </motion.div>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <p className="text-sm md:text-base lg:text-lg text-purple-100 max-w-4xl mx-auto leading-relaxed font-medium">
            Đấu tranh cải tạo, xóa bỏ tàn tích của chế độ xã hội cũ, xây dựng các yếu tố mới
            <br />
            <span className="text-purple-200">phù hợp với quy luật tiến lên CNXH trên 4 lĩnh vực</span>
          </p>
        </motion.div>

        {/* Main roadmap */}
        <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full">
          {/* Central road path */}


          {/* Field cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {fieldsData.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.5 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="flex"
              >
                <motion.div
                  className={`bg-gradient-to-br ${field.color} rounded-xl p-4 cursor-pointer shadow-xl border-2 border-white/30 relative overflow-hidden flex-1 flex flex-col backdrop-blur-sm`}
                  whileHover={{
                    scale: 1.05,
                    rotateZ: 2,
                    rotateY: 5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleFieldClick(field.id)}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />

                  {/* Completion indicator */}
                  {completedFields.has(field.id) && (
                    <motion.div
                      className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
                    >
                      <motion.span
                        className="text-white text-xs font-bold"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ✓
                      </motion.span>
                    </motion.div>
                  )}

                  <div className="relative z-10 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <motion.div
                        className="text-3xl md:text-4xl mb-3"
                        animate={{
                          rotateY: completedFields.has(field.id) ? [0, 360] : 0,
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          rotateY: { duration: 1, delay: completedFields.has(field.id) ? 0.5 : 0 },
                          scale: { duration: 3, repeat: Infinity, delay: index * 0.5 }
                        }}
                      >
                        {field.icon}
                      </motion.div>
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 drop-shadow-md">
                        {field.title}
                      </h3>
                      <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-3 font-medium">
                        {field.description}
                      </p>
                    </div>

                    <motion.div
                      className="mt-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="bg-white/25 backdrop-blur-sm rounded-lg py-2 px-3 border border-white/20">
                        <span className="text-white text-xs font-bold flex items-center justify-center">
                          <span className="mr-2">🔍</span>
                          Khám phá nhiệm vụ
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <motion.div
          className="max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-3">
                <motion.span
                  className="text-2xl"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  📊
                </motion.span>
                <span className="text-white font-bold text-sm">Tiến độ khám phá:</span>
              </div>
              <motion.span
                className="text-purple-200 text-base font-bold bg-white/10 px-3 py-1.5 rounded-full"
                animate={{ scale: completedFields.size === fieldsData.length ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.5, repeat: completedFields.size === fieldsData.length ? Infinity : 0 }}
              >
                {completedFields.size}/{fieldsData.length}
              </motion.span>
            </div>

            <div className="relative">
              <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden shadow-inner">
                <motion.div
                  className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 h-3 rounded-full relative overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: `${(completedFields.size / fieldsData.length) * 100}%` }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>

              {/* Completion percentage */}
              <motion.div
                className="text-center mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                <span className="text-white/80 text-sm font-medium">
                  {Math.round((completedFields.size / fieldsData.length) * 100)}% hoàn thành
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Detailed modal */}
        <AnimatePresence>
          {selectedField && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
                initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
                transition={{ type: "spring", duration: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                {fieldsData
                  .filter(field => field.id === selectedField)
                  .map(field => (
                    <div key={field.id}>
                      <div className="text-center mb-4">
                        <div className="text-6xl mb-2">{field.icon}</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          Lĩnh vực {field.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {field.description}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                          <span className="mr-3">🎯</span> Nhiệm vụ chính:
                        </h4>
                        <div className="grid gap-4">
                          {field.tasks.map((task, index) => (
                            <motion.div
                              key={index}
                              className="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-500"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="flex items-start space-x-3">
                                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                  {index + 1}
                                </span>
                                <span className="text-gray-700 text-sm font-medium">
                                  {task}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="text-center">
                        <button
                          onClick={closeModal}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-semibold text-sm transition-colors"
                        >
                          Hoàn thành ✓
                        </button>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success message and next button */}
        {showRoadmap && (
          <motion.div
            className="max-w-4xl mx-auto text-center absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <motion.div
              className="bg-white/15 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-white/30 mb-4 shadow-xl"
              animate={{
                boxShadow: [
                  "0 0 30px rgba(147, 51, 234, 0.3)",
                  "0 0 50px rgba(236, 72, 153, 0.4)",
                  "0 0 30px rgba(147, 51, 234, 0.3)"
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
              <motion.div
                className="flex justify-center mb-4"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-4xl md:text-5xl">🎉</span>
              </motion.div>

              <h3 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Xuất sắc! Hoàn thành khám phá 4 lĩnh vực!
              </h3>

              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              <p className="text-purple-100 text-sm md:text-base leading-relaxed font-medium">
                Bạn đã tìm hiểu xong các nhiệm vụ quan trọng trong quá trình
                <br className="hidden md:block" />
                <span className="text-pink-200 font-semibold">quá độ lên chủ nghĩa xã hội</span> 🇻🇳
              </p>
            </motion.div>

            <motion.button
              onClick={onNext}
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white px-6 md:px-8 py-3 rounded-full font-bold text-sm md:text-base shadow-xl border border-white/20 cursor-pointer"
              whileHover={{
                scale: 1.05,
                rotateZ: 1
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 25px rgba(147, 51, 234, 0.6)",
                  "0 0 40px rgba(236, 72, 153, 0.8)",
                  "0 0 25px rgba(147, 51, 234, 0.6)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <span className="flex items-center justify-center space-x-3">
                <span>🏗️</span>
                <span>Tiếp theo: Nguyên tắc xây dựng</span>
                <span>→</span>
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
