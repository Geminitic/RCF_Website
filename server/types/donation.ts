export interface Donation {
  id: string;
  method: 'etransfer' | 'crypto' | 'paypal';
  amount: number;
  currency: string;
  email?: string;
}
