import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const DonateSection: React.FC = () => {
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
      alert('Thank you for your support!');
    } catch {
      alert('Error sending donation info');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-stone-50 to-emerald-50">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold text-stone-900">Support Our Work</h2>
        <div className="space-y-4">
          <a
            href={paypalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition-colors"
          >
            Donate with PayPal
          </a>
          <div className="text-stone-700">
            <p>E-transfer: <span className="font-mono">{etransferEmail}</span></p>
            <p className="mt-2">Crypto Wallet:</p>
            <div className="flex justify-center mt-2">
              <QRCodeSVG value={cryptoAddress} size={128} includeMargin={true} />
            </div>
            <p className="mt-2 font-mono break-all">{cryptoAddress}</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-2 mt-6">
            <div>
              <input
                type="number"
                placeholder="Amount"
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
                <option value="paypal">PayPal</option>
                <option value="etransfer">E-transfer</option>
                <option value="crypto">Crypto</option>
              </select>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
            >
              Send Donation Info
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
