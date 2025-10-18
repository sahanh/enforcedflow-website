# EnforcedFlow Content Strategy

**Last Updated:** October 8, 2025
**Status:** Foundation Phase

---

## Executive Summary

EnforcedFlow builds modular workflow extensions (APIs + Zapier/Make.com integrations) that complement existing software. As the business scales, we need a sustainable content strategy that balances customer education, SEO, and maintainability - all manageable by a solo founder.

**Core Challenge:** Combinatorial explosion of content (Extensions × Platforms × Vendors = hundreds of potential guides)

**Solution:** Three-tier content architecture with strategic, data-driven content creation

---

## Business Context

### The Product

- **What:** Modular workflow extensions (Human-in-the-Loop, Round Robin, etc.)
- **How:** API-first + integration platforms (Zapier, Make.com)
- **Why:** Enable hyper-personalized software workflows without custom development

### Current Extensions

1. **Human-in-the-Loop** - Approval workflows for AI/automation
2. **Round Robin (Simple)** - Basic team assignment rotation
3. **Round Robin (Advanced)** - Skill/time/priority-based routing

### Distribution Channels

- Website (hub)
- Zapier Community
- YouTube (future)
- Make.com Community (future)

---

## Three-Tier Content Architecture

### Tier 1: Core Extension Concepts

**Purpose:** Foundational understanding of each extension

**Characteristics:**

- Platform-agnostic
- Explains the "why" and "when"
- Use cases across industries
- High-level concepts

**Example:** "What is Round Robin Assignment?"

**Location:** `/extensions/round-robin`

**Frequency:** One per extension, rarely changes

**Content Includes:**

- What the extension does
- When to use it (and when not to)
- Key concepts and terminology
- Common use cases
- Links to platform guides

**Maintenance:** Update only when extension fundamentally changes

---

### Tier 2: Platform Implementation Guides

**Purpose:** How to use extension on a specific platform (generic, no vendor)

**Characteristics:**

- Platform-specific (Zapier, Make.com)
- Generic implementation patterns
- Reusable across all vendors
- Technical but accessible

**Example:** "Using Round Robin in Zapier"

**Location:** `/guides/round-robin-zapier`

**Frequency:** One per extension per platform (Round Robin × Zapier, Round Robin × Make, etc.)

**Content Includes:**

- Prerequisites and setup
- Authentication/configuration
- Available actions
- Common patterns
- Troubleshooting
- Links to Tier 1 concepts
- Links to Tier 3 recipes

**Maintenance:** Update when platform or extension changes

---

### Tier 3: Vendor-Specific Recipes

**Purpose:** Complete end-to-end examples with specific vendors

**Characteristics:**

- Highly specific (HelpScout + Round Robin + Zapier)
- Step-by-step tutorial format
- Targets long-tail SEO keywords
- Quick time-to-value

**Example:** "Distribute HelpScout Tickets with Round Robin in Zapier"

**Location:** `/recipes/round-robin/helpscout-ticket-assignment`

**Frequency:** 5-10 per extension initially, expand based on demand

**Content Includes:**

- Specific use case scenario
- Prerequisites (links to Tier 1/2)
- Step-by-step setup
- Testing instructions
- Variations
- Links to related recipes

**Maintenance:**

- Archive low-traffic recipes
- Update only high-performing ones
- 60-70% of content is links to Tier 1/2

---

## Content Creation Workflow (Solo Founder)

### Week 1-2: Foundation

1. Write Tier 1 guide for each extension
2. Write Tier 2 guide for Zapier (primary platform)
3. Create reusable snippet library

### Week 3-4: Initial Recipes (Data-Driven)

1. **Research phase:**
   - Keyword research (search volume)
   - User requests/questions
   - Zapier's most popular apps in category
   - Competitor gap analysis

2. **Scoring system for vendor selection:**
   - Search volume (1-5)
   - Customer requests (1-5)
   - Market size (1-5)
   - ICP alignment (1-5)
   - **Only create if score ≥ 12**

3. **Create 5-7 Tier 3 recipes per extension**
   - Focus on highest-scoring vendors
   - Use template for consistency

### Month 2-3: Validation

1. Monitor analytics (GA4, Search Console)
2. Track which recipes get traffic/conversions
3. Collect user feedback/questions
4. Create 3-5 more recipes based on data

### Month 4+: Amplify

1. Rewrite top 2-3 Tier 3 recipes for Zapier Community
2. Create YouTube video for #1 performing recipe
3. Add Make.com Tier 2 guides if validated demand
4. Archive low-traffic content

---

## URL Structure

```
Homepage
/                                    → All extensions overview

Extensions (Tier 1)
/extensions/round-robin              → Core concepts
/extensions/human-in-the-loop        → Core concepts
/extensions/[extension-name]         → Core concepts

Guides (Tier 2)
/guides/zapier/round-robin           → Platform implementation
/guides/zapier/human-in-the-loop     → Platform implementation
/guides/make/round-robin             → Platform implementation
/guides/[platform]/[extension]       → Platform implementation

Recipes (Tier 3)
/recipes/round-robin/helpscout-ticket-assignment
/recipes/round-robin/google-forms-lead-distribution
/recipes/human-in-the-loop/google-reviews-approval
/recipes/[extension]/[vendor-specific-use-case]

Static Pages (Later)
/about
/privacy
/terms
/contact
```

---

## Modular Content System

### The Problem

Without modularity, updating shared content requires editing dozens of files.

### The Solution

**Content Component System** - DRY (Don't Repeat Yourself)

**Structure:**

```
src/data/
├── extensions/          # Tier 1 guides
├── guides/              # Tier 2 guides
│   ├── zapier/
│   └── make/
├── recipes/             # Tier 3 recipes
│   ├── round-robin/
│   └── human-in-the-loop/
└── snippets/            # Reusable content blocks
    ├── prerequisites-zapier.md
    ├── api-key-setup.md
    ├── troubleshooting-common.md
    └── zapier-test-step.md
```

**Tier 3 Recipe Structure (60% links, 40% unique):**

```markdown
# HelpScout Round Robin in Zapier

[Brief intro - unique]

## Prerequisites

import Prerequisites from '@/snippets/prerequisites-zapier.md'

## Concept

See [Round Robin basics](/extensions/round-robin) for core concepts.

## Setup

See [Round Robin in Zapier](/guides/zapier/round-robin) for general setup.

**HelpScout-specific steps:**
[3-5 unique steps]

## Troubleshooting

import Troubleshooting from '@/snippets/troubleshooting-common.md'
```

**Benefits:**

- Update prerequisites once, propagates everywhere
- Maintain consistency across guides
- Reduce writing time for new recipes
- Easy to update when platform changes

---

## Content Lifecycle Management

### Statuses

**Evergreen** (Tier 1, Tier 2)

- Update when extension/platform changes
- Core documentation
- Maintain indefinitely

**Seasonal Review** (High-traffic Tier 3)

- Review quarterly
- Update if still driving traffic/conversions
- Keep investing

**Archive Candidate** (Low-traffic Tier 3)

- Review after 6 months
- Archive if <50 visitors/month
- Add banner: "This guide is for v1.x"
- Stop maintaining

**Archived**

- Keep online (SEO, backlinks)
- Add clear version notice
- Remove from main navigation
- No maintenance

---

## Distribution Strategy

### Website (Primary Hub)

**All content lives here first**

- Tier 1, 2, 3 content
- SEO-optimized
- Heavy internal linking
- Analytics on everything

**Success Metrics:**

- Organic traffic
- Time on page
- Internal link clicks
- Sign-up conversions

---

### Zapier Community (Selective)

**Only proven content**

- Top 20% of Tier 3 recipes (by traffic)
- Rewrite for community voice (shorter, conversational)
- Link back to website for depth
- 1-2 posts per quarter initially

**Selection Criteria:**

- 500+ monthly visitors on website
- High engagement (low bounce rate)
- Strong conversion data

**Success Metrics:**

- Community engagement
- Referral traffic to website
- Brand awareness

---

### YouTube (Most Selective)

**Only top 10% of content**

- Focus on Tier 2 guides (more evergreen)
- Top-performing Tier 3 recipes
- Use chapters (easier to update segments)
- 1 video per extension initially

**Selection Criteria:**

- 1000+ monthly visitors
- Proven conversion value
- Visual complexity warrants video

**Success Metrics:**

- Watch time
- Click-through to website
- Conversions from video traffic

---

## Technical Implementation

### Platform: Astro + AstroWind Theme

**Why Astro:**

- Content Collections (perfect for Tier 1/2/3)
- MDX support (component imports in markdown)
- Fast, SEO-optimized
- Git-based workflow
- Easy to maintain solo

**Content Collections Schema:**

```typescript
// Tier 1: Extensions
const extensionsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().optional(),
  }),
});

// Tier 2: Guides
const guidesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    platform: z.enum(['zapier', 'make']),
    extension: z.string(), // Links to extension
  }),
});

// Tier 3: Recipes
const recipesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    platform: z.enum(['zapier', 'make']),
    extension: z.string(),
    vendor: z.string(),
    estimatedTime: z.string().optional(),
    keywords: z.array(z.string()).optional(),
  }),
});
```

---

## SEO Strategy

### Internal Linking Structure

**Tier 3 → Tier 2 → Tier 1** (Upward linking)

- Every recipe links to its guide
- Every guide links to its extension concept

**Tier 1 → Tier 2 → Tier 3** (Downward linking)

- Extension pages link to all platform guides
- Platform guides link to all relevant recipes

**Benefits:**

- Distributes link equity
- Improves crawlability
- Keeps users engaged

### Keyword Strategy

**Tier 1:** Broad keywords

- "round robin assignment"
- "human in the loop automation"

**Tier 2:** Platform-specific

- "round robin zapier"
- "human in the loop zapier"

**Tier 3:** Long-tail, high-intent

- "helpscout ticket round robin zapier"
- "google forms lead distribution zapier"

---

## Metrics & Analytics

### Track Everything

- Google Analytics 4
- Google Search Console
- Hotjar/Microsoft Clarity (heatmaps)

### Key Metrics

**Content Performance:**

- Organic traffic per page
- Time on page
- Scroll depth
- Internal link clicks
- Bounce rate

**Business Metrics:**

- Sign-ups from content
- Attribution (which guides convert)
- Customer LTV by acquisition source

**Content ROI:**

- Traffic per hour invested
- Conversions per guide
- Which vendors drive most value

### Decision Framework

**Create more Tier 3 recipes if:**

- Tier 2 guide gets 500+ monthly visitors
- Multiple user requests for specific vendor
- High search volume for vendor combo

**Rewrite for Zapier Community if:**

- 500+ monthly visitors
- <40% bounce rate
- Proven conversions

**Create YouTube video if:**

- 1000+ monthly visitors
- High complexity (visual helps)
- Strong conversion data

**Archive content if:**

- <50 monthly visitors for 6 months
- Low engagement
- Extension deprecated

---

## Phased Rollout

### Phase 1: Foundation (Weeks 1-4)

**Goal:** Replicate current WordPress site + establish structure

**Deliverables:**

1. Homepage with extension blocks
2. 3 extension landing pages (Tier 1) - NEW
3. 3 implementation guides (Tier 2) - MIGRATED from WordPress
4. Content collections configured
5. Snippet system established
6. Basic navigation

**Success Criteria:**

- Site live on Astro
- Feature parity with WordPress
- Foundation for scale

---

### Phase 2: Initial Expansion (Month 2)

**Goal:** Validate Tier 3 strategy

**Deliverables:**

1. Create 15-20 Tier 3 recipes (5-7 per extension)
2. Implement analytics tracking
3. Set up search functionality
4. Create content templates

**Success Criteria:**

- Clear data on which vendors resonate
- Traffic baseline established
- Content creation workflow smooth

---

### Phase 3: Amplification (Month 3-4)

**Goal:** Cross-platform distribution

**Deliverables:**

1. Rewrite top 2-3 recipes for Zapier Community
2. Create 1-2 YouTube videos
3. Expand recipes based on data (10-15 more)
4. Add Make.com Tier 2 guides

**Success Criteria:**

- Multi-channel content presence
- Traffic growth from distribution
- Clear ROI per channel

---

### Phase 4: Optimization (Month 5-6)

**Goal:** Refine and scale

**Deliverables:**

1. Archive low-performing content
2. Double down on high-performers
3. Expand to new vendors based on data
4. Consider automation/AI for content variations

**Success Criteria:**

- Content library generating consistent traffic
- Clear playbook for new extensions
- Sustainable solo founder workflow

---

## Avoiding Common Pitfalls

### ❌ Don't Do This

**Creating all permutations upfront**

- You'll waste 80% of effort on content nobody reads

**Maintaining every piece of content forever**

- Archive aggressively, focus on winners

**Creating YouTube before website validation**

- Too much production effort for unproven content

**Using same format for all tiers**

- Tier 1 = conceptual article, Tier 3 = step-by-step recipe

**Manual content management**

- Use Content Collections, snippets, templates

---

### ✅ Do This

**Create selectively based on data**

- Keyword research → user requests → create

**Link heavily between tiers**

- Reduces duplicate content, improves SEO

**Start with one platform (Zapier)**

- Validate before expanding to Make.com

**Use templates and snippets**

- Write once, reuse everywhere

**Monitor and archive**

- Focus energy on what works

---

## Tools & Automation

### Content Creation

- **Notion/Obsidian:** Content planning
- **ChatGPT/Claude:** Generate vendor-specific variations from templates
- **Loom:** Quick video walkthroughs (repurpose for YouTube)

### Analytics

- **Google Analytics 4:** Traffic tracking
- **Google Search Console:** Keyword performance
- **Hotjar/Clarity:** User behavior
- **Spreadsheet:** Content inventory + performance

### Maintenance

- **Git/GitHub:** Version control
- **GitHub Issues:** Track content updates
- **Automated reminders:** When APIs/platforms change

---

## Content Templates

### Tier 1 Template (Extension Landing Page)

```markdown
---
title: [Extension Name]
description: One-line value prop
---

# [Extension Name]

## What is [Extension]?

[2-3 paragraphs explaining the concept]

## When to Use [Extension]

✅ Use when:

- [Use case 1]
- [Use case 2]

❌ Don't use when:

- [Non-use case 1]

## Key Concepts

- **Concept 1:** Definition
- **Concept 2:** Definition

## How It Works

[Simple diagram/explanation]

## Getting Started

- [Link to Zapier guide]
- [Link to Make.com guide]
- [Link to API docs]

## Popular Recipes

- [Link to top recipe 1]
- [Link to top recipe 2]
```

---

### Tier 2 Template (Platform Guide)

```markdown
---
title: [Extension] in [Platform]
description: Set up [extension] in [platform]
platform: zapier
extension: round-robin
---

# [Extension] in [Platform]

## Prerequisites

import Prerequisites from '@/snippets/prerequisites-[platform].md'

## Concepts

See [[Extension concepts]](/extensions/[extension])

## Installation

[Platform-specific setup steps]

## Available Actions

### Action 1: [Name]

**When to use:** [Description]
**Inputs:** [List]
**Outputs:** [List]

## Common Patterns

### Pattern 1: [Name]
```

[Workflow diagram]

```

## Troubleshooting
import Troubleshooting from '@/snippets/troubleshooting.md'

## Next Steps
[Links to Tier 3 recipes]
```

---

### Tier 3 Template (Vendor Recipe)

```markdown
---
title: [Vendor] [Use Case] with [Extension] in [Platform]
platform: zapier
extension: round-robin
vendor: helpscout
estimatedTime: "10 minutes"
keywords: [helpscout, round robin, ticket assignment]
---

# [Vendor] [Use Case] with [Extension]

## What You'll Build

[1-2 sentences describing end result]

**Time to set up:** [X minutes]

## Before You Start

- [Vendor] account
- [Extension] account
- [Platform] account

**New to [Extension]?** [Link to Tier 2]

## Use Case

**Perfect for:**

- [Scenario 1]
- [Scenario 2]

**Example:** [Real-world scenario]

## Step-by-Step Setup

### 1. [Step name]

[Instructions]
[Screenshot]

### 2. [Step name]

[Instructions]

## Testing

[How to verify it works]

## Variations

### [Variation name]

[How to modify for different use case]

## Troubleshooting

[Vendor-specific issues]

See [full troubleshooting guide](/guides/[platform]/[extension]#troubleshooting)

## What's Next?

- [Related recipe 1]
- [Related recipe 2]
```

---

## Success Criteria

### 6-Month Goals

**Traffic:**

- 5,000 monthly organic visitors
- 50+ ranking keywords
- Average 3 min time on page

**Content:**

- 3 Tier 1 guides (complete)
- 6 Tier 2 guides (2 platforms × 3 extensions)
- 30-40 Tier 3 recipes (data-driven)
- 10-15 archived (validated what doesn't work)

**Distribution:**

- 5-10 Zapier Community posts
- 2-3 YouTube videos
- Active in Make.com community

**Business:**

- 20%+ of sign-ups from organic content
- Clear attribution model
- Sustainable solo founder workflow

---

## Conclusion

This strategy balances:

- **Education:** Tiered approach meets users where they are
- **SEO:** Long-tail recipes drive targeted traffic
- **Maintainability:** Modular content reduces overhead
- **Scale:** Data-driven expansion prevents waste
- **Solo Founder:** Realistic workflow, templates, automation

**Core Principle:** Create selectively, measure everything, double down on winners, archive the rest.

---

## Quick Reference

**Starting new extension?**

1. Write Tier 1 (concept)
2. Write Tier 2 for Zapier
3. Create 5-7 Tier 3 recipes (top vendors)
4. Measure for 30 days
5. Expand based on data

**Content performing well?**

- 500+ visitors → Zapier Community
- 1000+ visitors → YouTube
- High bounce → Improve content
- Low traffic → Archive candidate

**Update needed?**

- Tier 1/2 change → All tiers inherit via links
- Snippet change → Propagates automatically
- Tier 3 broken → Fix or archive

---

**Document Version:** 1.0
**Next Review:** After Phase 1 completion
