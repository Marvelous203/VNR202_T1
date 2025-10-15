'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Users, Cog, Globe, ChevronRight, ChevronLeft, BookOpen, Star, Award, Lightbulb } from 'lucide-react'

interface Task {
  id: string
  title: string
  description: string
  details: string[]
  icon: string
  color: string
}

interface Characteristic {
  id: string
  title: string
  description: string
  examples: string[]
  icon: string
  color: string
}

const nationalDemocraticTasks: Task[] = [
  {
    id: 'overthrow-imperialism',
    title: 'Đánh đổ đế quốc Pháp và phong kiến Việt Nam',
    description: 'Giải phóng dân tộc khỏi ách thống trị của thực dân và phong kiến',
    details: [
      'Đấu tranh chống thực dân Pháp',
      'Xóa bỏ chế độ phong kiến lạc hậu',
      'Giành lại chủ quyền dân tộc',
      'Thống nhất đất nước'
    ],
    icon: '⚔️',
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'independence',
    title: 'Làm cho nước Việt Nam hoàn toàn độc lập',
    description: 'Xây dựng một nước Việt Nam độc lập, tự chủ hoàn toàn',
    details: [
      'Độc lập về chính trị',
      'Tự chủ về kinh tế',
      'Chủ quyền về lãnh thổ',
      'Bình đẳng trong quan hệ quốc tế'
    ],
    icon: '🏛️',
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'worker-peasant-government',
    title: 'Thành lập chính phủ công nông binh',
    description: 'Xây dựng chính quyền của nhân dân, do nhân dân, vì nhân dân',
    details: [
      'Quyền lực thuộc về nhân dân lao động',
      'Công nhân làm chủ',
      'Nông dân được giải phóng',
      'Binh sĩ có quyền dân chủ'
    ],
    icon: '👥',
    color: 'from-green-500 to-green-700'
  },
  {
    id: 'land-reform',
    title: 'Tịch thu ruộng đất phân phối cho nông dân',
    description: 'Giải quyết vấn đề ruộng đất, giải phóng nông dân',
    details: [
      'Tịch thu ruộng đất của đế quốc',
      'Tịch thu ruộng đất của phong kiến',
      'Phân phối cho nông dân nghèo',
      'Xóa bỏ chế độ bóc lột nông nghiệp'
    ],
    icon: '🌾',
    color: 'from-yellow-500 to-yellow-700'
  }
]

const socialistTasks: Task[] = [
  {
    id: 'collectivization',
    title: 'Tịch thu máy móc, ruộng đất của tư bản gia',
    description: 'Chuyển đổi sở hữu tư nhân thành sở hữu công hữu',
    details: [
      'Quốc hữu hóa các phương tiện sản xuất',
      'Xóa bỏ chế độ bóc lột',
      'Phát triển kinh tế tập thể',
      'Xây dựng nền kinh tế xã hội chủ nghĩa'
    ],
    icon: '🏭',
    color: 'from-purple-500 to-purple-700'
  },
  {
    id: 'distribution-principle',
    title: 'Thực hiện "các tận kỳ năng, phân tận kỳ dụng"',
    description: 'Nguyên tắc phân phối theo lao động trong xã hội xã hội chủ nghĩa',
    details: [
      'Mỗi người đóng góp theo khả năng',
      'Mỗi người hưởng thụ theo lao động',
      'Xóa bỏ bất bình đẳng xã hội',
      'Phát triển con người toàn diện'
    ],
    icon: '⚖️',
    color: 'from-indigo-500 to-indigo-700'
  },
  {
    id: 'abolish-private-property',
    title: 'Bãi bỏ tư hữu tư sản, thực hiện công hữu',
    description: 'Xây dựng chế độ sở hữu công hữu về phương tiện sản xuất',
    details: [
      'Xóa bỏ sở hữu tư nhân tư bản chủ nghĩa',
      'Phát triển sở hữu toàn dân',
      'Xây dựng sở hữu tập thể',
      'Đảm bảo lợi ích chung của xã hội'
    ],
    icon: '🤝',
    color: 'from-teal-500 to-teal-700'
  }
]

const platformCharacteristics: Characteristic[] = [
  {
    id: 'scientific',
    title: 'Tính khoa học',
    description: 'Vận dụng sáng tạo chủ nghĩa Mác-Lênin vào điều kiện Việt Nam',
    examples: [
      'Xác định đúng tính chất cách mạng',
      'Đề ra nhiệm vụ phù hợp quy luật',
      'Dựa trên cơ sở lý luận vững chắc',
      'Phân tích đúng thực tế xã hội'
    ],
    icon: '🔬',
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'national',
    title: 'Tính dân tộc',
    description: 'Phản ánh nguyện vọng và lợi ích của nhân dân Việt Nam',
    examples: [
      'Kế thừa truyền thống yêu nước',
      'Phù hợp điều kiện kinh tế-xã hội',
      'Thể hiện đặc sắc văn hóa dân tộc',
      'Đáp ứng nguyện vọng nhân dân'
    ],
    icon: '🏮',
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'contemporary',
    title: 'Tính thời đại',
    description: 'Gắn cách mạng Việt Nam với phong trào cách mạng thế giới',
    examples: [
      'Phù hợp xu thế thời đại mới',
      'Kết hợp với cách mạng thế giới',
      'Thể hiện tinh thần quốc tế',
      'Hướng tới tương lai tiến bộ'
    ],
    icon: '🌍',
    color: 'from-green-500 to-green-700'
  }
]

interface PlatformSectionProps {
  onNext: () => void
  onBack: () => void
  onGoToDashboard?: () => void
}

export default function PlatformSection({ onNext, onBack, onGoToDashboard }: PlatformSectionProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedTask, setSelectedTask] = useState<string | null>(null)
  const [selectedCharacteristic, setSelectedCharacteristic] = useState<string | null>(null)

  const steps = [
    'Nhiệm vụ dân tộc dân chủ',
    'Nhiệm vụ xã hội chủ nghĩa',
    'Đặc điểm Cương lĩnh',
    'Ý nghĩa lịch sử'
  ]

  const renderNationalDemocraticTasks = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Nhiệm vụ cách mạng dân tộc dân chủ</h2>
        <p className="text-gray-300 text-lg">
          Giải phóng dân tộc, xây dựng chế độ dân chủ nhân dân
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {nationalDemocraticTasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-gradient-to-br ${task.color} rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
              selectedTask === task.id ? 'ring-4 ring-white' : ''
            }`}
            onClick={() => setSelectedTask(selectedTask === task.id ? null : task.id)}
          >
            <div className="text-4xl mb-4">{task.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{task.title}</h3>
            <p className="text-gray-200 text-sm mb-4">{task.description}</p>
            
            <AnimatePresence>
              {selectedTask === task.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 space-y-2"
                >
                  {task.details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center text-white text-sm"
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {detail}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-orange-500 to-orange-700 rounded-xl p-6 mt-8"
      >
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2" />
          Các nhiệm vụ khác
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-black bg-opacity-20 rounded-lg p-4">
            <p className="text-white">• Thực hiện 8 tiếng làm việc</p>
          </div>
          <div className="bg-black bg-opacity-20 rounded-lg p-4">
            <p className="text-white">• Bãi bỏ các thứ thuế khổ sai, công đầu</p>
          </div>
          <div className="bg-black bg-opacity-20 rounded-lg p-4">
            <p className="text-white">• Thực hiện quyền tự do dân chủ</p>
          </div>
          <div className="bg-black bg-opacity-20 rounded-lg p-4">
            <p className="text-white">• Thực hiện giáo dục phổ thông</p>
          </div>
        </div>
      </motion.div>
    </div>
  )

  const renderSocialistTasks = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Nhiệm vụ cách mạng xã hội chủ nghĩa</h2>
        <p className="text-gray-300 text-lg">
          Xây dựng chế độ xã hội chủ nghĩa, xóa bỏ bóc lột
        </p>
      </motion.div>

      <div className="space-y-6">
        {socialistTasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
            className={`bg-gradient-to-r ${task.color} rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
              selectedTask === task.id ? 'ring-4 ring-white' : ''
            }`}
            onClick={() => setSelectedTask(selectedTask === task.id ? null : task.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{task.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{task.title}</h3>
                    <p className="text-gray-200">{task.description}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <AnimatePresence>
              {selectedTask === task.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 grid md:grid-cols-2 gap-4"
                >
                  {task.details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-black bg-opacity-20 rounded-lg p-3"
                    >
                      <p className="text-white text-sm">{detail}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderPlatformCharacteristics = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Đặc điểm của Cương lĩnh</h2>
        <p className="text-gray-300 text-lg">
          Ba đặc điểm nổi bật của Cương lĩnh chính trị đầu tiên
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {platformCharacteristics.map((characteristic, index) => (
          <motion.div
            key={characteristic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-gradient-to-br ${characteristic.color} rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
              selectedCharacteristic === characteristic.id ? 'ring-4 ring-white' : ''
            }`}
            onClick={() => setSelectedCharacteristic(selectedCharacteristic === characteristic.id ? null : characteristic.id)}
          >
            <div className="text-4xl mb-4">{characteristic.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{characteristic.title}</h3>
            <p className="text-gray-200 text-sm mb-4">{characteristic.description}</p>
            
            <AnimatePresence>
              {selectedCharacteristic === characteristic.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 space-y-2"
                >
                  {characteristic.examples.map((example, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center text-white text-sm"
                    >
                      <Star className="w-4 h-4 mr-2" />
                      {example}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderHistoricalSignificance = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Ý nghĩa lịch sử của Cương lĩnh</h2>
        <p className="text-gray-300 text-lg">
          Tầm quan trọng và giá trị lịch sử của Cương lĩnh chính trị đầu tiên
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: 'Lần đầu tiên có cương lĩnh khoa học',
            description: 'Việt Nam có một cương lĩnh cách mạng đúng đắn, khoa học',
            icon: '📚',
            color: 'from-blue-500 to-blue-700'
          },
          {
            title: 'Xác định con đường cách mạng',
            description: 'Xác định rõ con đường cách mạng vô sản cho Việt Nam',
            icon: '🛤️',
            color: 'from-green-500 to-green-700'
          },
          {
            title: 'Đặt nền móng tư tưởng',
            description: 'Đặt nền móng tư tưởng cho toàn bộ hoạt động của Đảng',
            icon: '🏗️',
            color: 'from-purple-500 to-purple-700'
          },
          {
            title: 'Định hướng cách mạng',
            description: 'Định hướng cho phong trào cách mạng Việt Nam suốt thế kỷ XX',
            icon: '🧭',
            color: 'from-red-500 to-red-700'
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-gradient-to-br ${item.color} rounded-xl p-6`}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-200">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-xl p-8 mt-8"
      >
        <div className="text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-2xl font-bold text-white mb-4">Kết luận</h3>
          <p className="text-white text-lg">
            Cương lĩnh chính trị đầu tiên của Đảng Cộng sản Việt Nam (tháng 2/1930) là một văn kiện 
            lịch sử có ý nghĩa vô cùng to lớn, đánh dấu bước ngoặt về tư duy cách mạng, 
            mở ra kỷ nguyên mới cho cách mạng Việt Nam.
          </p>
        </div>
      </motion.div>
    </div>
  )

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return renderNationalDemocraticTasks()
      case 1:
        return renderSocialistTasks()
      case 2:
        return renderPlatformCharacteristics()
      case 3:
        return renderHistoricalSignificance()
      default:
        return renderNationalDemocraticTasks()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cương lĩnh chính trị đầu tiên của Đảng
          </h1>
          <p className="text-gray-300 text-xl">
            Văn kiện lịch sử định hướng cách mạng Việt Nam (2/1930)
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 bg-black bg-opacity-30 rounded-full p-2">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentStep === index
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {step}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderCurrentStep()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Quay lại
            </button>
            
            {onGoToDashboard && (
              <button
                onClick={onGoToDashboard}
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
              >
                📊 Bảng điều khiển
              </button>
            )}
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:opacity-50 text-white rounded-lg transition-colors duration-300"
            >
              Bước trước
            </button>
            
            {currentStep < steps.length - 1 ? (
              <button
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
              >
                Bước tiếp
              </button>
            ) : (
              <button
                onClick={onNext}
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
              >
                Tiếp tục
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}