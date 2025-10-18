# Content Migration Guideline

A comprehensive guide for migrating web content to MDX guide format in the EnforcedFlow content system.

## Overview

### Purpose

This guideline provides a systematic approach for migrating tutorial content from web pages (WordPress, blog posts, etc.) to the MDX-based guide system while preserving the original content and enhancing it with modern layout features.

### When to Use

- Migrating blog posts to product guides
- Converting tutorial content to documentation
- Updating existing guides with new web content
- Standardizing content across platforms

### Key Principle

**Preserve original content verbatim** - Do not alter, paraphrase, or rewrite the source content during migration.

## Migration Process

### Step 1: Content Extraction

Extract the complete HTML content from the source web page.

**Tools:**

- WebFetch tool for programmatic extraction
- Browser DevTools for manual inspection

**What to Extract:**

- All text content (headings, paragraphs, lists)
- Complete HTML structure including layout divs
- All image URLs
- Any special formatting or notes

**Key Point:** Extract the raw HTML, not just the rendered text. You need the structure to identify multi-column layouts.

---

### Step 2: Identify Multi-Column Layouts

Analyze the HTML structure to detect multi-column layouts. Content sources may use different column systems.

**Important:** The detection is **structure-based**, not content-based. Don't try to identify columns by inspecting what's inside them (images, text, lists, etc.). The HTML structure tells you everything you need to know.

---

#### Option A: WordPress Gutenberg Columns

Look for the parent container:

```html
<div class="wp-block-columns"></div>
```

Count the direct children:

```html
  <div class="wp-block-column">[CONTENT]</div>
  <div class="wp-block-column">[CONTENT]</div>
  <!-- Optional 3rd column -->
  <div class="wp-block-column">[CONTENT]</div>
</div>
```

**Detection Rule:** Number of `wp-block-column` children = Number of columns

- 2 children = 2-column layout
- 3 children = 3-column layout

---

#### Option B: Kadence Columns

Look for the parent container:

```html
<div class="kb-row-layout-wrap kb-row-layout-id... wp-block-kadence-rowlayout"></div>
```

Look for the column wrapper with column count class:

```html
<div class="kt-row-column-wrap kt-has-2-columns ..."></div>
```

Individual columns:

```html
  <div class="wp-block-kadence-column kadence-column...">
    <div class="kt-inside-inner-col">
      [CONTENT]
    </div>
  </div>
  <div class="wp-block-kadence-column kadence-column...">
    <div class="kt-inside-inner-col">
      [CONTENT]
    </div>
  </div>
  <!-- Optional 3rd column -->
</div>
```

**Detection Rule:** Look for `kt-has-X-columns` class on the wrapper

- `kt-has-2-columns` = 2-column layout
- `kt-has-3-columns` = 3-column layout

**Kadence Structure Notes:**

- Kadence uses nested wrappers: `kb-row-layout-wrap` → `kt-row-column-wrap` → `wp-block-kadence-column` → `kt-inside-inner-col`
- The column count is explicitly stated in the `kt-has-X-columns` class
- Each column's content is inside `kt-inside-inner-col`
- Images may use `wp-block-kadence-image` with `<figcaption>` elements

---

### Step 3: Image Collection

Collect and organize all images from the source content.

**1. List all image URLs**

Extract image URLs from the HTML:

```html
<img src="https://example.com/wp-content/uploads/2025/09/screenshot-name.png" />
```

**2. Create image directory**

```bash
mkdir -p src/assets/images/extensions/{extension-name}
```

**3. Download images**

Use curl to download each image:

```bash
cd src/assets/images/extensions/{extension-name}
curl -s -o "01-descriptive-name.png" "https://example.com/image-url.png"
curl -s -o "02-descriptive-name.png" "https://example.com/image-url-2.png"
```

**Naming Convention:**

- Format: `##-descriptive-name.{ext}`
- Sequential numbering: `01-`, `02-`, `03-`, etc.
- Descriptive names: `create-group`, `agent-fields`, `zapier-setup`
- Keep extensions: `.png`, `.jpg`, `.gif`

**Examples:**

- `01-create-group.png`
- `02-agent-fields.png`
- `03-routing-fields.png`
- `19-zapier-demo.gif`

---

### Step 4: File Setup

Prepare the MDX file for content migration.

**1. File Location**

```
src/data/extensions/{extension-name}/guides/{platform}/setup.mdx
```

Example:

```
src/data/extensions/advanced-round-robin/guides/zapier/setup.mdx
```

**2. Convert Format (if needed)**

Rename `.md` to `.mdx` to enable component usage:

```bash
mv setup.md setup.mdx
```

**3. Add Frontmatter**

```yaml
---
title: 'Guide Title'
description: 'Brief description of what this guide covers'
platform: 'zapier'
extension: 'extension-name'
---
```

**4. Import Components**

Add at the top of the MDX file (after frontmatter):

```mdx
import MultiColumn from '~/components/ui/MultiColumn.astro';

;
```

---

### Step 5: Content Migration

Migrate the text content verbatim from the source.

**Process:**

1. Extract text from each HTML element
2. Convert HTML headings to Markdown headings
3. Preserve lists (ordered and unordered)
4. Keep bold, italic, and link formatting
5. **Do not alter the wording**

**HTML to Markdown Conversion:**

```html
<h2>Setup Agent Fields</h2>
```

→

```markdown
## Setup Agent Fields
```

```html
<ol>
  <li>Set the Field Type to Multi-Select</li>
  <li>Set a label</li>
</ol>
```

→

```markdown
1. Set the Field Type to Multi-Select
2. Set a label
```

```html
<p>Before setting up agents, you need to <strong>decide</strong> what kind of information to store.</p>
```

→

```markdown
Before setting up agents, you need to **decide** what kind of information to store.
```

**Image Placeholders:**

Replace image HTML with Markdown syntax:

```markdown
![](~/assets/images/extensions/{extension-name}/01-image-name.png)
```

---

### Step 6: Apply Multi-Column Layouts

Convert HTML column structures to MultiColumn components.

---

#### Converting WordPress Gutenberg Columns

**2-Column Layout:**

HTML:

```html
<div class="wp-block-columns">
  <div class="wp-block-column">
    <figure class="wp-block-image">
      <img src="image1.png" />
    </figure>
  </div>
  <div class="wp-block-column">
    <ol>
      <li>Step 1</li>
      <li>Step 2</li>
    </ol>
  </div>
</div>
```

MDX:

```mdx
<MultiColumn ratio="equal" gap="md">
  <div slot="left">
    ![](~/assets/images/extensions/{extension-name}/image1.png)
  </div>

  <div slot="right">
    1. Step 1
    2. Step 2
  </div>
</MultiColumn>
```

**3-Column Layout:**

HTML:

```html
<div class="wp-block-columns">
  <div class="wp-block-column">
    <img src="image1.png" />
  </div>
  <div class="wp-block-column">
    <img src="image2.png" />
  </div>
  <div class="wp-block-column">
    <img src="image3.png" />
  </div>
</div>
```

MDX:

```mdx
<MultiColumn columns={3} gap="md">
  <div slot="left">
    ![](~/assets/images/extensions/{extension-name}/image1.png)
  </div>

<div slot="center">![](~/assets/images/extensions/{extension - name}/image2.png)</div>

  <div slot="right">
    ![](~/assets/images/extensions/{extension-name}/image3.png)
  </div>
</MultiColumn>
```

---

#### Converting Kadence Columns

**2-Column Layout (List + Image):**

HTML:

```html
<div class="kb-row-layout-wrap wp-block-kadence-rowlayout">
  <div class="kt-row-column-wrap kt-has-2-columns">
    <div class="wp-block-kadence-column">
      <div class="kt-inside-inner-col">
        <ol>
          <li>The trigger listens to new google form submissions.</li>
          <li>Information from the form is then sent to OpenAI.</li>
          <li>Create a new task for a human to review.</li>
          <li>Link is emailed to the reviewer.</li>
        </ol>
      </div>
    </div>
    <div class="wp-block-kadence-column">
      <div class="kt-inside-inner-col">
        <figure class="wp-block-kadence-image">
          <img src="workflow-screenshot.png" alt="" />
          <figcaption>Workflow to create new tasks for a human to review</figcaption>
        </figure>
      </div>
    </div>
  </div>
</div>
```

MDX:

```mdx
<MultiColumn ratio="equal" gap="md">
  <div slot="left">
    1. The trigger listens to new google form submissions.
    2. Information from the form is then sent to OpenAI.
    3. Create a new task for a human to review.
    4. Link is emailed to the reviewer.
  </div>

  <div slot="right">
    ![Workflow to create new tasks for a human to review](~/assets/images/extensions/{extension-name}/workflow-screenshot.png)
  </div>
</MultiColumn>
```

**2-Column Layout (Text + Image with Caption):**

HTML:

```html
<div class="kb-row-layout-wrap wp-block-kadence-rowlayout">
  <div class="kt-row-column-wrap kt-has-2-columns">
    <div class="wp-block-kadence-column">
      <div class="kt-inside-inner-col">
        <p>
          The output from the new human in the loop task is a url. A human can visit this url in a browser to review the
          content.
        </p>
      </div>
    </div>
    <div class="wp-block-kadence-column">
      <div class="kt-inside-inner-col">
        <figure class="wp-block-kadence-image">
          <img src="task-output.png" alt="" />
          <figcaption>The output after a task has been created</figcaption>
        </figure>
      </div>
    </div>
  </div>
</div>
```

MDX:

```mdx
<MultiColumn ratio="equal" gap="md">
  <div slot="left">
    The output from the new human in the loop task is a url. A human can visit this url in a browser to review the content.
  </div>

  <div slot="right">
    ![The output after a task has been created](~/assets/images/extensions/{extension-name}/task-output.png)
  </div>
</MultiColumn>
```

---

**Key Points:**

- Extract content from within `kt-inside-inner-col` for Kadence
- Extract content from `wp-block-column` for WordPress Gutenberg
- Preserve markdown formatting within slots
- Use appropriate slot names: `left`, `center`, `right`
- Keep consistent gap sizing (usually `md`)
- Convert `<figcaption>` to markdown alt text: `![caption text](path)`

---

### Step 7: Image Formatting

Apply special formatting to images that need sizing or centering.

**Full-Width Images (Default):**

No special formatting needed:

```mdx
![](~/assets/images/extensions/{extension-name}/image.png)
```

**Centered & Sized Images:**

For images that should be centered and limited in width:

```mdx
<div style="display: flex; justify-content: center; width: 100%;">
  <div style="width: 70%;">

![](~/assets/images/extensions/{extension-name}/image.png)

  </div>
</div>
```

**Width Options:**

- `50%` - Half width
- `60%` - Moderately reduced
- `70%` - Standard for wide images
- `80%` - Slightly reduced

**When to Use:**

- Wide landscape screenshots that dominate the page
- Images that need emphasis but not full width
- Hero images or primary visuals

---

## MultiColumn Component Reference

### Props

| Prop         | Type                                         | Default   | Description                               |
| ------------ | -------------------------------------------- | --------- | ----------------------------------------- |
| `columns`    | `2` \| `3`                                   | `2`       | Number of columns to display              |
| `ratio`      | `'equal'` \| `'left-wide'` \| `'right-wide'` | `'equal'` | Column width distribution (2-column only) |
| `gap`        | `'sm'` \| `'md'` \| `'lg'` \| `'xl'`         | `'md'`    | Spacing between columns                   |
| `breakpoint` | `'sm'` \| `'md'` \| `'lg'`                   | `'md'`    | Responsive breakpoint for stacking        |

### Gap Sizes

- `sm`: 1rem (16px)
- `md`: 2rem (32px) - **Recommended default**
- `lg`: 3rem (48px)
- `xl`: 4rem (64px)

### Ratio Options (2-Column Only)

- `equal`: 50/50 split
- `left-wide`: 60/40 split (left column wider)
- `right-wide`: 40/60 split (right column wider)

**Note:** 3-column layouts always use equal widths. The `ratio` prop is ignored when `columns={3}`.

### Slots

**2-Column:**

- `left` - Left column content
- `right` - Right column content

**3-Column:**

- `left` - Left column content
- `center` - Center column content
- `right` - Right column content

### Usage Examples

**Equal 2-Column:**

```mdx
<MultiColumn ratio="equal" gap="md">
  <div slot="left">Content here</div>
  <div slot="right">Content here</div>
</MultiColumn>
```

**Left-Wide 2-Column:**

```mdx
<MultiColumn ratio="left-wide" gap="lg">
  <div slot="left">Main content (60%)</div>
  <div slot="right">Sidebar (40%)</div>
</MultiColumn>
```

**3-Column:**

```mdx
<MultiColumn columns={3} gap="md">
  <div slot="left">Content 1</div>
  <div slot="center">Content 2</div>
  <div slot="right">Content 3</div>
</MultiColumn>
```

---

## File Structure

### Directory Organization

```
src/
├── data/
│   └── extensions/
│       └── {extension-name}/
│           └── guides/
│               └── {platform}/
│                   └── setup.mdx
└── assets/
    └── images/
        └── extensions/
            └── {extension-name}/
                ├── 01-descriptive-name.png
                ├── 02-descriptive-name.png
                └── ...
```

### Example: Advanced Round Robin

```
src/
├── data/
│   └── extensions/
│       └── advanced-round-robin/
│           └── guides/
│               └── zapier/
│                   └── setup.mdx
└── assets/
    └── images/
        └── extensions/
            └── advanced-round-robin/
                ├── 01-create-group.png
                ├── 02-agent-fields.png
                ├── 03-routing-fields.png
                └── ... (19 total images)
```

---

## Best Practices

### ✅ Do:

1. **Preserve original text verbatim**
   - Keep exact wording from source
   - Maintain heading hierarchy
   - Preserve list formatting

2. **Use structure-based detection**
   - Look for `wp-block-columns` in HTML
   - Count `wp-block-column` children
   - Don't guess based on content

3. **Number images sequentially**
   - Start with `01-`
   - Use two-digit padding (`01`, `02`, ... `10`, `11`)
   - Makes ordering clear

4. **Use descriptive image filenames**
   - `create-group`, `agent-fields`, `zapier-setup`
   - Hyphen-separated words
   - Lowercase only

5. **Test responsive behavior**
   - Check on mobile viewports
   - Verify columns stack correctly
   - Ensure images scale properly

6. **Keep image file sizes reasonable**
   - Screenshots should be < 500KB ideally
   - Use PNG for UI screenshots
   - Use JPG for photos
   - Use GIF sparingly for animations

### ❌ Don't:

1. **Don't alter or rewrite content**
   - Avoid paraphrasing
   - Don't add your own commentary
   - Keep the original voice

2. **Don't guess at column layouts**
   - Must have HTML evidence (`wp-block-columns`)
   - Don't create columns just because images appear side-by-side
   - Structure determines layout, not visual appearance

3. **Don't mix content and structure detection**
   - Column detection is purely structural
   - Content type doesn't matter for detection
   - Extract first, then identify structure

4. **Don't skip image alt text**
   - Add descriptive alt text when available
   - Use context from surrounding content
   - Helps with accessibility

5. **Don't forget component imports**
   - Must import `MultiColumn` at top of MDX
   - Import before first usage
   - Use correct path: `~/components/ui/MultiColumn.astro`

---

## Common Issues & Solutions

### Issue 1: Astro Compiler Error - Slot Name Must Be Static

**Error Message:**

```
slot[name] must be a static string
```

**Cause:**
Trying to use a dynamic expression for slot name:

```mdx
<slot name={columns === 3 ? 'column-3' : 'column-2'} />
```

**Solution:**
Use conditional rendering with static slot names:

```mdx
{columns === 3 ? <slot name="column-3" /> : <slot name="column-2" />}
```

---

### Issue 2: Image Paths Not Resolving

**Symptoms:**

- Images show as broken links
- 404 errors in browser console

**Common Causes:**

- Using relative paths: `./images/...`
- Using absolute paths: `/images/...`
- Missing `~` alias

**Solution:**
Always use the `~` alias for Astro path resolution:

```mdx
![](~/assets/images/extensions/{extension-name}/image.png)
```

---

### Issue 3: Images Too Wide

**Symptoms:**

- Images dominate the page
- Layout feels unbalanced
- Text content squeezed

**Solution:**
Wrap image in centered container with width limit:

```mdx
<div style="display: flex; justify-content: center; width: 100%;">
  <div style="width: 70%;">

![](~/assets/images/extensions/{extension-name}/image.png)

  </div>
</div>
```

Adjust percentage as needed (60%, 70%, 80%).

---

### Issue 4: MultiColumn Component Not Found

**Error Message:**

```
Cannot find module '~/components/ui/MultiColumn.astro'
```

**Solution:**
Ensure the import statement is at the top of your MDX file:

```mdx
---
title: 'Your Guide'
---

import MultiColumn from '~/components/ui/MultiColumn.astro';

## Your Content
```

---

### Issue 5: Columns Not Stacking on Mobile

**Symptoms:**

- Columns remain side-by-side on small screens
- Content squeezed or cut off
- Horizontal scrolling required

**Cause:**
Incorrect or missing breakpoint configuration.

**Solution:**
MultiColumn handles responsive behavior automatically. Ensure you're not overriding with custom CSS. The component uses:

- Mobile (< 768px): Stacked vertically
- Desktop (≥ 768px): Side-by-side

No additional configuration needed.

---

## Example Migration

### Source: WordPress Blog Post

**URL:** `https://enforcedflow.com/advance-actions/skill-based-time-based-and-priority-based-round-robin/`

### Result: MDX Guide

**Path:** `src/data/extensions/advanced-round-robin/guides/zapier/setup.mdx`

### Images Downloaded: 19 images

```
01-create-group.png
02-agent-fields.png
03-routing-fields.png
04-field-setup.png
05-add-agents.png
06-agent-details.png
07-testing.png
08-zapier-setup.png
09-zapier-action.png
10-agent-form-1.png
11-agent-form-2.png
12-agent-form-3.png
13-agents-list.png
14-testing-tab.png
15-zapier-enforcedflow.png
16-zapier-config.png
17-zapier-test.png
18-zapier-output.png
19-zapier-demo.gif
```

### Multi-Column Layouts Applied:

**1. Two routing field images (side-by-side):**

```mdx
<MultiColumn ratio="equal" gap="md">
  <div slot="left">![](~/assets/images/extensions/advanced-round-robin/03-routing-fields.png)</div>
  <div slot="right">![](~/assets/images/extensions/advanced-round-robin/04-field-setup.png)</div>
</MultiColumn>
```

**2. Image with instructions (side-by-side):**

```mdx
<MultiColumn ratio="equal" gap="md">
  <div slot="left">![](~/assets/images/extensions/advanced-round-robin/07-testing.png)</div>
  <div slot="right">1. Set the Field Type to Multi-Select 2. Set a label 3. Add options (one by one) 4. Click Save</div>
</MultiColumn>
```

**3. Three agent form screenshots (side-by-side-by-side):**

```mdx
<MultiColumn columns={3} gap="md">
  <div slot="left">![](~/assets/images/extensions/advanced-round-robin/10-agent-form-1.png)</div>
  <div slot="center">![](~/assets/images/extensions/advanced-round-robin/11-agent-form-2.png)</div>
  <div slot="right">![](~/assets/images/extensions/advanced-round-robin/12-agent-form-3.png)</div>
</MultiColumn>
```

---

## Quick Reference Checklist

Use this checklist for each migration:

- [ ] Extract complete HTML from source page
- [ ] Identify all multi-column structures:
  - [ ] WordPress Gutenberg: `wp-block-columns` structures
  - [ ] Kadence: `kb-row-layout-wrap` structures
- [ ] List all image URLs
- [ ] Create image directory: `src/assets/images/extensions/{name}/`
- [ ] Download images with sequential naming
- [ ] Convert file to `.mdx` format
- [ ] Add frontmatter (title, description, platform, extension)
- [ ] Import MultiColumn component
- [ ] Migrate text content verbatim
- [ ] Convert column structures to MultiColumn components
- [ ] Replace image placeholders with markdown syntax
- [ ] Convert `<figcaption>` elements to markdown alt text
- [ ] Apply image sizing/centering where needed
- [ ] Test on desktop and mobile viewports
- [ ] Verify all images load correctly
- [ ] Check responsive column stacking
- [ ] Review final content for accuracy

---

## Additional Resources

- **MultiColumn Component Documentation:** `docs/multi-column-component.md`
- **Example Guide:** `src/data/extensions/advanced-round-robin/guides/zapier/setup.mdx`
- **Component Source:** `src/components/ui/MultiColumn.astro`

---

**Last Updated:** October 2025
**Maintainer:** EnforcedFlow Content Team
