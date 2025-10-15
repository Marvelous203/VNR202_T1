'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Clock, AlertTriangle, ChevronLeft } from 'lucide-react'

interface HistoricalContextSectionProps {
  onNext: () => void
  onBack: () => void
  onGoToDashboard?: () => void
}

export default function HistoricalContextSection({ onNext, onBack, onGoToDashboard }: HistoricalContextSectionProps) {
  const crisisMovements = [
    {
      name: "Phong trào Cần Vương",
      period: "1885-1896",
      leader: "Phan Đình Phùng",
      limitation: "Hạn chế về tư tưởng và phương pháp",
      color: "bg-red-100 border-red-300"
    },
    {
      name: "Phong trào Duy Tân", 
      period: "1904-1916",
      leader: "Phan Bội Châu",
      limitation: "Không có cơ sở quần chúng rộng rãi",
      color: "bg-orange-100 border-orange-300"
    },
    {
      name: "Phong trào Đông Du",
      period: "1905-1908", 
      leader: "Phan Bội Châu",
      limitation: "Bị đế quốc đàn áp, thiếu đường lối đúng đắn",
      color: "bg-yellow-100 border-yellow-300"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white overflow-hidden">
      {/* Dashboard Button - Fixed Position */}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 mr-3 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Bối Cảnh Lịch Sử
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Trước năm 1930: Khủng hoảng đường lối cứu nước
          </p>
        </motion.div>

        {/* Crisis Overview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20"
        >
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 mr-3 text-red-400" />
            <h2 className="text-3xl font-bold text-red-400">Khủng Hoảng Toàn Diện</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Tình hình kinh tế - xã hội</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Khủng hoảng kinh tế thế giới 1929-1933
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ảnh hưởng nghiêm trọng đến Đông Dương
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Gia tăng mâu thuẫn xã hội
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Tình hình chính trị</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Phong trào yêu nước lâm vào bế tắc
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Thiếu đường lối cách mạng đúng đắn
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cần có lực lượng lãnh đạo mới
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Failed Movements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">
            Các Phong Trào Cứu Nước Trước Đây
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {crisisMovements.map((movement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className={`${movement.color} backdrop-blur-lg rounded-xl p-6 border-2 hover:scale-105 transition-transform duration-300`}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{movement.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Thời gian:</strong> {movement.period}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Lãnh đạo:</strong> {movement.leader}
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-800">
                    <strong>Hạn chế:</strong> {movement.limitation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center bg-gradient-to-r from-yellow-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-8 border border-yellow-400/30"
        >
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            Nhu Cầu Cấp Thiết
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            Việt Nam cần một đảng cách mạng mới với lý luận khoa học, 
            tổ chức thống nhất và đường lối đúng đắn để lãnh đạo dân tộc 
            thoát khỏi ách thống trị thực dân phong kiến.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-between items-center mt-12"
        >
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
          
          <button
            onClick={onNext}
            className="flex items-center px-8 py-3 bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 rounded-full transition-all duration-300 font-semibold"
          >
            Tiếp theo: Thành lập Đảng
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}