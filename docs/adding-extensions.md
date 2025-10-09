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

## 3. Adding to Navigation

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

## 4. Adding More Platform Guides

To add guides for other platforms (Make, n8n, etc.):

### Create Additional Guide Files
```
guides/
├── zapier/
│   └── setup.md
├── make/
│   └── setup.md       # New platform
└── n8n/
    └── setup.md       # Another platform
```

### Frontmatter for Each Platform
```yaml
---
title: "Extension Name in Make"
description: "Set up [feature] in your Make scenarios"
platform: "make"        # Use: "zapier", "make", or "n8n"
extension: "{slug}"
---
```

### Automatic Sidebar Detection

**No code changes needed!** The extension page automatically:
- Detects all guides for that extension
- Groups them by platform
- Shows "Setup Guides" section with links
- Example: "Zapier Setup Guide", "Make Setup Guide"

**If no guides exist:** The "Setup Guides" section won't appear at all.

## Quick Reference

**Folder structure:**
```
extensions/{slug}/
├── index.md           → /extensions/{slug}
└── guides/
    └── {platform}/
        └── setup.md   → /extensions/{slug}/guides/{platform}/setup
```

**Required changes:**
1. Create folder + files
2. Add to navigation.ts
3. Done!

**Optional:**
- Add ExtensionCard to homepage (`src/pages/index.astro`)
- Add multiple platform guides (auto-detected)
