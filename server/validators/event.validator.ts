import Joi from 'joi';

export interface Event {
  id: string;
  title: string;
  description?: string;
  date?: string;
  time?: string;
  location?: string;
  link?: string;
  source: string;
  organizer: string;
  priority: number;
  category: string;
  deadline: boolean;
  tags: string[];
}

export const eventSchema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().min(5).max(200).required(),
  description: Joi.string().max(500).optional(),
  date: Joi.string().optional(),
  time: Joi.string().optional(),
  location: Joi.string().max(100).optional(),
  link: Joi.string().uri().optional(),
  source: Joi.string().uri().required(),
  organizer: Joi.string().required(),
  priority: Joi.number().min(0).max(10).required(),
  category: Joi.string().required(),
  deadline: Joi.boolean().required(),
  tags: Joi.array().items(Joi.string()).max(5).required()
});

export function validateEvent(event: any): Event | null {
  const { error, value } = eventSchema.validate(event);
  return error ? null : (value as Event);
}
