import { defineCollection, z } from "astro:content"

const experiencesCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    logo: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    description: z.string(),
  }),
})

const projectCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    subtitle: z.string(),
    logo: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    images: z.array(z.string()),
    state: z.string(),
    technologies: z.array(z.string()),
  }),
})

export const collections = {
  experience: experiencesCollection,
  project: projectCollection,
}
