import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Banknote, DollarSign, Send } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const DonateSection: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const blurb = t(
    'donate-blurb',
    'We build resilient communities by connecting people, fostering innovation, and creating pathways for meaningful change. With your partnership, we can make a direct impact on those often excluded, whether recovering from conflict, marginalized due to their identity, or fighting for cultural recognition. Your support brings programs to life that honor cultural heritage, open economic doors, and deliver real, lasting change. Together, we create enduring connections that empower people to shape their own futures and transform their communities from the inside out.',
    'We build resilient communities by connecting people, fostering innovation, and creating pathways for meaningful change. With your partnership, we can make a direct impact on those often excluded, whether recovering from conflict, marginalized due to their identity, or fighting for cultural recognition. Your support brings programs to life that honor cultural heritage, open economic doors, and deliver real, lasting change. Together, we create enduring connections that empower people to shape their own futures and transform their communities from the inside out.'
  );

  const methods = [
    { icon: DollarSign, label: 'PayPal' },
    { icon: Banknote, label: 'eTransfer' },
    { icon: Send, label: 'Wise' },
    { icon: Send, label: 'Google Pay' },
    { icon: CreditCard, label: 'Credit / Debit' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-stone-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-4xl font-bold mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
        >
          {t('donate-title', 'Support Our Work', 'ادعم عملنا')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
        >
          {blurb}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-6"
        >
          {methods.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex items-center gap-2 px-5 py-3 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700 transition"
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DonateSection;
