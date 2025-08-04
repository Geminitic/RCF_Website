import React from 'react'
import { useTranslation } from 'react-i18next'
import { PostModernLayout } from '@/components/layout/PostModernLayout'
import { OptimizedImage } from '@/components/ui/OptimizedImage/OptimizedImage'
import styles from './RhizomePage.module.css'

// Placeholder components for timeline, stories, impact, CTA
function InteractiveTimeline() {
  return <div className={styles.placeholderSection}>Timeline Component</div>
}
function StoryCards() {
  return <div className={styles.placeholderSection}>Story Cards</div>
}
function ImpactMetrics() {
  return <div className={styles.placeholderSection}>Impact Metrics</div>
}
function CallToAction() {
  return <div className={styles.placeholderSection}>Call to Action</div>
}

export default function RhizomePage() {
  const { t } = useTranslation()

  return (
    <PostModernLayout variant="radical" showFloatingElements>
      <div className={styles.page}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                {t('rhizome.hero.title')}
              </h1>
              <p className={styles.heroSubtitle}>
                {t('rhizome.hero.subtitle')}
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>{t('rhizome.stats.communities')}</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>12</span>
                  <span className={styles.statLabel}>{t('rhizome.stats.years')}</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>∞</span>
                  <span className={styles.statLabel}>{t('rhizome.stats.impact')}</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <OptimizedImage
                src="/images/rhizome-hero.jpg"
                alt={t('rhizome.hero.imageAlt')}
                width={600}
                height={400}
                priority
                className={styles.heroImageElement}
              />
              <div className={styles.heroImageOverlay} />
            </div>
          </div>
        </section>

        {/* Interactive Timeline */}
        <section className={styles.timeline}>
          <h2 className={styles.sectionTitle}>
            {t('rhizome.timeline.title')}
          </h2>
          <InteractiveTimeline />
        </section>

        {/* Story Cards */}
        <section className={styles.stories}>
          <h2 className={styles.sectionTitle}>
            {t('rhizome.stories.title')}
          </h2>
          <StoryCards />
        </section>

        {/* Impact Metrics */}
        <section className={styles.impact}>
          <h2 className={styles.sectionTitle}>
            {t('rhizome.impact.title')}
          </h2>
          <ImpactMetrics />
        </section>

        {/* Call to Action */}
        <section className={styles.cta}>
          <CallToAction />
        </section>
      </div>
    </PostModernLayout>
  )
}
