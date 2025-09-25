'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface AncestorData {
  id: string
  name: string
  period: string
  title: string
  summary: string
  details: string[]
}

const ancestorsData: AncestorData[] = [
  {
    id: 'phan-boi-chau',
    name: 'Phan Bội Châu',
    period: '1867-1940',
    title: 'Con đường bạo động vũ trang',
    summary: 'Chủ trương "cứu nước để cứu dân" thông qua bạo động vũ trang, thiết lập chế độ quân chủ lập hiến',
    details: [
      'Thành lập Hội Duy tân và phát động phong trào Đông Du',
      'Đưa thanh niên Việt Nam sang Nhật Bản học tập',
      'Vận động quần chúng lật đổ thực dân Pháp bằng vũ lực',
      'Thất bại vì lệ thuộc vào Nhật Bản - khi Pháp-Nhật thỏa hiệp, Nhật quay lưng và trục xuất du học sinh'
    ]
  },
  {
    id: 'phan-chau-trinh',
    name: 'Phan Châu Trinh',
    period: '1872-1926',
    title: 'Con đường cải cách ôn hòa',
    summary: 'Chủ trương "khai dân trí, chấn dân khí, hậu dân sinh" để tạo nền tảng cho cải cách ôn hòa',
    details: [
      'Phát động cuộc vận động Duy tân ở Trung Kỳ',
      'Kêu gọi mở trường học, chấn hưng kinh tế',
      'Thay đổi phong tục lạc hậu, nâng cao dân trí và dân quyền',
      'Thất bại vì thực dân Pháp không chấp nhận cải cách, đàn áp dã man phong trào'
    ]
  }
]

interface AncestorsSectionProps {
  onNext: () => void
  onBack: () => void
}

export default function AncestorsSection({ onNext, onBack }: AncestorsSectionProps) {
  const [selectedAncestor, setSelectedAncestor] = useState<string | null>(null)

  const handleAncestorClick = (id: string) => {
    setSelectedAncestor(id)
  }

  return (
    <div className="h-screen bg-gradient-to-b from-amber-50 to-amber-100 relative overflow-hidden flex flex-col">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-transparent to-amber-100/50" />

      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="absolute top-4 left-4 z-20 bg-white/90 hover:bg-white text-amber-800 px-4 py-2 rounded-full font-bold shadow-lg transition-all duration-300 flex items-center space-x-1 cursor-pointer hover:scale-105 ease-in-out"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-lg">←</span>
        <span className="text-sm">Quay lại</span>
      </motion.button>

      <div className="relative z-10 py-4 px-4 flex-1 flex flex-col">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-4"
        >
          <h2 className="text-2xl font-bold text-amber-900 mb-2">
            Các Tiền Nhân Yêu Nước
          </h2>
          <p className="text-sm text-amber-700 mx-auto leading-relaxed max-w-3xl">
            Hành trình tìm đường cứu nước của dân tộc Việt Nam từ các tiền nhân đến con đường cách mạng mới
          </p>
        </motion.div>

        {/* Vertical Timeline Container */}
        <div className="relative flex-1 flex flex-col justify-center">
          {/* Vertical Timeline Line - Top to Bottom */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-amber-400 via-amber-500 to-red-600 rounded-full shadow-lg"
            style={{ height: '100%', minHeight: '400px' }}
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />

          {/* Timeline Events */}
          <div className="w-full relative space-y-8 py-2">
            {/* Phan Bội Châu */}
            <motion.div
              className="relative flex items-center"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-500 rounded-full border-3 border-white shadow-xl z-10" />

              {/* Content - Left Side */}
              <div className="w-1/2 pr-6 text-right">
                <motion.div
                  className="bg-white/95 rounded-xl p-3 shadow-xl border-2 border-amber-300 cursor-pointer relative group w-fit ml-auto"
                  whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                  onClick={() => handleAncestorClick('phan-boi-chau')}
                >
                  <div className="flex items-center justify-end mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-600 shadow-lg mr-3">
                      <Image
                        width={40}
                        height={40}
                        src="/images/PhanBoiChau_cropped.png"
                        alt="Phan Bội Châu"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-amber-800">Phan Bội Châu</h4>
                      <p className="text-amber-600 font-semibold text-xs">1867-1940</p>
                    </div>
                  </div>
                  <p className="text-red-600 font-bold text-xs">Con đường bạo động vũ trang</p>

                </motion.div>
              </div>

              {/* Year Badge - Right Side */}
              <div className="w-1/2 pl-6">
                <div className="bg-amber-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-xl inline-block">
                  1904
                </div>
                <p className="text-amber-700 font-semibold mt-1 text-xs">Thành lập Hội Duy tân</p>
              </div>
            </motion.div>

            {/* Crisis Period */}
            <motion.div
              className="relative flex items-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-xl z-10" /> */}

              <div className="w-full text-center">
                <div className="bg-orange-100 border-2 border-orange-400 rounded-xl p-2 inline-block shadow-lg">
                  <div className="flex items-center justify-center">
                    <span className="text-lg mr-2">⚡</span>
                    <div>
                      <p className="font-bold text-orange-700 text-sm">Giai đoạn khủng hoảng</p>
                      <p className="text-orange-600 text-xs">1910-1915 • Tìm đường mới</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phan Châu Trinh */}
            <motion.div
              className="relative flex items-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 3.5 }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-600 rounded-full border-3 border-white shadow-xl z-10" />

              {/* Year Badge - Left Side */}
              <div className="w-1/2 pr-6 text-right">
                <div className="bg-amber-600 text-white px-3 py-1 rounded-full font-bold text-sm shadow-xl inline-block">
                  1906
                </div>
                <p className="text-amber-700 font-semibold mt-1 text-xs">Phong trào Duy tân</p>
              </div>

              {/* Content - Right Side */}
              <div className="w-1/2 pl-6">
                <motion.div
                  className="bg-white/95 rounded-xl p-3 shadow-xl border-2 border-amber-400 cursor-pointer relative group w-fit"
                  whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                  onClick={() => handleAncestorClick('phan-chau-trinh')}
                >
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-600 shadow-lg mr-3">
                      <Image
                        width={40}
                        height={40}
                        src="/images/Phan_Chau_Trinh.jpg"
                        alt="Phan Châu Trinh"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-amber-800">Phan Châu Trinh</h4>
                      <p className="text-amber-600 font-semibold text-xs">1872-1926</p>
                    </div>
                  </div>
                  <p className="text-blue-600 font-bold text-xs">Con đường cải cách ôn hòa</p>

                </motion.div>
              </div>
            </motion.div>

            {/* Transition to Ho Chi Minh */}
            <motion.div
              className="relative flex items-center"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4.5 }}
            >
              <div className="w-full text-center">
                <motion.div
                  className="bg-gradient-to-r from-red-50 to-yellow-50 border-3 border-red-400 rounded-2xl p-4 max-w-xl mx-auto cursor-pointer relative group shadow-xl"
                  whileHover={{ scale: 1.03 }}
                  onClick={onNext}
                >
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-3 border-red-600 shadow-lg mr-3">
                      <Image
                        width={48}
                        height={48}
                        src="/images/Ho_Chi_Minh.jpg"
                        alt="Hồ Chí Minh"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-red-800">Hồ Chí Minh</h4>
                      <p className="text-red-600 font-semibold text-sm">1890-1969</p>
                    </div>
                  </div>
                  <p className="text-green-700 font-bold text-sm mb-1">Con đường mới: Độc lập dân tộc + CNXH</p>
                  <p className="text-gray-600 font-semibold text-xs">Nhấp để khám phá tư tưởng Hồ Chí Minh →</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Popup Modal */}
        <AnimatePresence>
          {selectedAncestor && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAncestor(null)}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 max-w-2xl w-full shadow-2xl max-h-[85vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {ancestorsData
                  .filter(ancestor => ancestor.id === selectedAncestor)
                  .map(ancestor => (
                    <div key={ancestor.id}>
                      <div className="text-center mb-4">
                        <h3 className="text-2xl font-bold text-amber-900 mb-2">
                          {ancestor.name}
                        </h3>
                        <p className="text-amber-700 text-lg font-semibold">{ancestor.title}</p>
                        <p className="text-amber-600 text-sm">{ancestor.period}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-lg font-bold text-amber-800 mb-2">
                          Tóm tắt tư tưởng:
                        </h4>
                        <p className="text-gray-700 text-sm italic leading-relaxed">
                          &quot;{ancestor.summary}&quot;
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-amber-800 mb-2">
                          Hoạt động và Kết quả:
                        </h4>
                        <ul className="space-y-2">
                          {ancestor.details.map((detail, index) => (
                            <motion.li
                              key={index}
                              className={`flex items-start space-x-3 p-3 rounded-lg ${index === ancestor.details.length - 1
                                ? 'bg-red-50 border-l-3 border-red-500'
                                : 'bg-gray-50 border-l-3 border-amber-500'
                                }`}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <span className={`text-lg ${index === ancestor.details.length - 1 ? 'text-red-600' : 'text-amber-600'
                                }`}>
                                {index === ancestor.details.length - 1 ? '❌' : '📌'}
                              </span>
                              <span className={`font-medium text-sm ${index === ancestor.details.length - 1 ? 'text-red-700' : 'text-gray-700'
                                }`}>
                                {detail}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 text-center">
                        <button
                          onClick={() => setSelectedAncestor(null)}
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
      </div>
    </div>
  )
}
