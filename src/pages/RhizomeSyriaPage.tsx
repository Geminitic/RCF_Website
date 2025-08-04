import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { PostModernLayout } from '../components/layout/PostModernLayout/PostModernLayout'
import { OptimizedImage } from '../components/ui/OptimizedImage/OptimizedImage'

const RhizomeSyriaPage: React.FC = () => {
  const { t } = useLanguage()

  return (
    <PostModernLayout variant="radical" showFloatingElements>
      <div className="py-20 flex flex-col items-center gap-12 text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-green-400 bg-clip-text text-transparent">
          {t('rhizome.hero.title', 'Rhizome Syria', 'ريزوم سوريا')}
        </h1>
        <p className="max-w-xl text-lg text-gray-700">
          {t(
            'rhizome.hero.subtitle',
            'Development from the roots for the roots.',
            'التطوير من الجذور للجذور.'
          )}
        </p>
        <div className="w-full max-w-2xl">
          <OptimizedImage
            src="/images/rhizome-hero.jpg"
            alt={t(
              'rhizome.hero.imageAlt',
              'Rhizome hero image',
              'صورة ريزوم'
            )}
            width={800}
            height={533}
            priority
          />
        </div>
      </div>
    </PostModernLayout>
  )
}

export default RhizomeSyriaPage
