# MultiColumn Component Documentation

The `MultiColumn` component provides a flexible way to organize rich text content in multiple columns with responsive behavior.

## Location

`src/components/ui/MultiColumn.astro`

## Features

- **Responsive Design**: Automatically stacks columns vertically on mobile devices
- **Flexible Ratios**: Support for equal (50/50), left-wide (60/40), and right-wide (40/60) layouts
- **Customizable Spacing**: Four gap sizes (sm, md, lg, xl)
- **Configurable Breakpoints**: Choose when columns should stack (sm, md, lg)
- **Dark Mode Compatible**: Works seamlessly with the site's dark mode
- **Prose-Friendly**: Integrates well with Tailwind's prose classes

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ratio` | `'equal'` \| `'left-wide'` \| `'right-wide'` | `'equal'` | Column width distribution |
| `gap` | `'sm'` \| `'md'` \| `'lg'` \| `'xl'` | `'md'` | Spacing between columns |
| `breakpoint` | `'sm'` \| `'md'` \| `'lg'` | `'md'` | Responsive breakpoint for stacking |
| `class` | `string` | `undefined` | Additional CSS classes |

### Gap Sizes

- `sm`: 1rem (16px)
- `md`: 2rem (32px)
- `lg`: 3rem (48px)
- `xl`: 4rem (64px)

### Breakpoints

- `sm`: 640px
- `md`: 768px (default)
- `lg`: 1024px

## Usage

### In MDX Files

Import the component at the top of your MDX file:

```mdx
---
title: "Your Page Title"
description: "Your description"
---

import MultiColumn from '~/components/ui/MultiColumn.astro';

## Your Content

<MultiColumn ratio="equal" gap="md">
  <div slot="left">
    ### Left Column

    Your left column content here.
  </div>

  <div slot="right">
    ### Right Column

    Your right column content here.
  </div>
</MultiColumn>
```

### In Astro Files

Import and use directly:

```astro
---
import MultiColumn from '~/components/ui/MultiColumn.astro';
---

<MultiColumn ratio="equal" gap="md">
  <div slot="left">
    <h3>Left Column</h3>
    <p>Your content here.</p>
  </div>

  <div slot="right">
    <h3>Right Column</h3>
    <p>Your content here.</p>
  </div>
</MultiColumn>
```

## Examples

### Equal Columns (50/50)

Perfect for balanced content presentation:

```mdx
<MultiColumn ratio="equal" gap="md">
  <div slot="left">
    ### Features
    - Feature 1
    - Feature 2
    - Feature 3
  </div>

  <div slot="right">
    ### Benefits
    - Benefit 1
    - Benefit 2
    - Benefit 3
  </div>
</MultiColumn>
```

### Left-Wide Layout (60/40)

Great for main content with sidebar:

```mdx
<MultiColumn ratio="left-wide" gap="lg">
  <div slot="left">
    ### Main Content

    This is your primary content area with more space.
    Perfect for detailed explanations, documentation, or articles.
  </div>

  <div slot="right">
    ### Quick Tips

    - Tip 1
    - Tip 2
    - Related links
  </div>
</MultiColumn>
```

### Right-Wide Layout (40/60)

Useful when emphasizing right-side content:

```mdx
<MultiColumn ratio="right-wide" gap="sm">
  <div slot="left">
    ### Stats

    - 100+ users
    - 99% uptime
    - 24/7 support
  </div>

  <div slot="right">
    ### Detailed Description

    Your main content goes here with more emphasis and space.
  </div>
</MultiColumn>
```

### With Custom Classes

```mdx
<MultiColumn ratio="equal" gap="md" class="my-8 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
  <div slot="left">
    Content here
  </div>

  <div slot="right">
    Content here
  </div>
</MultiColumn>
```

## Common Use Cases

### Documentation Layout

```mdx
<MultiColumn ratio="equal" gap="lg">
  <div slot="left">
    ### Code Example

    \`\`\`javascript
    const example = "code";
    \`\`\`
  </div>

  <div slot="right">
    ### Explanation

    This code demonstrates...
  </div>
</MultiColumn>
```

### Feature Comparison

```mdx
<MultiColumn ratio="equal" gap="md">
  <div slot="left">
    ### Before

    - Manual process
    - Time consuming
    - Error prone
  </div>

  <div slot="right">
    ### After

    - Automated
    - Fast
    - Reliable
  </div>
</MultiColumn>
```

### Guide with Sidebar

```mdx
<MultiColumn ratio="left-wide" gap="xl">
  <div slot="left">
    ## Step-by-Step Guide

    1. First step...
    2. Second step...
    3. Third step...
  </div>

  <div slot="right">
    ### Related Resources

    - [Link 1](#)
    - [Link 2](#)

    ### Need Help?

    Contact support
  </div>
</MultiColumn>
```

## Responsive Behavior

The component automatically handles responsive layouts:

- **Desktop** (above breakpoint): Two columns side-by-side
- **Mobile** (below breakpoint): Stacked vertically

The left column always appears first on mobile, followed by the right column.

## Accessibility

- Uses semantic HTML structure
- Maintains proper heading hierarchy
- Keyboard navigable
- Screen reader friendly

## Best Practices

1. **Keep content balanced**: Try to keep similar amounts of content in each column for visual harmony
2. **Use appropriate gaps**: Larger gaps for distinct sections, smaller gaps for related content
3. **Choose the right ratio**: Use equal for balanced content, wide ratios for emphasis
4. **Test on mobile**: Always check how your content stacks on smaller screens
5. **Maintain heading hierarchy**: Don't skip heading levels within columns

## Demo Page

See a live demo at `/extensions/multi-column-example` (available when draft: false)

## TypeScript Support

The component is fully typed. See `src/types.d.ts` for the `MultiColumn` interface definition.
