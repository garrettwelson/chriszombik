// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Define your collection(s)
const blogCollection = defineCollection({ 
    schema: z.object({
        title: z.string(),
        pubDate: z.string().transform(str => new Date(str)),
        description: z.string().optional(),
        author: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
          }).optional(),
      }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
};