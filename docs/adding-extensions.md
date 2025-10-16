# Adding New Extensions

Quick guide for adding new extensions to the EnforcedFlow content site.

## 1. Create the Folder Structure

Create a new folder under `src/data/extensions/`:

```
src/data/extensions/{extension-slug}/
├── index.md                    # Extension overview page
└── guides/
    └── zapier/
        └── setup.md            # Platform-specific setup guide
```

**Example:** For "Task Scheduler" extension:
```
src/data/extensions/task-scheduler/
├── index.md
└── guides/
    └── zapier/
        └── setup.md
```

## 2. What Each File Is For

### `index.md` - Extension Overview
- **URL:** `/extensions/{slug}`
- **Purpose:** Main landing page for the extension
- **Content:** Features, use cases, benefits, "how it works"
- **Linked from:** Homepage "Learn More" button, navigation dropdown

**Frontmatter:**
```yaml
---
title: 'Your Extension Name'
description: 'Brief description of what it does'
icon: '🎯'  # Optional emoji
image: '/images/extensions/your-extension-slug/hero-image.png'  # Optional hero image
setupGuides:
  - label: "Zapier Setup Guide"
    href: "/extensions/your-extension-slug/guides/zapier/setup"
  - label: "API Guide"
    href: "https://app.enforcedflow.com/docs/api#/your-endpoint"
---
```

### `guides/zapier/setup.md` - Setup Guide
- **URL:** `/extensions/{slug}/guides/zapier/setup`
- **Purpose:** Step-by-step implementation guide
- **Content:** Prerequisites, setup steps, configuration, troubleshooting
- **Linked from:** Homepage "Get Started" button, extension page sidebar

**Frontmatter:**
```yaml
---
title: "Extension Name in Zapier"
description: "Set up [feature] in your Zapier workflows"
platform: "zapier"
extension: "{extension-slug}"  # Must match folder name
---
```

## 3. Adding Hero Images (Optional)

Hero images appear full-width between the title/description and the main content area.

### Image Guidelines

**Recommended Specifications:**
- **Width:** 1200-1400px
- **Format:** PNG (for UI/screenshots) or JPG/WebP (for graphics)
- **File size:** Keep under 200-300KB (use TinyPNG or similar to optimize)
- **Aspect ratio:** 16:9 (1400×788px) or 3:2 (1400×933px) for best results

### Where to Place Images

Images must be placed in the `public/` directory to work in production:

```
public/images/extensions/{extension-slug}/
└── hero-image.png
```

**Example:**
```
public/images/extensions/human-in-the-loop/
└── hil-featured-image.png
```

### Adding Image to Frontmatter

Reference the image using the `/images/` path:

```yaml
---
title: "Your Extension"
image: "/images/extensions/your-extension-slug/hero-image.png"
---
```

**Important:** Do NOT use `/src/assets/` paths - they won't work in production builds. Always use the `public/images/` directory and reference with `/images/` paths.

## 4. Adding to Navigation

Update `src/navigation.ts` to add your extension to the site navigation:

```typescript
const extensionLinks = [
  // ... existing extensions
  {
    text: 'Your Extension Name',
    href: getPermalink('/extensions/your-extension-slug'),
  },
];
```

This automatically adds your extension to:
- Header "Extensions" dropdown menu
- Footer "Extensions" section

## 5. Configuring Setup Guides

Setup guides appear in the sidebar "Setup Guides" box on the extension page. Configure them in the frontmatter using the `setupGuides` field.

### Setup Guide Configuration

In your `index.md` frontmatter:

```yaml
setupGuides:
  - label: "Zapier Setup Guide"
    href: "/extensions/your-extension-slug/guides/zapier/setup"
  - label: "API Guide"
    href: "https://app.enforcedflow.com/docs/api#/your-endpoint"
```

**Features:**
- Supports both **internal links** (relative paths like `/extensions/...`)
- Supports **external links** (full URLs like `https://...`)
- External links automatically open in a new tab
- Shows in order listed in frontmatter
- If no `setupGuides` are defined, the sidebar section won't appear

### Creating Guide Pages

To add guides for different platforms:

**1. Create the guide file:**
```
guides/
├── zapier/
│   └── setup.md
├── make/
│   └── setup.md       # Additional platform
└── api/
    └── setup.md       # API integration guide
```

**2. Add to setupGuides in `index.md`:**
```yaml
setupGuides:
  - label: "Zapier Setup Guide"
    href: "/extensions/{slug}/guides/zapier/setup"
  - label: "Make Setup Guide"
    href: "/extensions/{slug}/guides/make/setup"
  - label: "API Integration"
    href: "/extensions/{slug}/guides/api/setup"
```

**3. Frontmatter for each guide:**
```yaml
---
title: "Extension Name in Make"
description: "Set up [feature] in your Make scenarios"
platform: "make"        # Use: "zapier", "make", "n8n", or "api"
extension: "{slug}"     # Must match extension folder name
---
```

## Quick Reference

**Folder structure:**
```
src/data/extensions/{slug}/
├── index.md                      → /extensions/{slug}
└── guides/
    └── {platform}/
        └── setup.md              → /extensions/{slug}/guides/{platform}/setup

public/images/extensions/{slug}/
└── hero-image.png                → /images/extensions/{slug}/hero-image.png
```

**Required steps:**
1. Create extension folder + `index.md`
2. Add to `navigation.ts`
3. Done!

**Optional enhancements:**
- Add hero image (place in `public/images/extensions/{slug}/`)
- Configure `setupGuides` in frontmatter (with internal/external links)
- Add multiple platform guides
- Add ExtensionCard to homepage (`src/pages/index.astro`)

**Key reminders:**
- Images must be in `public/images/` (not `src/assets/`)
- Use `/images/` paths in frontmatter for images
- `setupGuides` supports both internal and external links
- External links in `setupGuides` open in new tabs automatically
