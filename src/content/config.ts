import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.enum([
      "Mack Richardson",
    ]),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      class: z.string().optional(),
    }),
    description: z
      .string()
      .max(
        160,
        "For best SEO results, please keep the description under 160 characters."
      ),
    draft: z.boolean().default(false),
    mackdaddy: z.boolean().default(false),
    category: z.enum([
      "Comic Books",
      "FileMaker",
      "MackDaddy Fun & Games",
      "Retro Gaming",
      "Sci-Fi",
      "Toys",
      "Web Dev"
    ]),
    tags: z.array(z.string()).optional(), // Add this line
  }),
});

export const collections = { blog };
