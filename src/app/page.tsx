'use client'

import { useState } from 'react'
import LandingPage from '../components/LandingPage'
import AncestorsSection from '../components/AncestorsSection'
import HCMSection from '../components/HCMSection'
import TwoPathsSection from '../components/TwoPathsSection'
import SocialismSection from '../components/SocialismSection'
import TransitionSection from '../components/TransitionSection'
import PrinciplesSection from '../components/PrinciplesSection'
import ConclusionSection from '../components/ConclusionSection'
import FinalPage from '../components/FinalPage'
import QuizPage from '../components/QuizPage'

type Section = 'landing' | 'ancestors' | 'hcm' | 'two-paths' | 'socialism' | 'transition' | 'principles' | 'conclusion' | 'final' | 'quiz'

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>('landing')

  const goToNextSection = () => {
    const sections: Section[] = ['landing', 'ancestors', 'hcm', 'two-paths', 'socialism', 'transition', 'principles', 'conclusion', 'final']
    const currentIndex = sections.indexOf(currentSection)
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1])
    }
  }

  const goToPreviousSection = () => {
    const sections: Section[] = ['landing', 'ancestors', 'hcm', 'two-paths', 'socialism', 'transition', 'principles', 'conclusion', 'final']
    const currentIndex = sections.indexOf(currentSection)
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1])
    }
  }

  const restartJourney = () => {
    setCurrentSection('landing')
  }

  const goToQuiz = () => {
    setCurrentSection('quiz')
  }

  const goBackToFinal = () => {
    setCurrentSection('final')
  }

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'landing':
        return <LandingPage onStartJourney={goToNextSection} />
      case 'ancestors':
        return <AncestorsSection onNext={goToNextSection} onBack={goToPreviousSection} />
      case 'hcm':
        return <HCMSection onNext={goToNextSection} onBack={goToPreviousSection} />
      case 'two-paths':
        return <TwoPathsSection onNext={goToNextSection} onBack={goToPreviousSection} />
      case 'socialism':
        return <SocialismSection onNext={goToNextSection} onBack={goToPreviousSection} />
      case 'transition':
        return <TransitionSection onNext={goToNextSection} onBack={goToPreviousSection} />
      case 'principles':
        return <PrinciplesSection onNext={goToNextSection} onBack={goToPreviousSection} />
      case 'conclusion':
        return <ConclusionSection onNext={goToNextSection} onBack={goToPreviousSection} />
      case 'final':
        return <FinalPage onReplay={restartJourney} onBack={goToPreviousSection} onQuiz={goToQuiz} />
      case 'quiz':
        return <QuizPage onBack={goBackToFinal} />
      default:
        return <LandingPage onStartJourney={goToNextSection} />
    }
  }

  return (
    <div className="min-h-screen">
      {renderCurrentSection()}
    </div>
  )
}
