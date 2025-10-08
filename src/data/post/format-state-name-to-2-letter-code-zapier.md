---
publishDate: 2024-10-08T00:00:00Z
title: How to Format Full State Name to 2-Letter Code in Zapier
excerpt: Learn two methods to convert state names to 2-letter codes in Zapier - using lookup tables or AI. Compare approaches and choose what works best for your workflow.
image: https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80
category: How-To
tags:
  - zapier
  - formatting
  - automation
  - workflows
metadata:
  canonical: https://enforcedflow.com/blog/format-state-name-to-2-letter-code-zapier
---

Converting full state names to 2-letter codes is a common formatting challenge in Zapier workflows. Whether you're processing form submissions, standardizing address data, or integrating with systems that require state abbreviations, you have two main approaches: lookup tables or AI.

## Option 1: Look Up Table

If the formatting is strictly for a given country (e.g., US states), it makes sense to keep the values in a structured lookup table. You have three choices:

### Method 1: Zapier Formatter

The Formatter by Zapier app includes a built-in Lookup Table utility perfect for this use case.

**Setup Steps:**

1. **Add Formatter by Zapier** to your workflow
2. **Select Action Event:** Choose "Utilities"
3. **Configure Transform:**
   - Transform: Select "Lookup Table"
   - Lookup Key: Select the state name from your previous step (e.g., "New York")
4. **Build Lookup Table:**
   Add all 50 states and their 2-letter codes:
   ```
   Alabama → AL
   Alaska → AK
   Arizona → AZ
   Arkansas → AR
   California → CA
   Colorado → CO
   Connecticut → CT
   Delaware → DE
   Florida → FL
   Georgia → GA
   ... (and so on)
   ```

**Pros:**
- No external dependencies
- Fast lookup
- Built into Zapier

**Cons:**
- Limited to ~50 entries in practice
- Manual setup required
- Single country only (would need separate lookup for Canadian provinces, etc.)
- Misspellings will cause lookup failures
- Hard to maintain if you need multiple countries

### Method 2: Zapier Tables

Zapier Tables provides a more scalable database solution for lookups.

**Setup Steps:**

1. **Navigate to Tables** in your Zapier dashboard
2. **Create New Table:** Name it "State Codes"
3. **Add Data:**
   - **Option A:** Import from CSV/Google Sheets with state data
   - **Option B:** Manually add records with columns:
     - `state_name`: Full state name
     - `state_code`: 2-letter code
4. **Use in Workflow:**
   - Add "Zapier Tables" action
   - Action: "Find Record"
   - Search field: state_name
   - Search value: [state from previous step]
   - Return: state_code

**Pros:**
- Scalable to many records
- Can be reused across multiple Zaps
- Easy to update/maintain
- Can include additional data (capitals, regions, etc.)

**Cons:**
- Requires Zapier Tables (available on paid plans)
- Initial setup time
- Still limited to single country per table
- Misspellings cause lookup failures

### Method 3: Google Sheets

For teams already using Google Sheets, this is a familiar option.

**Setup Steps:**

1. **Create Google Sheet** with two columns:
   - Column A: Full state names
   - Column B: 2-letter codes
2. **In Zapier, add "Google Sheets" action**
3. **Action:** "Lookup Spreadsheet Row"
4. **Configure:**
   - Spreadsheet: Your state codes sheet
   - Worksheet: Sheet1
   - Lookup Column: Column A (state names)
   - Lookup Value: [state from previous step]
   - Return: Column B (state codes)

**Pros:**
- Familiar interface for non-technical users
- Easy to share and update
- Can include notes, validation
- Free to use

**Cons:**
- Requires Google account
- Slower than Formatter/Tables
- Extra step to maintain
- Google Sheets API limits apply

## Option 2: Using AI

Modern AI actions can intelligently convert state names to codes without predefined lookup tables.

### AI-Powered Conversion

Use ChatGPT, OpenAI, or Zapier AI to transform state names on the fly.

**Setup with ChatGPT:**

1. **Add ChatGPT action** to your workflow
2. **Action:** "Conversation" or "Send Prompt"
3. **Prompt:**
   ```
   Convert this US state name to its 2-letter code.
   Return ONLY the 2-letter code, nothing else.

   State: [state name from previous step]
   ```

**Example with Zapier AI:**

1. **Add "AI by Zapier" action**
2. **Prompt:**
   ```
   State: {{state_name}}

   Convert the state name above to its official 2-letter postal abbreviation.
   Return only the 2-letter code.
   ```

**Pros:**
- Zero setup - no lookup tables needed
- Handles variations and misspellings better
  - "New York" → NY
  - "new york" → NY
  - "NY" → NY (already formatted)
- Works for multiple countries if you adjust prompt
- Fastest to implement

**Cons:**
- Costs AI credits/API calls
- Slight latency vs lookup
- Not 100% guaranteed (though very reliable for US states)
- May occasionally ignore format instructions
- Requires AI action available in your plan

## Which Method Should You Choose?

**Choose Lookup Table if:**
- You need guaranteed accuracy
- Processing high volumes (cheaper at scale)
- Working with a single country only
- Data is always correctly spelled
- You're on a free/lower Zapier plan

**Choose AI if:**
- Speed of setup matters
- Input data may have variations/typos
- You need flexibility for multiple countries
- You have AI credits available
- Volume is low-medium

## Hybrid Approach

For best results, combine both methods:

1. Try AI conversion first
2. Validate output length = 2 characters
3. If validation fails, fall back to lookup table
4. Log failures for review

**Example Workflow:**
```
Trigger: New Form Submission
  ↓
AI: Convert state to code
  ↓
Filter: Only continue if length = 2
  ↓
Path A (Valid): Use AI result
Path B (Invalid): Use Lookup Table fallback
  ↓
Continue workflow with state code
```

## Testing Your Implementation

Regardless of method chosen, test with:

- **Standard inputs:** "California", "New York", "Texas"
- **Lowercase:** "california", "new york"
- **Already formatted:** "CA", "NY"
- **Misspellings:** "Californa", "Newyork"
- **Edge cases:** "Washington" vs "Washington DC"

Monitor your Zap history for failures and adjust accordingly.

## Conclusion

Both lookup tables and AI are valid approaches to state code formatting in Zapier. Lookup tables offer precision and cost efficiency for high volumes, while AI provides flexibility and ease of implementation. Choose based on your workflow requirements, data quality, and available Zapier plan features.

For most use cases with clean data and single-country needs, **Zapier Formatter's Lookup Table** is the sweet spot - free, fast, and reliable. For more complex scenarios with variable inputs, **AI conversion** saves significant setup time and handles edge cases gracefully.

## Related Resources

- [Round Robin in Zapier](/guides/zapier/round-robin) - Distribute assignments across teams
- [Human-in-the-Loop in Zapier](/guides/zapier/human-in-the-loop) - Add approval workflows
- [Zapier Formatter Documentation](https://zapier.com/apps/formatter/help)
