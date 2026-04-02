import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

const schedules = defineCollection({
  type: 'data',
  schema: z.object({
    classes: z.array(z.object({
      day: z.string(),
      time: z.string(),
      name: z.string(),
      instructor: z.string(),
      level: z.string(),
      duration: z.string(),
    })),
  }),
});

const oils = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    benefits: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = { news, schedules, oils };
