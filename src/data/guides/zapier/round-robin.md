---
title: "Advanced Round Robin in Zapier"
description: "Set up skill-based, time-based, and priority-based task distribution in your Zapier workflows"
platform: "zapier"
extension: "round-robin"
---

## Prerequisites

Before you begin, make sure you have:
- An EnforcedFlow account ([sign up here](#))
- A Zapier account
- Basic understanding of [Round Robin concepts](/extensions/round-robin)

## Overview

The Advanced Round Robin extension for Zapier allows you to distribute tasks intelligently across your team based on skills, availability, capacity, and priority. This guide will walk you through setting up a rotation group and using it in your Zaps.

## Step 1: Create a Rotation Group

First, set up your rotation group in the EnforcedFlow dashboard.

### Navigate to Rotations
1. Log in to your EnforcedFlow dashboard
2. Click on "Rotations" in the sidebar
3. Click "New Rotation" button

### Configure Group Settings
1. **Name your rotation**: e.g., "Support Team - Technical"
2. **Choose rotation type**:
   - **Skill-based**: Route based on agent skills
   - **Weighted**: Distribute by capacity percentage
   - **Time-based**: Consider working hours
   - **Priority**: Route high-priority differently

### Add Team Members

For each team member, configure:

**Basic Information:**
- Name
- Email address
- ID (optional)

**Skills (for skill-based routing):**
- Add relevant skills/tags
- Example: "billing", "technical", "api", "beginner"

**Capacity (for weighted routing):**
- Set percentage: 50%, 30%, 20%, etc.
- Higher percentage = more assignments

**Availability (for time-based routing):**
- Working hours: e.g., 9am-5pm
- Time zone
- Days of week
- Holiday schedule (optional)

### Define Routing Rules

**Skill-based:**
- Map incoming criteria to required skills
- Example: "technical" tickets → agents with "technical" skill

**Priority-based:**
- Set rules for high-priority items
- Example: VIP customers → senior agents

**Fallback:**
- What happens if no match found?
- Assign to next available, specific person, or skip

## Step 2: Test Your Rotation

Before using in Zapier:
1. Click "Test Rotation" in dashboard
2. Run multiple tests to see distribution
3. Verify routing logic works as expected
4. Check that capacity/skills are respected

## Step 3: Connect to Zapier

### Add EnforcedFlow to Your Zap

1. In your Zap, add a new step
2. Search for "EnforcedFlow Round Robin"
3. Click to add the action

### Authenticate

1. Click "Sign in to EnforcedFlow"
2. Enter your API key ([find it here](#))
3. Click "Yes, Continue"

### Configure the Action

**Choose Action:**
- **Get Next Assignee**: Returns next person (doesn't log assignment)
- **Create Assignment**: Returns next person AND logs it

**Select Rotation:**
- Choose your rotation from dropdown
- Use the Rotation ID you created earlier

**Optional Fields:**
- **Context**: Pass additional data for skill matching
- **Priority**: Specify priority level (high, normal, low)
- **Metadata**: Custom fields to store with assignment

## Step 4: Use the Output

The Round Robin action returns:

- `assignee_email`: Email of assigned person
- `assignee_name`: Name of assigned person
- `assignee_id`: ID of assigned person
- `skills`: Skills of assigned person (if applicable)
- `assignment_id`: ID of this assignment (for tracking)

### Common Patterns

**Pattern 1: Assign Ticket**
```
Trigger: HelpScout - New Conversation
  ↓
Action: Round Robin - Get Next Assignee
  ↓
Action: HelpScout - Assign Conversation
  (Use: assignee_email from Round Robin)
```

**Pattern 2: Route Based on Skills**
```
Trigger: Typeform - New Response
  ↓
Action: Round Robin - Get Next Assignee
  (Context: form.issue_type → matches to skills)
  ↓
Action: Slack - Send Message
  (To: assignee_email from Round Robin)
```

**Pattern 3: Create Task for Assignee**
```
Trigger: Google Forms - New Response
  ↓
Action: Round Robin - Get Next Assignee
  ↓
Action: Asana - Create Task
  (Assigned to: assignee_email from Round Robin)
```

## Step 5: Monitor & Optimize

### Check Assignment History
- View all assignments in dashboard
- See distribution across team
- Identify bottlenecks or imbalances

### Adjust Routing Rules
- Update skills as team evolves
- Modify capacity percentages
- Adjust working hours
- Refine priority rules

### Analyze Performance
- Who's getting most assignments?
- Are skills being matched correctly?
- Is workload balanced?

## Advanced Configuration

### Multiple Rotations
- Create separate rotations for different teams/types
- Example: "Sales - Enterprise", "Sales - SMB", "Support - L1", "Support - L2"

### Conditional Routing
Use Zapier Paths to route to different rotations:
```
Trigger: New Lead
  ↓
Paths:
  A: If [deal_size] > $10k → Round Robin (Enterprise Team)
  B: If [deal_size] < $10k → Round Robin (SMB Team)
  ↓
Create Deal + Assign
```

### Backup Assignment
Handle no-match scenarios:
```
Action: Round Robin - Get Next Assignee
  ↓
Filter: Only continue if assignee found
  ↓
If yes: Assign normally
If no: Assign to manager/default person
```

## Troubleshooting

**No assignee returned**
- Check if rotation has active team members
- Verify working hours (if time-based)
- Ensure skills match (if skill-based)
- Check capacity isn't 0% for all members

**Wrong person assigned**
- Review rotation type and rules
- Check skill mapping
- Verify priority settings
- Test rotation in dashboard first

**Same person keeps getting assigned**
- Confirm rotation type is not "random"
- Check if only one person matches criteria
- Verify capacity settings
- Ensure rotation state isn't stuck

**API authentication issues**
- Regenerate API key in dashboard
- Reconnect in Zapier
- Check API key hasn't been revoked

## Next Steps

- **[Explore recipes](#)** - See real-world examples
- **[Advanced Round Robin concepts](/extensions/round-robin)** - Learn more
- **[API Documentation](#)** - For custom integrations

## Related Guides

- **[Simple Round Robin in Zapier](/guides/zapier/simple-round-robin)** - For basic rotation
- **[Human-in-the-Loop in Zapier](/guides/zapier/human-in-the-loop)** - Add approval steps
