# Phase 1: Foundation Implementation

**Goal:** Create functional homepage + 3 extension pages + 3 guide pages

**Status:** Planning

---

## What We're Building

### 1. Homepage
- Hero section (headline, subheadline, CTA)
- 3 extension blocks/cards below hero
- Clean, simple layout (similar to current enforcedflow.com)

### 2. Extension Landing Pages (3 separate pages)
- `/extensions/round-robin` (Advanced Round Robin)
- `/extensions/simple-round-robin` (Simple Round Robin)
- `/extensions/human-in-the-loop` (Human-in-the-Loop)

### 3. Implementation Guides (3 pages)
- `/guides/zapier/round-robin`
- `/guides/zapier/simple-round-robin`
- `/guides/zapier/human-in-the-loop`

### 4. Navigation
- Simple nav: Home | Extensions | Guides
- Extension dropdown showing 3 extensions
- Guides organized by platform

### Deferred to Later
- WordPress migration (manual, as needed)
- Static pages (About, Privacy, Terms, Contact)
- Blog posts (use existing AstroWind blog)
- Tier 3 recipes

---

## Content Structure

```
src/data/
├── extensions/
│   ├── round-robin.md
│   ├── simple-round-robin.md
│   └── human-in-the-loop.md
└── guides/
    └── zapier/
        ├── round-robin.md
        ├── simple-round-robin.md
        └── human-in-the-loop.md
```

---

## Implementation Steps

### Step 1: Content Collections Setup (30 min)
**Tasks:**
- [ ] Update `src/content/config.ts` with extensions and guides collections
- [ ] Create directory structure (`src/data/extensions`, `src/data/guides/zapier`)
- [ ] Define schema for frontmatter

**Schema:**
```typescript
// Extensions (Tier 1)
{
  title: string,
  description: string,
  icon: string (optional),
  category: string (optional),
  draft: boolean (optional)
}

// Guides (Tier 2)
{
  title: string,
  description: string,
  platform: 'zapier' | 'make' | 'n8n',
  extension: string (slug reference),
  draft: boolean (optional)
}
```

---

### Step 2: Layouts & Components (2-3 hours)
**Tasks:**
- [ ] Create `src/layouts/ExtensionLayout.astro` (Tier 1 pages)
  - Full-width hero with title/description
  - Table of contents sidebar
  - Main content area (prose)
  - "Getting Started" CTA section
  - Related guides section

- [ ] Create `src/layouts/GuideLayout.astro` (Tier 2 pages)
  - Sticky sidebar with TOC
  - Main content with code blocks
  - Prerequisites callout
  - Screenshot support
  - "Next Steps" section

- [ ] Create `src/components/ExtensionCard.astro` (homepage blocks)
  - Icon/image
  - Title
  - Short description
  - CTA buttons (Learn More, Get Started)

- [ ] Update navigation component
  - Add Extensions dropdown
  - Add Guides section
  - Mobile responsive

---

### Step 3: Homepage (1-2 hours)
**Tasks:**
- [ ] Create/update `src/pages/index.astro`
- [ ] Hero section
  - Headline: "Enhance Your Zapier Automations with Smart Extensions"
  - Subheadline: Value proposition
  - Primary CTA: "Get Started with Free Zapier Integration"

- [ ] Extension blocks (3 cards)
  - Round Robin (Advanced)
  - Simple Round Robin
  - Human-in-the-Loop

- [ ] Optional: Brief "How it works" section

---

### Step 4: Content Creation - Extensions (2-3 hours)

#### `/extensions/round-robin`
**Sections:**
- What is Advanced Round Robin?
- When to use it
- Key features:
  - Skill-based routing
  - Time-based availability
  - Priority/weighted distribution
- Use cases (support tickets, sales leads)
- How it works (flow diagram)
- Getting started → link to Zapier guide
- Popular recipes (coming soon)

#### `/extensions/simple-round-robin`
**Sections:**
- What is Simple Round Robin?
- When to use it (basic rotation needs)
- Key features:
  - Sequential rotation
  - Equal distribution
  - No complex rules
- Use cases (simple team assignment)
- How it works
- Getting started → link to Zapier guide

#### `/extensions/human-in-the-loop`
**Sections:**
- What is Human-in-the-Loop?
- When to use it (AI workflows, compliance, accuracy)
- Key features:
  - Review & approval workflows
  - AI output verification
  - Compliance checkpoints
- Use cases (AI content review, email approval)
- How it works (approval flow)
- Getting started → link to Zapier guide

---

### Step 5: Content Creation - Guides (2-3 hours)

#### `/guides/zapier/round-robin`
**Sections:**
- Prerequisites
- Concepts → link to extension page
- Installation & setup
- Configuration:
  - Creating rotation groups
  - Setting up agent fields
  - Routing rules (skill, time, priority)
  - Adding agents
- Available actions in Zapier
- Common patterns/workflows
- Testing
- Troubleshooting
- Next steps

#### `/guides/zapier/simple-round-robin`
**Sections:**
- Prerequisites
- Concepts → link to extension page
- Installation & setup
- Configuration (simplified)
- Available actions in Zapier
- Quick start workflow
- Testing
- Troubleshooting
- Next steps

#### `/guides/zapier/human-in-the-loop`
**Sections:**
- Prerequisites
- Concepts → link to extension page
- Installation & setup
- Creating review workflows:
  - Step 1: Generate content (AI/automation)
  - Step 2: Create review task
  - Step 3: Configure review trigger
  - Step 4: Filter approved content
  - Step 5: Send final output
- Available actions in Zapier
- Common patterns
- Testing
- Troubleshooting
- Next steps

---

### Step 6: Routing & Navigation (1 hour)
**Tasks:**
- [ ] Create dynamic routes:
  - `src/pages/extensions/[...slug].astro`
  - `src/pages/guides/[platform]/[...slug].astro`

- [ ] Set up navigation menu:
  - Home
  - Extensions (dropdown):
    - Round Robin (Advanced)
    - Simple Round Robin
    - Human-in-the-Loop
  - Guides (dropdown):
    - Zapier Guides
    - (Make.com - coming soon)

- [ ] Breadcrumbs:
  - Extension page: Home > Extensions > [Extension Name]
  - Guide page: Home > Guides > Zapier > [Guide Name]

- [ ] Internal linking:
  - Extension pages link to their guides
  - Guides link back to extension pages
  - Homepage cards link to extension pages

---

### Step 7: Polish & Testing (1-2 hours)
**Tasks:**
- [ ] SEO optimization:
  - Meta titles & descriptions
  - Open Graph tags
  - Proper heading hierarchy

- [ ] Styling & responsiveness:
  - Mobile menu working
  - Cards responsive
  - Typography readable
  - Code blocks styled

- [ ] Cross-browser testing
- [ ] Page load performance check
- [ ] Internal links all working

---

## Content Guidelines

### Extension Pages (Tier 1)
**Tone:** Educational, conceptual
**Length:** 500-800 words
**Focus:** The "why" and "what"
**Includes:** Diagrams, use cases, links to guides

### Guide Pages (Tier 2)
**Tone:** Technical, instructional
**Length:** 800-1500 words
**Focus:** The "how"
**Includes:** Screenshots, step-by-step instructions, code examples

### Homepage
**Tone:** Marketing, value-driven
**Length:** Concise (200-300 words + cards)
**Focus:** Quick overview, clear CTAs

---

## Success Criteria

**Functionality:**
- ✅ Homepage displays properly with hero + extension blocks
- ✅ Each extension has a dedicated landing page
- ✅ Each extension has a Zapier implementation guide
- ✅ Navigation works smoothly (desktop + mobile)
- ✅ All internal links connect properly

**Content:**
- ✅ 3 extension landing pages (draft quality, refinable later)
- ✅ 3 Zapier guides (comprehensive setup instructions)
- ✅ Homepage with clear value proposition
- ✅ SEO basics in place (titles, descriptions)

**Technical:**
- ✅ Fast page loads (<2s)
- ✅ Mobile responsive
- ✅ Clean URLs
- ✅ Build works without errors
- ✅ Content collections functioning properly

**Design:**
- ✅ Clean, professional appearance
- ✅ Easy navigation
- ✅ Clear CTAs
- ✅ Readable typography
- ✅ Consistent styling

---

## Timeline Estimate

**Day 1:**
- Morning: Content collections setup + directory structure (1 hour)
- Afternoon: Build layouts & components (3 hours)
- Evening: Homepage implementation (2 hours)

**Day 2:**
- Morning: Write extension landing pages (3 hours)
- Afternoon: Write Zapier guides (3 hours)
- Evening: Routing, navigation, polish (2 hours)

**Total:** ~14 hours (1.5-2 days)

---

## Design Decisions

### Homepage Layout
```
┌─────────────────────────────────────┐
│           HERO SECTION              │
│  Headline: "Enhance Your Zapier..." │
│  Subheadline: [Value prop]          │
│  [Get Started CTA]                  │
└─────────────────────────────────────┘

┌──────────┐  ┌──────────┐  ┌──────────┐
│ Round    │  │ Simple   │  │ Human-in │
│ Robin    │  │ Round    │  │ the-Loop │
│ (Adv)    │  │ Robin    │  │          │
│          │  │          │  │          │
│ [Learn→] │  │ [Learn→] │  │ [Learn→] │
└──────────┘  └──────────┘  └──────────┘
```

### Extension Card Components
- Icon/visual at top
- Title (H3)
- 2-3 sentence description
- Two CTAs: "Learn More" (→ extension page) | "Get Started" (→ guide)

### Color Scheme
- Use AstroWind defaults initially
- Can customize primary colors to match EnforcedFlow brand later

---

## Key Files to Create/Modify

**New Files:**
```
src/layouts/ExtensionLayout.astro
src/layouts/GuideLayout.astro
src/components/ExtensionCard.astro
src/data/extensions/round-robin.md
src/data/extensions/simple-round-robin.md
src/data/extensions/human-in-the-loop.md
src/data/guides/zapier/round-robin.md
src/data/guides/zapier/simple-round-robin.md
src/data/guides/zapier/human-in-the-loop.md
src/pages/extensions/[...slug].astro
src/pages/guides/[platform]/[...slug].astro
```

**Modified Files:**
```
src/content/config.ts (add collections)
src/pages/index.astro (homepage)
src/components/[navigation].astro (update nav)
src/config.yaml (site metadata)
```

---

## Notes & Considerations

### Content Strategy
- Start with draft content, refine iteratively
- Focus on structure and information architecture first
- Can enhance with better copy, screenshots, diagrams later
- WordPress content can be migrated piece by piece as needed

### Technical Approach
- Use AstroWind's existing components where possible
- Leverage Tailwind for styling
- Keep it simple - premature optimization kills momentum
- Git commit after each major step

### Future Enhancements (Post Phase 1)
- Add snippet system for reusable content
- Create Tier 3 recipes (vendor-specific)
- Enhance with better visuals/diagrams
- Add search functionality
- Implement analytics
- Make.com platform guides
- Static pages (About, Terms, etc.)

---

## Blocked/Dependent Items

**Waiting on:**
- None - can start immediately

**Dependencies:**
- AstroWind template (✅ installed)
- Content collections understanding (✅ have schema)
- Extension details (✅ analyzed from current site)

---

## Next Steps

1. Exit plan mode
2. Start with Step 1: Content Collections Setup
3. Work through steps sequentially
4. Commit to git after each step
5. Review and iterate

---

**Document Version:** 1.0
**Last Updated:** October 8, 2025
**Status:** Ready to execute
