'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, TrendingUp, Users, Globe, ChevronRight, ChevronLeft, Star, Award, Lightbulb, Crown, Zap, Factory, BookOpen, Heart } from 'lucide-react'

interface Factor {
  id: string
  title: string
  description: string
  details: string[]
  evidence: string[]
  icon: string
  color: string
}

const inevitabilityFactors: Factor[] = [
  {
    id: 'economic-social',
    title: 'Yếu tố kinh tế - xã hội',
    description: 'Sự phát triển của quan hệ sản xuất tư bản chủ nghĩa và giai cấp công nhân',
    details: [
      'Kinh tế hàng hóa phát triển mạnh',
      'Giai cấp công nhân ra đời và lớn mạnh',
      'Mâu thuẫn giai cấp ngày càng gay gắt',
      'Nhu cầu có tổ chức lãnh đạo giai cấp'
    ],
    evidence: [
      'Năm 1929: Có khoảng 221.000 công nhân',
      'Các cuộc đình công liên tiếp diễn ra',
      'Phong trào công nhân có tổ chức',
      'Ý thức giai cấp được nâng cao'
    ],
    icon: '🏭',
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'political',
    title: 'Yếu tố chính trị',
    description: 'Khủng hoảng của các tổ chức chính trị cũ và nhu cầu đường lối mới',
    details: [
      'Các tổ chức cũ đều thất bại',
      'Phong trào yêu nước lâm vào bế tắc',
      'Thiếu đường lối cách mạng đúng đắn',
      'Cần có lực lượng lãnh đạo mới'
    ],
    evidence: [
      'Việt Nam Quốc Dân Đảng thất bại',
      'Các tổ chức tôn giáo không hiệu quả',
      'Phong trào Duy Tân không thành công',
      'Cần có đảng cách mạng chân chính'
    ],
    icon: '🏛️',
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'ideological',
    title: 'Yếu tố tư tưởng',
    description: 'Sự truyền bá và tiếp nhận chủ nghĩa Mác-Lênin tại Việt Nam',
    details: [
      'Chủ nghĩa Mác-Lênin được truyền bá',
      'Tư tưởng cách mạng vô sản lan rộng',
      'Có cơ sở lý luận khoa học',
      'Phù hợp với thực tiễn Việt Nam'
    ],
    evidence: [
      'Nguyễn Ái Quốc nghiên cứu Mác-Lênin',
      'Báo chí cách mạng phát triển',
      'Tư tưởng tiến bộ được phổ biến',
      'Lý luận khoa học chỉ đạo thực tiễn'
    ],
    icon: '📚',
    color: 'from-green-500 to-green-700'
  },
  {
    id: 'organizational',
    title: 'Yếu tố tổ chức',
    description: 'Sự chuẩn bị về tổ chức và nhân sự cho việc thành lập Đảng',
    details: [
      'Các tổ chức tiền thân được thành lập',
      'Đội ngũ cán bộ được đào tạo',
      'Kinh nghiệm tổ chức được tích lũy',
      'Mạng lưới hoạt động được hình thành'
    ],
    evidence: [
      'Thanh niên Cách mạng Đồng chí Hội (1925)',
      'Việt Nam Cách mạng Thanh niên Đảng (1927)',
      'Đông Dương Cộng sản Đảng (1929)',
      'An Nam Cộng sản Đảng (1929)'
    ],
    icon: '👥',
    color: 'from-purple-500 to-purple-700'
  },
  {
    id: 'international',
    title: 'Yếu tố quốc tế',
    description: 'Ảnh hưởng của cách mạng thế giới và phong trào cộng sản quốc tế',
    details: [
      'Cách mạng Tháng Mười Nga thành công',
      'Phong trào cộng sản thế giới phát triển',
      'Quốc tế Cộng sản hỗ trợ',
      'Xu thế thời đại thuận lợi'
    ],
    evidence: [
      'Cách mạng Nga 1917 thắng lợi',
      'Các đảng cộng sản châu Á ra đời',
      'Quốc tế Cộng sản chỉ đạo',
      'Phong trào giải phóng dân tộc mạnh mẽ'
    ],
    icon: '🌍',
    color: 'from-indigo-500 to-indigo-700'
  },
  {
    id: 'leadership',
    title: 'Yếu tố lãnh đạo',
    description: 'Vai trò của Nguyễn Ái Quốc trong việc chuẩn bị và thành lập Đảng',
    details: [
      'Lãnh tụ có tầm nhìn chiến lược',
      'Kết hợp lý luận với thực tiễn',
      'Có uy tín và khả năng tổ chức',
      'Đại diện cho nguyện vọng dân tộc'
    ],
    evidence: [
      'Hoạt động cách mạng từ 1911',
      'Nghiên cứu sâu chủ nghĩa Mác-Lênin',
      'Thành lập các tổ chức tiền thân',
      'Chủ trì Hội nghị thành lập Đảng'
    ],
    icon: '👑',
    color: 'from-yellow-500 to-yellow-700'
  }
]

interface InevitabilitySectionProps {
  onNext: () => void
  onBack: () => void
  onGoToDashboard?: () => void
}

export default function InevitabilitySection({ onNext, onBack, onGoToDashboard }: InevitabilitySectionProps) {
  const [selectedFactor, setSelectedFactor] = useState<string | null>(null)
  const [currentView, setCurrentView] = useState(0)

  const views = ['Tổng quan', 'Phân tích', 'Chứng minh', 'Kết luận']

  const renderOverview = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Tính tất yếu của việc thành lập Đảng</h2>
        <p className="text-gray-300 text-lg">
          Sự ra đời của Đảng Cộng sản Việt Nam là kết quả tất yếu của sự phát triển lịch sử
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 mb-8"
      >
        <div className="text-center">
          <div className="text-6xl mb-4">⚡</div>
          <h3 className="text-2xl font-bold text-white mb-4">Tính tất yếu khách quan</h3>
          <p className="text-gray-200 text-lg">
            Việc thành lập Đảng Cộng sản Việt Nam không phải là ngẫu nhiên mà là kết quả tất yếu 
            của sự phát triển kinh tế-xã hội, chính trị, tư tưởng và các yếu tố khách quan khác.
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {inevitabilityFactors.slice(0, 3).map((factor, index) => (
          <motion.div
            key={factor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-gradient-to-br ${factor.color} rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
              selectedFactor === factor.id ? 'ring-4 ring-white' : ''
            }`}
            onClick={() => setSelectedFactor(selectedFactor === factor.id ? null : factor.id)}
          >
            <div className="text-4xl mb-4">{factor.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{factor.title}</h3>
            <p className="text-gray-200 text-sm">{factor.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {inevitabilityFactors.slice(3, 6).map((factor, index) => (
          <motion.div
            key={factor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index + 3) * 0.2 }}
            className={`bg-gradient-to-br ${factor.color} rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
              selectedFactor === factor.id ? 'ring-4 ring-white' : ''
            }`}
            onClick={() => setSelectedFactor(selectedFactor === factor.id ? null : factor.id)}
          >
            <div className="text-4xl mb-4">{factor.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{factor.title}</h3>
            <p className="text-gray-200 text-sm">{factor.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderAnalysis = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Phân tích các yếu tố tất yếu</h2>
        <p className="text-gray-300 text-lg">
          Xem xét chi tiết từng yếu tố góp phần tạo nên tính tất yếu
        </p>
      </motion.div>

      <div className="space-y-8">
        {inevitabilityFactors.map((factor, index) => (
          <motion.div
            key={factor.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-gradient-to-r ${factor.color} rounded-xl p-6`}
          >
            <div className="flex items-start mb-4">
              <div className="text-4xl mr-4">{factor.icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{factor.title}</h3>
                <p className="text-gray-200 mb-4">{factor.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Nội dung chính:</h4>
                <div className="space-y-2">
                  {factor.details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + idx * 0.1 }}
                      className="bg-black bg-opacity-20 rounded-lg p-3"
                    >
                      <div className="flex items-center text-white text-sm">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        {detail}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-3">Bằng chứng cụ thể:</h4>
                <div className="space-y-2">
                  {factor.evidence.map((evidence, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + idx * 0.1 + 0.2 }}
                      className="bg-black bg-opacity-30 rounded-lg p-3"
                    >
                      <div className="flex items-center text-white text-sm">
                        <Star className="w-4 h-4 mr-2" />
                        {evidence}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderProof = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Chứng minh tính tất yếu</h2>
        <p className="text-gray-300 text-lg">
          Luận chứng khoa học về tính tất yếu khách quan
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 mb-8"
      >
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🔬</div>
          <h3 className="text-3xl font-bold text-white mb-4">Luận chứng khoa học</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white mb-4">Điều kiện khách quan:</h4>
            <div className="space-y-3">
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <h5 className="font-bold text-white mb-2">1. Cơ sở kinh tế</h5>
                <p className="text-gray-200 text-sm">
                  Sự phát triển của kinh tế hàng hóa tư bản chủ nghĩa tạo ra giai cấp công nhân - 
                  lực lượng xã hội tiên tiến nhất, có sứ mệnh lịch sử giải phóng giai cấp và dân tộc.
                </p>
              </div>
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <h5 className="font-bold text-white mb-2">2. Mâu thuẫn xã hội</h5>
                <p className="text-gray-200 text-sm">
                  Mâu thuẫn gay gắt giữa giai cấp công nhân với giai cấp tư sản, 
                  giữa dân tộc bị áp bức với chủ nghĩa đế quốc đòi hỏi có tổ chức lãnh đạo.
                </p>
              </div>
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <h5 className="font-bold text-white mb-2">3. Khủng hoảng chính trị</h5>
                <p className="text-gray-200 text-sm">
                  Các tổ chức chính trị cũ đều thất bại, phong trào yêu nước lâm vào bế tắc, 
                  cần có đường lối cách mạng mới.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white mb-4">Điều kiện chủ quan:</h4>
            <div className="space-y-3">
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <h5 className="font-bold text-white mb-2">1. Lý luận khoa học</h5>
                <p className="text-gray-200 text-sm">
                  Chủ nghĩa Mác-Lênin được truyền bá và tiếp nhận, 
                  cung cấp cơ sở lý luận khoa học cho cách mạng Việt Nam.
                </p>
              </div>
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <h5 className="font-bold text-white mb-2">2. Tổ chức chuẩn bị</h5>
                <p className="text-gray-200 text-sm">
                  Các tổ chức tiền thân được thành lập, đội ngũ cán bộ được đào tạo, 
                  kinh nghiệm tổ chức được tích lũy.
                </p>
              </div>
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <h5 className="font-bold text-white mb-2">3. Lãnh tụ xuất sắc</h5>
                <p className="text-gray-200 text-sm">
                  Nguyễn Ái Quốc - người lãnh tụ có tầm nhìn chiến lược, 
                  kết hợp lý luận với thực tiễn, có uy tín và khả năng tổ chức.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-red-600 to-red-800 rounded-xl p-6"
        >
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-bold text-white mb-4">Quy luật lịch sử</h3>
          <p className="text-gray-200 text-sm">
            Sự ra đời của Đảng tuân theo quy luật khách quan của sự phát triển xã hội, 
            là kết quả tất yếu của quá trình đấu tranh giai cấp và giải phóng dân tộc.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6"
        >
          <div className="text-4xl mb-4">🔗</div>
          <h3 className="text-xl font-bold text-white mb-4">Sự thống nhất</h3>
          <p className="text-gray-200 text-sm">
            Sự thống nhất giữa chủ nghĩa Mác-Lênin, phong trào công nhân và phong trào yêu nước 
            tạo nên tính tất yếu khách quan của việc thành lập Đảng.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6"
        >
          <div className="text-4xl mb-4">⏰</div>
          <h3 className="text-xl font-bold text-white mb-4">Thời cơ lịch sử</h3>
          <p className="text-gray-200 text-sm">
            Năm 1930 là thời điểm chín muồi nhất cho việc thành lập Đảng, 
            khi mọi điều kiện khách quan và chủ quan đều đã sẵn sàng.
          </p>
        </motion.div>
      </div>
    </div>
  )

  const renderConclusion = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Kết luận về tính tất yếu</h2>
        <p className="text-gray-300 text-lg">
          Khẳng định tính tất yếu khách quan của việc thành lập Đảng Cộng sản Việt Nam
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-2xl p-8 mb-8"
      >
        <div className="text-center">
          <div className="text-6xl mb-4">🎯</div>
          <h3 className="text-3xl font-bold text-white mb-4">Kết luận tổng quát</h3>
          <p className="text-gray-200 text-lg mb-6">
            Việc thành lập Đảng Cộng sản Việt Nam ngày 3/2/1930 không phải là ngẫu nhiên 
            mà là kết quả tất yếu của sự phát triển lịch sử, là sản phẩm của sự kết hợp 
            giữa chủ nghĩa Mác-Lênin với phong trào công nhân và phong trào yêu nước Việt Nam.
          </p>
          
          <div className="bg-black bg-opacity-30 rounded-lg p-6">
            <h4 className="text-xl font-bold text-white mb-4">Công thức tất yếu:</h4>
            <div className="flex items-center justify-center space-x-4 text-white text-lg">
              <span className="bg-red-600 px-4 py-2 rounded-lg">Mác-Lênin</span>
              <span className="text-2xl">+</span>
              <span className="bg-blue-600 px-4 py-2 rounded-lg">Phong trào công nhân</span>
              <span className="text-2xl">+</span>
              <span className="bg-green-600 px-4 py-2 rounded-lg">Phong trào yêu nước</span>
              <span className="text-2xl">=</span>
              <span className="bg-yellow-600 px-4 py-2 rounded-lg font-bold">ĐẢNG CỘNG SẢN VIỆT NAM</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6"
        >
          <div className="text-4xl mb-4">🏛️</div>
          <h3 className="text-xl font-bold text-white mb-4">Tính tất yếu khách quan</h3>
          <ul className="text-gray-200 space-y-2 text-sm">
            <li>• Quy luật phát triển của xã hội loài người</li>
            <li>• Mâu thuẫn giai cấp và dân tộc gay gắt</li>
            <li>• Nhu cầu có tổ chức lãnh đạo cách mạng</li>
            <li>• Xu thế thời đại và cách mạng thế giới</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl p-6"
        >
          <div className="text-4xl mb-4">👥</div>
          <h3 className="text-xl font-bold text-white mb-4">Tính tất yếu chủ quan</h3>
          <ul className="text-gray-200 space-y-2 text-sm">
            <li>• Sự trưởng thành của giai cấp công nhân</li>
            <li>• Tiếp nhận chủ nghĩa Mác-Lênin</li>
            <li>• Chuẩn bị về tổ chức và nhân sự</li>
            <li>• Vai trò lãnh đạo của Nguyễn Ái Quốc</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-8"
      >
        <div className="text-center">
          <div className="text-4xl mb-4">📜</div>
          <h3 className="text-2xl font-bold text-white mb-4">Lời khẳng định của lịch sử</h3>
          <blockquote className="text-white text-lg italic mb-4">
            Việc thành lập Đảng Cộng sản Việt Nam là một tất yếu lịch sử. 
            Nó là kết quả của sự phát triển kinh tế-xã hội, chính trị, tư tưởng 
            và sự kết hợp sáng tạo giữa chủ nghĩa Mác-Lênin với thực tiễn cách mạng Việt Nam.
          </blockquote>
          <p className="text-gray-200">
            Lịch sử đã chứng minh rằng sự ra đời của Đảng là điều tất yếu, 
            và Đảng đã hoàn thành xuất sắc sứ mệnh lịch sử của mình.
          </p>
        </div>
      </motion.div>
    </div>
  )

  const renderCurrentView = () => {
    switch (currentView) {
      case 0:
        return renderOverview()
      case 1:
        return renderAnalysis()
      case 2:
        return renderProof()
      case 3:
        return renderConclusion()
      default:
        return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tính tất yếu của việc thành lập Đảng
          </h1>
          <p className="text-gray-300 text-xl">
            Chứng minh khoa học về tính tất yếu khách quan
          </p>
        </motion.div>

        {/* View Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 bg-black bg-opacity-30 rounded-full p-2">
            {views.map((view, index) => (
              <button
                key={index}
                onClick={() => setCurrentView(index)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentView === index
                    ? 'bg-red-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {view}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderCurrentView()}
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
              onClick={() => setCurrentView(Math.max(0, currentView - 1))}
              disabled={currentView === 0}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:opacity-50 text-white rounded-lg transition-colors duration-300"
            >
              Phần trước
            </button>
            
            {currentView < views.length - 1 ? (
              <button
                onClick={() => setCurrentView(Math.min(views.length - 1, currentView + 1))}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
              >
                Phần tiếp
              </button>
            ) : (
              <button
                onClick={onNext}
                className="flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
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