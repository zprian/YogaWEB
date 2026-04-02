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

const about = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    bio2: z.string().optional(),
    image: z.string().optional(),
  }),
});

const settings = defineCollection({
  type: 'data',
  schema: z.object({
    instagram_handle: z.string().optional(),
    instagram_url: z.string().optional(),
    instagram_posts: z.array(z.object({
      url: z.string(),
      caption: z.string().optional(),
    })).optional(),
    facebook_url: z.string().optional(),
    whatsapp: z.string().optional(),
  }),
});

export const collections = { news, schedules, oils, about, settings };
