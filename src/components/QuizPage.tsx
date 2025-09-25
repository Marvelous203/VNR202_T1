'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface QuizPageProps {
  onBack: () => void
}

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "Tư tưởng Hồ Chí Minh về độc lập dân tộc nhấn mạnh điều gì?",
    options: [
      "Độc lập gắn liền với phát triển kinh tế tư bản",
      "Độc lập phải gắn với tự do, hạnh phúc của nhân dân",
      "Độc lập chỉ cần công nhận trên giấy tờ pháp lý",
      "Độc lập là tách biệt hoàn toàn khỏi thế giới"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: '"Không có gì quý hơn độc lập, tự do" là lời khẳng định của Chủ tịch Hồ Chí Minh trong bối cảnh:',
    options: [
      "Kháng chiến chống Mỹ cứu nước",
      "Kháng chiến chống Pháp",
      "Cải cách ruộng đất",
      "Xây dựng CNXH ở miền Bắc"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Ba con đường phát triển xã hội mà lịch sử nhân loại từng trải qua là:",
    options: [
      "Chiếm hữu nô lệ – phong kiến – tư bản chủ nghĩa",
      "Tư bản chủ nghĩa – xã hội chủ nghĩa – quá độ lên xã hội chủ nghĩa",
      "Tư bản chủ nghĩa – cộng sản chủ nghĩa – nông nghiệp cổ truyền",
      "Phong kiến – tư bản chủ nghĩa – xã hội chủ nghĩa"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Việt Nam lựa chọn con đường phát triển nào sau Cách mạng Tháng Tám 1945?",
    options: [
      "Con đường tư bản chủ nghĩa",
      "Con đường xã hội chủ nghĩa",
      "Con đường phát triển hỗn hợp",
      "Con đường liên minh với các nước thực dân"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Đặc điểm lớn nhất của thời kỳ quá độ lên CNXH ở Việt Nam là:",
    options: [
      "Bỏ qua chế độ phong kiến",
      "Từ một nước thuộc địa nửa phong kiến, nông nghiệp lạc hậu tiến thẳng lên CNXH",
      "Từ một nước công nghiệp hoá tiến lên CNXH",
      "Kết hợp song song cả hai chế độ phong kiến và tư bản"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Một trong những nội dung cốt lõi trong tư tưởng Hồ Chí Minh về độc lập dân tộc là:",
    options: [
      "Độc lập dân tộc phải gắn liền với chủ nghĩa xã hội",
      "Độc lập dân tộc có thể dựa vào các nước lớn",
      "Độc lập dân tộc chỉ cần giành chính quyền",
      "Độc lập dân tộc có thể tồn tại không cần dân chủ"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: 'Hồ Chí Minh từng khẳng định: "Nước độc lập mà dân không hưởng hạnh phúc tự do thì độc lập cũng chẳng có nghĩa lý gì". Điều này thể hiện tư tưởng gì?',
    options: [
      "Độc lập dân tộc gắn với quyền lợi nhân dân",
      "Độc lập dân tộc tách biệt với dân chủ",
      "Độc lập dân tộc quan trọng hơn đời sống nhân dân",
      "Độc lập dân tộc là mục tiêu duy nhất của cách mạng"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "Trong con đường quá độ lên CNXH ở Việt Nam hiện nay, mục tiêu cơ bản nhất là gì?",
    options: [
      "Xây dựng đất nước giàu mạnh, xã hội công bằng, dân chủ, văn minh",
      "Xây dựng giai cấp tư sản dân tộc mạnh",
      "Cạnh tranh bình đẳng với các cường quốc tư bản",
      "Hoàn thành công nghiệp hóa, không cần gắn với CNXH"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: 'Trong các tiền nhân, ai là người chủ trương "khai dân trí, chấn dân khí, hậu dân sinh"?',
    options: [
      "Phan Bội Châu",
      "Phan Châu Trinh",
      "Nguyễn Ái Quốc",
      "Nguyễn Trãi"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Tư tưởng Hồ Chí Minh chịu ảnh hưởng trực tiếp từ những yếu tố nào sau đây?",
    options: [
      "Chủ nghĩa Mác – Lênin, truyền thống dân tộc, tinh hoa văn hoá nhân loại",
      "Chủ nghĩa tư bản phương Tây",
      "Chủ nghĩa vô chính phủ",
      "Chủ nghĩa dân tộc hẹp hòi"
    ],
    correctAnswer: 0
  }
]

export default function QuizPage({ onBack }: QuizPageProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1))
  const [showResult, setShowResult] = useState(false)
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestionIndex] = answerIndex
    setSelectedAnswers(newAnswers)
    setShowAnswerFeedback(true)
  }

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResult(true)
    } else {
      setCurrentQuestionIndex(prev => prev + 1)
      setShowAnswerFeedback(false)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
      // Check if previous question was already answered to show feedback
      setShowAnswerFeedback(selectedAnswers[currentQuestionIndex - 1] !== -1)
    }
  }

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === questions[index].correctAnswer ? score + 1 : score
    }, 0)
  }

  const getScoreMessage = (score: number) => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 90) return "Xuất sắc! 🎉"
    if (percentage >= 80) return "Rất tốt! 👏"
    if (percentage >= 70) return "Tốt! 👍"
    if (percentage >= 60) return "Khá! 📚"
    return "Cần cố gắng thêm! 💪"
  }

  if (showResult) {
    const score = calculateScore()
    return (
      <div className="h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden flex items-center justify-center">
        {/* Background effects */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${(i * 7.3) % 100}%`,
                top: `${(i * 11.7) % 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2 + (i % 4),
                repeat: Infinity,
                delay: (i % 10) * 0.2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="text-5xl mb-4"
              animate={{
                rotateZ: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              {score >= questions.length * 0.8 ? "🏆" : "📊"}
            </motion.div>

            <h1 className="text-3xl font-bold text-white mb-4">
              Kết quả Quiz
            </h1>

            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-3">
              {score}/{questions.length}
            </div>

            <p className="text-xl text-gray-300 mb-6">
              {getScoreMessage(score)}
            </p>

            <div className="mb-6">
              <motion.button
                onClick={onBack}
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-full font-bold cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🔙 Quay lại trang chính
              </motion.button>

              {/* <motion.button
                onClick={onComplete}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🎓 Hoàn thành
              </motion.button> */}
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="absolute top-4 left-4 z-20 bg-white/90 hover:bg-white text-blue-800 px-4 py-2 rounded-full font-bold shadow-lg transition-all duration-300 flex items-center space-x-1 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-lg">←</span>
        <span className="text-sm">Quay lại</span>
      </motion.button>

      {/* Progress bar */}
      <div className="absolute top-4 right-4 z-20 bg-white/90 px-4 py-2 rounded-full font-bold text-blue-800 text-sm">
        Câu {currentQuestionIndex + 1}/{questions.length}
      </div>

      {/* Background effects */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 11.7) % 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + (i % 4),
              repeat: Infinity,
              delay: (i % 10) * 0.2,
            }}
          />
        ))}
      </div>

      <div className="flex items-center justify-center h-full px-4">
        <div className="max-w-3xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Question */}
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                  Câu {currentQuestion.id}. {currentQuestion.question}
                </h2>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === index
                  const isCorrectAnswer = index === currentQuestion.correctAnswer
                  const optionLetter = String.fromCharCode(65 + index) // A, B, C, D

                  let buttonStyle = 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/40'

                  if (showAnswerFeedback) {
                    if (isCorrectAnswer) {
                      buttonStyle = 'bg-green-600/50 border-green-400 text-white'
                    } else if (isSelected && !isCorrectAnswer) {
                      buttonStyle = 'bg-red-600/50 border-red-400 text-white'
                    } else {
                      buttonStyle = 'bg-white/5 border-white/20 text-gray-400'
                    }
                  } else if (isSelected) {
                    buttonStyle = 'bg-blue-600/50 border-blue-400 text-white'
                  }

                  return (
                    <motion.button
                      key={index}
                      onClick={() => !showAnswerFeedback && handleAnswerSelect(index)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${buttonStyle} ${showAnswerFeedback ? 'cursor-default' : 'cursor-pointer'
                        }`}
                      whileHover={!showAnswerFeedback ? { scale: 1.02 } : {}}
                      whileTap={!showAnswerFeedback ? { scale: 0.98 } : {}}
                    >
                      <div className="flex items-start space-x-4">
                        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${showAnswerFeedback && isCorrectAnswer
                          ? 'bg-green-500 text-white'
                          : showAnswerFeedback && isSelected && !isCorrectAnswer
                            ? 'bg-red-500 text-white'
                            : 'bg-white/20'
                          }`}>
                          {showAnswerFeedback && isCorrectAnswer ? '✓' :
                            showAnswerFeedback && isSelected && !isCorrectAnswer ? '✗' :
                              optionLetter}
                        </span>
                        <span className="text-base">{option}</span>
                        {showAnswerFeedback && isCorrectAnswer && (
                          <span className="ml-auto text-green-400 font-bold">👉 Đáp án đúng</span>
                        )}
                      </div>
                    </motion.button>
                  )
                })}
              </div>

              {/* Answer feedback */}
              {showAnswerFeedback && (
                <motion.div
                  className="mb-5 p-3 rounded-xl bg-white/10 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer ? (
                    <div className="flex items-center space-x-2 text-green-400">
                      <span className="text-xl">🎉</span>
                      <span className="font-bold">Chính xác! Bạn đã chọn đúng đáp án.</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 text-red-400">
                      <span className="text-xl">❌</span>
                      <span className="font-bold">Chưa đúng. Đáp án đúng là: {String.fromCharCode(65 + currentQuestion.correctAnswer)}</span>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <motion.button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${currentQuestionIndex === 0
                    ? 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
                    : 'bg-white/20 text-white hover:bg-white/30 cursor-pointer'
                    }`}
                  whileHover={currentQuestionIndex > 0 ? { scale: 1.05 } : {}}
                  whileTap={currentQuestionIndex > 0 ? { scale: 0.95 } : {}}
                >
                  ← Câu trước
                </motion.button>

                <motion.button
                  onClick={handleNext}
                  disabled={selectedAnswers[currentQuestionIndex] === -1}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${selectedAnswers[currentQuestionIndex] === -1
                    ? 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 cursor-pointer'
                    }`}
                  whileHover={selectedAnswers[currentQuestionIndex] !== -1 ? { scale: 1.05 } : {}}
                  whileTap={selectedAnswers[currentQuestionIndex] !== -1 ? { scale: 0.95 } : {}}
                >
                  {isLastQuestion ? 'Hoàn thành' : 'Câu tiếp →'}
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
