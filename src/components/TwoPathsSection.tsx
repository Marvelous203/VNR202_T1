'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PathData {
  id: string
  title: string
  shortName: string
  description: string
  advantages: string[]
  disadvantages: string[]
  hcmOpinion: string
  color: string
  icon: string
}

// Hai lựa chọn ban đầu
const initialPathsData: PathData[] = [
  {
    id: 'capitalism',
    title: 'Tư bản chủ nghĩa',
    shortName: 'TBCN',
    description: 'Phát triển theo mô hình phương Tây, với nền kinh tế thị trường tự do, dựa trên sở hữu tư nhân và nhà nước tư sản',
    advantages: [
      'Thúc đẩy nhanh quá trình công nghiệp hóa, hiện đại hóa, phát triển lực lượng sản xuất',
      'Tạo động lực cạnh tranh và phát triển khoa học kỹ thuật',
      'Tạo ra tầng lớp trí thức, công nhân mới, góp phần nâng cao dân trí',
      'Tạo cơ hội tiếp cận với các giá trị văn minh, khoa học, kỹ thuật phương Tây'
    ],
    disadvantages: [
      'Ở Việt Nam, giai cấp tư sản dân tộc nhỏ bé, yếu ớt, dễ bị thực dân khống chế',
      'TBCN gắn liền với chủ nghĩa đế quốc xâm lược, khó giải phóng triệt để dân tộc thuộc địa',
      'Nếu đi theo con đường này, Việt Nam dễ rơi vào lệ thuộc mới',
      'Không phù hợp với hoàn cảnh Việt Nam'
    ],
    hcmOpinion: 'Dựa vào tư sản mà cứu nước thì chẳng khác nào rước hổ về nhà. Con đường này không phù hợp với điều kiện Việt Nam.',
    color: 'from-blue-600 to-blue-800',
    icon: '🏭'
  },
  {
    id: 'socialism',
    title: 'Chủ nghĩa xã hội',
    shortName: 'CNXH',
    description: 'Xây dựng chế độ công hữu, nhân dân lao động làm chủ, do giai cấp công nhân lãnh đạo theo tư tưởng Mác-Lênin',
    advantages: [
      'Giải quyết triệt để mâu thuẫn dân tộc và mâu thuẫn giai cấp',
      'Đặt lợi ích của nhân dân lao động lên hàng đầu, thực hiện dân chủ rộng rãi',
      'Có sự ủng hộ của phong trào cộng sản và công nhân quốc tế',
      'Không chỉ giành độc lập mà còn mang lại tự do, hạnh phúc thật sự cho nhân dân'
    ],
    disadvantages: [
      'Quá trình xây dựng CNXH rất khó khăn, phức tạp',
      'Chưa có tiền lệ thành công ở một nước thuộc địa nông nghiệp như Việt Nam',
      'Đòi hỏi sự kiên trì, bản lĩnh chính trị cao',
      'Phải vừa học hỏi, vừa thử nghiệm, dễ vấp phải sai lầm'
    ],
    hcmOpinion: 'Muốn cứu nước và giải phóng dân tộc, không có con đường nào khác con đường cách mạng vô sản. Đây là con đường đúng đắn nhất.',
    color: 'from-red-600 to-red-800',
    icon: '⚖️'
  }
]

// Con đường quá độ - hiển thị sau khi hoàn thành 2 lựa chọn
const transitionPath: PathData = {
  id: 'transition-socialism',
  title: 'Quá độ lên CNXH ở Việt Nam',
  shortName: 'Quá độ CNXH',
  description: 'Bước chuyển đặc thù – từ một nước thuộc địa, nông nghiệp lạc hậu tiến thẳng lên CNXH, không qua giai đoạn phát triển tư bản chủ nghĩa',
  advantages: [
    'Tránh lệ thuộc vào ngoại bang và không rơi vào con đường phát triển tư bản chủ nghĩa đầy rủi ro',
    'Phù hợp với hoàn cảnh Việt Nam: dân tộc chủ yếu là nông dân, khao khát ruộng đất và tự do',
    'Cho phép kết hợp giữa xây dựng chính trị độc lập và cải biến xã hội theo hướng tiến bộ',
    'Tiến hành đồng thời kháng chiến và kiến quốc'
  ],
  disadvantages: [
    'Là con đường dài lâu, phức tạp, phải vừa học hỏi, vừa thử nghiệm',
    'Dễ vấp phải sai lầm do chưa có tiền lệ rõ ràng',
    'Đòi hỏi sự kiên trì, bản lĩnh chính trị và sự lãnh đạo đúng đắn',
    'Phải đối mặt với nhiều thách thức trong quá trình thực hiện'
  ],
  hcmOpinion: 'Con đường cách mạng vô sản là con đường tất yếu của dân tộc ta. Đây chính là sáng tạo lớn nhất, phù hợp nhất với đặc điểm lịch sử và xã hội Việt Nam.',
  color: 'from-green-600 to-green-800',
  icon: '🌱'
}

interface TwoPathsSectionProps {
  onNext: () => void
  onBack: () => void
}

export default function TwoPathsSection({ onNext, onBack }: TwoPathsSectionProps) {
  const [selectedPath, setSelectedPath] = useState<string | null>(null)
  const [exploredPaths, setExploredPaths] = useState<Set<string>>(new Set())
  const [showTransition, setShowTransition] = useState(false)
  const [showThirdPath, setShowThirdPath] = useState(false)
  const [showNextButton, setShowNextButton] = useState(false)

  const handlePathClick = (pathId: string) => {
    setSelectedPath(pathId)
    const newExploredPaths = new Set(exploredPaths)
    newExploredPaths.add(pathId)
    setExploredPaths(newExploredPaths)
  }

  const handleModalClose = () => {
    setSelectedPath(null)

    // Check if both initial paths have been explored
    if (exploredPaths.size === 2 && !showThirdPath) {
      setTimeout(() => {
        setShowTransition(true)
        setTimeout(() => {
          setShowThirdPath(true)
          setTimeout(() => setShowNextButton(true), 1500)
        }, 800)
      }, 300)
    }
  }

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden flex flex-col">
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="absolute top-8 left-8 z-20 bg-white/90 hover:bg-white text-gray-800 px-6 py-3 rounded-full font-bold shadow-xl transition-all duration-300 flex items-center space-x-2 cursor-pointer hover:scale-105 ease-in-out"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xl">←</span>
        <span>Quay lại</span>
      </motion.button>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 p-8 flex-1 flex flex-col">
        {/* Title */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hai Lựa Chọn Trước Dân Tộc
          </h2>
          <p className="text-base text-gray-300 max-w-4xl mx-auto mb-4">
            Đầu thế kỷ XX, dân tộc Việt Nam đứng trước hai khả năng lựa chọn con đường phát triển
          </p>
          {exploredPaths.size < 2 && (
            <motion.p
              className="text-yellow-400 font-semibold text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔍 Hãy khám phá từng lựa chọn để hiểu rõ hơn ({exploredPaths.size}/2 đã khám phá)
            </motion.p>
          )}
          {exploredPaths.size === 2 && !showTransition && (
            <motion.p
              className="text-green-400 font-semibold text-sm"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ✅ Đã khám phá xong! Chờ để xem lựa chọn của Hồ Chí Minh...
            </motion.p>
          )}
        </motion.div>

        {/* Fork in the road visualization */}
        {/* <div className="flex justify-center mb-16">
          <svg width="400" height="200" className="text-gray-400">
            <motion.path
              d="M 200 200 L 200 100 L 100 50"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M 200 100 L 300 50"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
          </svg>
        </div> */}

        {/* Path cards */}
        <div className="flex-1 flex items-center justify-center relative">
          {!showThirdPath ? (
            // Initial two paths
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {initialPathsData.map((path, index) => {
                const isExplored = exploredPaths.has(path.id)
                return (
                  <motion.div
                    key={path.id}
                    className="relative"
                    initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1 + index * 0.5 }}
                  >
                    {/* Exploration badge */}
                    {isExplored && (
                      <motion.div
                        className="absolute -top-3 -right-3 z-10 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                      >
                        ✓
                      </motion.div>
                    )}

                    <motion.div
                      className={`bg-gradient-to-br ${path.color} rounded-2xl p-6 cursor-pointer shadow-2xl border-4 ${isExplored ? 'border-green-400 shadow-green-400/50' : 'border-white/20 hover:border-white/40'} h-[350px] relative overflow-hidden transition-all duration-300`}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      onClick={() => handlePathClick(path.id)}
                      animate={isExplored ? {
                        boxShadow: [
                          "0 0 20px rgba(34, 197, 94, 0.3)",
                          "0 0 40px rgba(34, 197, 94, 0.5)",
                          "0 0 20px rgba(34, 197, 94, 0.3)"
                        ]
                      } : {}}
                      transition={{
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <div className="text-center mb-4">
                        <div className="text-6xl mb-4">{path.icon}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {path.title}
                        </h3>
                        <p className="text-sm text-white font-semibold mb-3">
                          ({path.shortName})
                        </p>
                        <p className="text-white/90 text-sm leading-relaxed px-2">
                          {path.description}
                        </p>
                      </div>

                      <motion.div
                        className="text-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className={`${isExplored ? 'bg-green-500/40 border-2 border-green-400' : 'bg-white/20 border-2 border-white/30'} rounded-xl py-3 px-6 inline-block transition-all duration-300 hover:scale-105`}>
                          <span className="text-white font-bold text-sm">
                            {isExplored ? '✅ Đã mở khóa - Xem lại' : '🔒 Nhấp để mở khóa'}
                          </span>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          ) : (
            // Show transition to third path
            <div className="w-full h-full flex flex-col items-center justify-center relative">
              {/* Compact explored paths */}
              <AnimatePresence>
                {showTransition && (
                  <motion.div
                    className="flex justify-center items-center gap-20 mb-8 relative"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 0.6, y: -80, scale: 0.8 }}
                    transition={{ duration: 1 }}
                  >
                    {initialPathsData.map((path, index) => (
                      <motion.div
                        key={path.id}
                        className="relative"
                        initial={{ scale: 1, y: 0 }}
                        animate={{ scale: 0.6, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      >
                        <motion.div
                          className={`bg-gradient-to-br ${path.color} rounded-xl p-2 shadow-lg border-2 border-green-400 w-24 h-16 cursor-pointer opacity-80`}
                          whileHover={{ scale: 0.65 }}
                          onClick={() => handlePathClick(path.id)}
                        >
                          <div className="text-center">
                            <div className="text-sm mb-1">{path.icon}</div>
                            <h4 className="text-xs font-bold text-white">
                              {path.shortName}
                            </h4>
                          </div>
                        </motion.div>
                        <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center font-bold text-xs">
                          ✓
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Third path reveal */}
              <AnimatePresence>
                {showThirdPath && (
                  <motion.div
                    className="w-full max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 150, scale: 0.5, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                    transition={{
                      duration: 1.2,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                  >
                    <motion.div
                      className={`bg-gradient-to-br ${transitionPath.color} rounded-2xl p-8 shadow-2xl border-4 border-yellow-400 relative overflow-hidden cursor-pointer`}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => handlePathClick(transitionPath.id)}
                      animate={{
                        boxShadow: [
                          "0 0 30px rgba(255, 215, 0, 0.3)",
                          "0 0 50px rgba(255, 215, 0, 0.6)",
                          "0 0 30px rgba(255, 215, 0, 0.3)"
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
                      {/* Special badge */}
                      <motion.div
                        className="absolute top-4 right-4 bg-yellow-400 text-gray-800 rounded-full px-4 py-2 font-bold text-sm"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      >
                        🎯 Lựa chọn của HCM
                      </motion.div>

                      <div className="text-center mb-6">
                        <motion.div
                          className="text-7xl mb-4"
                          initial={{ scale: 0, rotate: 180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                        >
                          {transitionPath.icon}
                        </motion.div>
                        <motion.h3
                          className="text-3xl font-bold text-white mb-3"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.8 }}
                        >
                          {transitionPath.title}
                        </motion.h3>
                        <motion.p
                          className="text-white/90 text-lg leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6, duration: 0.8 }}
                        >
                          {transitionPath.description}
                        </motion.p>
                      </div>

                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      >
                        <motion.div
                          className="bg-yellow-400/20 border-2 border-yellow-400 rounded-xl py-4 px-6 inline-block cursor-pointer transition-all duration-300"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 215, 0, 0.3)" }}
                          whileTap={{ scale: 0.95 }}
                          animate={{
                            borderColor: ["#facc15", "#fbbf24", "#facc15"],
                          }}
                          transition={{
                            borderColor: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          <span className="text-white font-bold text-lg">
                            🔓 Nhấp để khám phá sáng tạo của Hồ Chí Minh
                          </span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Detailed view modal */}
        <AnimatePresence>
          {selectedPath && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleModalClose}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                initial={{ scale: 0.5, opacity: 0, rotateX: -90 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                exit={{ scale: 0.5, opacity: 0, rotateX: 90 }}
                transition={{ type: "spring", duration: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                {[...initialPathsData, transitionPath]
                  .filter(path => path.id === selectedPath)
                  .map(path => (
                    <div key={path.id}>
                      <div className="text-center mb-8">
                        <div className="text-8xl mb-4">{path.icon}</div>
                        <h3 className="text-4xl font-bold text-gray-800 mb-4">
                          {path.title}
                        </h3>
                        <p className="text-gray-600 text-xl">
                          {path.description}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Advantages */}
                        <div>
                          <h4 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
                            <span className="mr-2">✅</span> Ưu điểm
                          </h4>
                          <ul className="space-y-3">
                            {path.advantages.map((advantage, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start space-x-3 text-gray-700"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <span className="text-green-600 text-xl">•</span>
                                <span>{advantage}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Disadvantages */}
                        <div>
                          <h4 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
                            <span className="mr-2">❌</span> Nhược điểm
                          </h4>
                          <ul className="space-y-3">
                            {path.disadvantages.map((disadvantage, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start space-x-3 text-gray-700"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <span className="text-red-600 text-xl">•</span>
                                <span>{disadvantage}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* HCM Opinion */}
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                        <h4 className="text-2xl font-bold text-yellow-800 mb-3 flex items-center">
                          <span className="mr-2">💭</span> Quan điểm Hồ Chí Minh
                        </h4>
                        <p className="text-yellow-900 text-lg italic">
                          &quot;{path.hcmOpinion}&quot;
                        </p>
                      </div>

                      <div className="text-center">
                        <button
                          onClick={handleModalClose}
                          className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors mr-4 cursor-pointer"
                        >
                          Đóng
                        </button>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


        {/* Next button */}
        {
          showNextButton && (
            <motion.div
              className="fixed bottom-8 right-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                onClick={onNext}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(234, 88, 12, 0.3)",
                    "0 15px 40px rgba(234, 88, 12, 0.5)",
                    "0 10px 30px rgba(234, 88, 12, 0.3)"
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
                Tiếp theo: Quá trình thực hiện →
              </motion.button>
            </motion.div>
          )
        }
      </div >
    </div >
  )
}
