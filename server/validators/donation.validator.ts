import Joi from 'joi';

export interface Donation {
  id: string;
  method: 'etransfer' | 'crypto' | 'paypal';
  amount: number;
  currency: string;
  email?: string;
}

export const donationSchema = Joi.object({
  id: Joi.string().required(),
  method: Joi.string().valid('etransfer', 'crypto', 'paypal').required(),
  amount: Joi.number().min(1).required(),
  currency: Joi.string().length(3).required(),
  email: Joi.string().email().optional()
});

export function validateDonation(donation: any): Donation | null {
  const { error, value } = donationSchema.validate(donation);
  return error ? null : (value as Donation);
}
