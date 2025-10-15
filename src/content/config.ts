import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

// Tier 1: Core extension concepts
// Supports both flat files (simple-round-robin.md) and nested folders (advanced-round-robin/index.md)
const extensionsCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx', '*/index.md', '*/index.mdx'], base: 'src/data/extensions' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    category: z.string().optional(),
    draft: z.boolean().optional(),
    setupGuides: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(), // Supports both internal (/extensions/...) and external (https://...) links
        })
      )
      .optional(),
    metadata: metadataDefinition(),
  }),
});

// Tier 2: Platform implementation guides
const guidesCollection = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: 'src/data/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    platform: z.enum(['zapier', 'make', 'n8n']),
    extension: z.string(), // Links to extension slug
    draft: z.boolean().optional(),
    metadata: metadataDefinition(),
  }),
});

// Extension-specific guides (Version A structure: extensions/{ext}/guides/{platform}/)
const extensionGuidesCollection = defineCollection({
  loader: glob({ pattern: ['**/guides/**/*.md', '**/guides/**/*.mdx'], base: 'src/data/extensions' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    platform: z.enum(['zapier', 'make', 'n8n']),
    extension: z.string(), // Links to extension slug
    draft: z.boolean().optional(),
    metadata: metadataDefinition(),
  }),
});

export const collections = {
  post: postCollection,
  extensions: extensionsCollection,
  guides: guidesCollection,
  extensionGuides: extensionGuidesCollection,
};
