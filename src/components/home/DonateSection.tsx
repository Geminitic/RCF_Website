import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useLanguage } from '../../contexts/LanguageContext';

const DonateSection: React.FC = () => {
  const { t } = useLanguage();
  const paypalUrl = import.meta.env.VITE_PAYPAL_URL || '#';
  const etransferEmail = import.meta.env.VITE_ETRANSFER_EMAIL || 'donate@example.com';
  const cryptoAddress = import.meta.env.VITE_CRYPTO_ADDRESS || '0x0000000000000000000000000000000000000000';

  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState<'paypal' | 'etransfer' | 'crypto'>('paypal');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          method,
          amount: parseFloat(amount),
          currency: 'CAD',
          email
        })
      });
      setAmount('');
      setEmail('');
      alert(t('donate-success', 'Thank you for your support!', 'شكرًا لدعمك!'));
    } catch {
      alert(t('donate-error', 'Error sending donation info', 'حدث خطأ أثناء إرسال معلومات التبرع'));
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-stone-50 to-emerald-50">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold text-stone-900">
          {t('donate-title', 'Support Our Work', 'ادعم عملنا')}
        </h2>
        <div className="space-y-4">
          <a
            href={paypalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition-colors"
          >
            {t('donate-paypal', 'Donate with PayPal', 'التبرع عبر باي بال')}
          </a>
          <div className="text-stone-700">
            <p>
              {t('donate-etransfer', 'E-transfer:', 'التحويل الإلكتروني:')}{' '}
              <span className="font-mono">{etransferEmail}</span>
            </p>
            <p className="mt-2">{t('donate-crypto', 'Crypto Wallet:', 'محفظة العملات الرقمية:')}</p>
            <div className="flex justify-center mt-2">
              <QRCodeSVG value={cryptoAddress} size={128} includeMargin={true} />
            </div>
            <p className="mt-2 font-mono break-all">{cryptoAddress}</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-2 mt-6">
            <div>
              <input
                type="number"
                placeholder={t('donate-amount', 'Amount', 'المبلغ')}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value as any)}
                className="w-full border rounded px-3 py-2"
              >
                <option value="paypal">{t('donate-paypal-option', 'PayPal', 'باي بال')}</option>
                <option value="etransfer">{t('donate-etransfer-option', 'E-transfer', 'تحويل إلكتروني')}</option>
                <option value="crypto">{t('donate-crypto-option', 'Crypto', 'عملات رقمية')}</option>
              </select>
            </div>
            <div>
              <input
                type="email"
                placeholder={t('donate-email', 'Email (optional)', 'البريد الإلكتروني (اختياري)')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
            >
              {t('donate-submit', 'Send Donation Info', 'إرسال معلومات التبرع')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
