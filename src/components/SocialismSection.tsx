'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface SocialismSectionProps {
  onNext: () => void
  onBack: () => void
}

const socialismContent = {
  title: "Tư tưởng Hồ Chí Minh về Chủ nghĩa Xã hội",
  sections: [
    {
      id: "concept",
      title: "1. Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội",
      icon: "🏛️",
      color: "from-red-600 to-red-800",
      description: "Khái niệm và đặc trưng cơ bản của chủ nghĩa xã hội trong tư tưởng Hồ Chí Minh",
      content: {
        introduction: "Hồ Chí Minh xem chủ nghĩa xã hội là con đường tất yếu của dân tộc Việt Nam sau khi giành được độc lập. Theo Người, mục tiêu cao nhất của chủ nghĩa xã hội là giải phóng dân tộc, giải phóng giai cấp và giải phóng con người, nhằm mang lại ấm no, tự do, hạnh phúc cho nhân dân.",
        characteristics: {
          title: "Chủ nghĩa xã hội có những đặc trưng cơ bản:",
          items: [
            {
              category: "Về chính trị",
              description: "chế độ do nhân dân làm chủ, đặt dưới sự lãnh đạo của Đảng Cộng sản.",
              icon: "🏛️"
            },
            {
              category: "Về kinh tế",
              description: "nền kinh tế phát triển dựa trên lực lượng sản xuất hiện đại, với chế độ công hữu về tư liệu sản xuất chủ yếu.",
              icon: "🏭"
            },
            {
              category: "Về văn hóa – xã hội",
              description: "một xã hội có trình độ văn hóa, đạo đức cao, bảo đảm công bằng, hợp lý trong quan hệ xã hội.",
              icon: "📚"
            }
          ]
        },
        conclusion: "Theo Hồ Chí Minh, chủ nghĩa xã hội không chỉ là mục tiêu kinh tế mà còn là lý tưởng nhân văn. Đó là xã hội không còn áp bức, bóc lột, mọi người đều bình đẳng và có điều kiện phát triển toàn diện."
      }
    },
    {
      id: "building-process",
      title: "2. Tư tưởng Hồ Chí Minh về quá trình xây dựng chủ nghĩa xã hội",
      icon: "🏗️",
      color: "from-green-600 to-green-800",
      description: "Quá trình, động lực và các lĩnh vực xây dựng chủ nghĩa xã hội ở Việt Nam",
      content: {
        introduction: "Hồ Chí Minh khẳng định xây dựng chủ nghĩa xã hội là sự nghiệp lâu dài, khó khăn, phải trải qua nhiều giai đoạn. Sự nghiệp này chỉ có thể thành công nếu huy động được sức mạnh toàn dân dưới sự lãnh đạo của Đảng.",
        adaptability: "Việc xây dựng chủ nghĩa xã hội phải phù hợp với điều kiện lịch sử, văn hóa, kinh tế cụ thể của từng quốc gia. Việt Nam không thể rập khuôn mô hình từ các nước khác mà cần vận dụng sáng tạo chủ nghĩa Mác – Lênin vào thực tiễn.",
        dynamics: {
          title: "Các động lực của công cuộc xây dựng chủ nghĩa xã hội gồm:",
          items: [
            {
              category: "Động lực chính trị – tinh thần",
              description: "lòng yêu nước, ý chí tự lực tự cường, tinh thần đoàn kết.",
              icon: "🇻🇳"
            },
            {
              category: "Động lực vật chất",
              description: "phát triển kinh tế, khoa học, kỹ thuật.",
              icon: "⚙️"
            },
            {
              category: "Kết hợp hài hòa",
              description: "lợi ích cá nhân và lợi ích tập thể để thúc đẩy phát triển.",
              icon: "🤝"
            }
          ]
        },
        comprehensiveAreas: {
          title: "Quá trình xây dựng chủ nghĩa xã hội phải toàn diện trên các lĩnh vực:",
          items: [
            {
              category: "Chính trị",
              description: "củng cố chế độ dân chủ, phát huy quyền làm chủ của nhân dân.",
              icon: "🗳️"
            },
            {
              category: "Kinh tế",
              description: "phát triển công nghiệp hóa, hiện đại hóa, xây dựng nền kinh tế hiện đại.",
              icon: "🏗️"
            },
            {
              category: "Văn hóa",
              description: "phát triển nền văn hóa dân tộc, khoa học, đại chúng, nâng cao đời sống tinh thần.",
              icon: "🎭"
            },
            {
              category: "Xã hội",
              description: "bảo đảm công bằng, dân chủ, văn minh.",
              icon: "⚖️"
            }
          ]
        }
      }
    }
  ]
}

export default function SocialismSection({ onNext, onBack }: SocialismSectionProps) {
  const [selectedModal, setSelectedModal] = useState<string | null>(null)
  const [showNextButton, setShowNextButton] = useState(false)

  useEffect(() => {
    // Show next button immediately when component loads
    console.log('SocialismSection mounted, showing next button')
    setShowNextButton(true)
  }, [])

  const handleModalOpen = (modalId: string) => {
    setSelectedModal(modalId)
  }

  const handleModalClose = () => {
    setSelectedModal(null)
  }

  const handleNext = () => {
    console.log('Next button clicked - navigating to transition section') // Debug log
    onNext()
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-amber-50 to-amber-100 relative overflow-hidden flex flex-col">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-transparent to-amber-100/50" />

      {/* Navigation buttons */}
      <div className="absolute top-4 left-4 right-4 flex justify-between z-20">
        <motion.button
          onClick={onBack}
          className="bg-white/90 hover:bg-white text-amber-800 px-4 py-2 rounded-full font-bold shadow-lg transition-all duration-300 flex items-center space-x-1 cursor-pointer hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-lg">←</span>
          <span className="text-sm">Quay lại</span>
        </motion.button>

      </div>

      {/* Main content */}
      <div className="relative z-10 p-4 pt-20 flex-1 overflow-y-auto">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section title */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="text-4xl mr-3"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                🏛️
              </motion.div>
              <div className="relative">
                <motion.div
                  className="w-16 h-16 rounded-full overflow-hidden border-3 border-amber-600 shadow-xl"
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(217, 119, 6, 0.3)",
                      "0 0 40px rgba(217, 119, 6, 0.6)",
                      "0 0 20px rgba(217, 119, 6, 0.3)"
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
                  <Image
                    src="/images/Ho_Chi_Minh.jpg"
                    alt="Hồ Chí Minh"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">
              {socialismContent.title}
            </h1>

            <motion.p
              className="text-sm text-amber-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Khám phá tư tưởng của Hồ Chí Minh về con đường xây dựng chủ nghĩa xã hội ở Việt Nam
            </motion.p>
          </motion.div>

          {/* Main cards grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {socialismContent.sections.map((section, index) => (
              <motion.div
                key={section.id}
                className="bg-white/95 rounded-xl p-6 border-2 border-amber-300 shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                whileHover={{ scale: 1.02, borderColor: "#d97706" }}
                onClick={() => handleModalOpen(section.id)}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{section.icon}</div>
                  <h3 className="text-xl font-bold text-amber-800 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    {section.description}
                  </p>
                </div>

                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-amber-100 border border-amber-400 rounded-lg py-2 px-4 inline-block transition-all duration-300">
                    <span className="text-amber-800 font-bold text-xs">
                      🔍 Nhấp để khám phá chi tiết
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Summary quote */}
          <motion.div
            className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-6 border-2 border-amber-400 shadow-xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-3xl mb-2">💭</div>
            <h3 className="text-xl font-bold text-amber-800 mb-2">
              Tầm nhìn của Hồ Chí Minh
            </h3>
            <p className="text-amber-900 text-sm leading-relaxed italic max-w-3xl mx-auto">
              &quot;Chủ nghĩa xã hội không chỉ là mục tiêu kinh tế mà còn là lý tưởng nhân văn.
              Đó là xã hội không còn áp bức, bóc lột, mọi người đều bình đẳng và có điều kiện phát triển toàn diện.&quot;
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal for detailed information */}
      <AnimatePresence>
        {selectedModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClose}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, rotateX: -90 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 90 }}
              transition={{ type: "spring", duration: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {socialismContent.sections
                .filter(section => section.id === selectedModal)
                .map(section => (
                  <div key={section.id}>
                    {/* Modal header */}
                    <div className="text-center mb-4">
                      <div className="text-6xl mb-2">{section.icon}</div>
                      <h3 className="text-2xl font-bold text-amber-900 mb-2">
                        {section.title}
                      </h3>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        {section.description}
                      </p>
                    </div>

                    {/* Introduction */}
                    <div className="mb-6 bg-amber-50 rounded-xl p-4 border border-amber-200">
                      <h4 className="text-lg font-bold text-amber-800 mb-2">
                        📖 Tổng quan
                      </h4>
                      <p className="text-amber-900 text-sm leading-relaxed mb-3">
                        {section.content.introduction}
                      </p>
                      {section.content.adaptability && (
                        <p className="text-amber-800 text-xs leading-relaxed">
                          {section.content.adaptability}
                        </p>
                      )}
                    </div>

                    {/* Content sections */}
                    <div className="space-y-8">
                      {/* Characteristics or Dynamics */}
                      {section.content.characteristics && (
                        <div className="bg-white border border-amber-300 rounded-xl p-4">
                          <h4 className="text-lg font-bold text-amber-800 mb-4 flex items-center">
                            <span className="mr-3">✨</span>
                            {section.content.characteristics.title}
                          </h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            {section.content.characteristics.items.map((item, index) => (
                              <motion.div
                                key={index}
                                className="bg-amber-50 rounded-lg p-3 border border-amber-200"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <div className="text-2xl mb-2">{item.icon}</div>
                                <h5 className="text-base font-bold text-amber-800 mb-1">
                                  {item.category}
                                </h5>
                                <p className="text-amber-700 text-xs leading-relaxed">
                                  {item.description}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {section.content.dynamics && (
                        <div className="bg-white border border-amber-300 rounded-xl p-4">
                          <h4 className="text-lg font-bold text-amber-800 mb-4 flex items-center">
                            <span className="mr-3">⚡</span>
                            {section.content.dynamics.title}
                          </h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            {section.content.dynamics.items.map((item, index) => (
                              <motion.div
                                key={index}
                                className="bg-amber-50 rounded-lg p-3 border border-amber-200"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <div className="text-2xl mb-2">{item.icon}</div>
                                <h5 className="text-base font-bold text-amber-800 mb-1">
                                  {item.category}
                                </h5>
                                <p className="text-amber-700 text-xs leading-relaxed">
                                  {item.description}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {section.content.comprehensiveAreas && (
                        <div className="bg-white border border-amber-300 rounded-xl p-4">
                          <h4 className="text-lg font-bold text-amber-800 mb-4 flex items-center">
                            <span className="mr-3">🔄</span>
                            {section.content.comprehensiveAreas.title}
                          </h4>
                          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                            {section.content.comprehensiveAreas.items.map((item, index) => (
                              <motion.div
                                key={index}
                                className="bg-amber-50 rounded-lg p-3 border border-amber-200"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <div className="text-xl mb-1">{item.icon}</div>
                                <h5 className="text-sm font-bold text-amber-800 mb-1">
                                  {item.category}
                                </h5>
                                <p className="text-amber-700 text-[11px] leading-relaxed">
                                  {item.description}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Conclusion quote */}
                      {section.content.conclusion && (
                        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-400 rounded-xl p-4">
                          <div className="flex items-start space-x-4">
                            <div className="text-3xl">💭</div>
                            <div>
                              <h4 className="text-lg font-bold text-amber-800 mb-2">
                                Quan điểm nhân văn của Hồ Chí Minh
                              </h4>
                              <p className="text-amber-900 text-sm leading-relaxed italic">
                                &quot;{section.content.conclusion}&quot;
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Modal footer */}
                    <div className="text-center mt-6">
                      <button
                        onClick={handleModalClose}
                        className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition-colors shadow-lg cursor-pointer"
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

      {/* Next button to continue to next page */}
      {showNextButton && (
        <motion.div
          className="fixed bottom-4 right-4 z-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            onClick={handleNext}
            className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 rounded-full font-bold text-sm shadow-xl cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 10px 30px rgba(217, 119, 6, 0.3)",
                "0 15px 40px rgba(217, 119, 6, 0.5)",
                "0 10px 30px rgba(217, 119, 6, 0.3)"
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
      )}
    </div>
  )
}
