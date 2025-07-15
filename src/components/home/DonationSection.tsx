import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import QRCode from 'qrcode.react';

interface DonationInfo {
  etransfer: string;
  cryptoWallet: string;
  paypal: string;
}

const DonationSection: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [info, setInfo] = useState<DonationInfo | null>(null);

  useEffect(() => {
    fetch('/api/donations')
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch(() => setInfo(null));
  }, []);

  if (!info) return null;

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        <h2
          className="text-4xl font-bold text-stone-900"
          style={{ fontFamily: '"Playfair Display", "Noto Sans Arabic", serif' }}
        >
          {t('donate-title', 'Support Our Work', 'ادعم عملنا')}
        </h2>
        <p
          className={`text-lg text-stone-600 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
        >
          {t(
            'donate-description',
            'Your contributions help us continue community initiatives.',
            'مساهماتكم تساعدنا في مواصلة مبادرات المجتمع.'
          )}
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold">E-Transfer</h3>
            <p className="break-all text-sm">{info.etransfer}</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Crypto Wallet</h3>
            <p className="break-all text-sm">{info.cryptoWallet}</p>
            {info.cryptoWallet && <QRCode value={info.cryptoWallet} size={120} />}
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">PayPal</h3>
            {info.paypal && (
              <a
                href={info.paypal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Donate with PayPal
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
