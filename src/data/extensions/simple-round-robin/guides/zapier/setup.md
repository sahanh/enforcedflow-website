---
title: "Simple Round Robin in Zapier"
description: "Set up basic sequential task distribution in your Zapier workflows"
platform: "zapier"
extension: "simple-round-robin"
---

## Prerequisites

Before you begin:
- EnforcedFlow account ([sign up here](#))
- Zapier account
- Basic understanding of [Simple Round Robin](/extensions/simple-round-robin)

## Overview

Simple Round Robin distributes tasks sequentially across your team: Person A → Person B → Person C → back to Person A. This guide shows you how to set it up in minutes.

## Step 1: Create Your Rotation

### In EnforcedFlow Dashboard

1. Go to **Rotations** → **New Rotation**
2. Name it: e.g., "Support Team Rotation"
3. **Select type**: Simple/Sequential
4. **Add team members** in order:
   - sarah@company.com
   - mike@company.com
   - jessica@company.com

That's it! The extension will cycle through this list automatically.

### Order Matters

The order you add team members determines rotation sequence:
- 1st person added → gets 1st assignment
- 2nd person added → gets 2nd assignment
- 3rd person added → gets 3rd assignment
- Then loops back to 1st person

## Step 2: Connect to Zapier

### Add the Action

1. In your Zap, add a new step
2. Search "EnforcedFlow Round Robin"
3. Select **Simple Round Robin** action

### Authenticate

1. Click "Sign in to EnforcedFlow"
2. Enter your API key ([find it here](#))
3. Save

### Configure

**Select your rotation:**
- Pick from dropdown (shows all your rotations)
- Or paste Rotation ID directly

**No other configuration needed!**

## Step 3: Use the Output

Simple Round Robin returns:
- `assignee_email`: Who got assigned
- `assignee_name`: Their name
- `assignee_id`: Their ID (if provided)

### Basic Workflow

```
Trigger: [Something happens]
  ↓
Action: Simple Round Robin - Get Next
  ↓
Action: [Assign/Notify/Create Task]
  (Use: assignee_email)
```

## Real-World Examples

### Example 1: Support Tickets

**Distribute HelpScout tickets:**

```
Trigger: HelpScout - New Conversation
  ↓
Action: Simple Round Robin - Get Next
  (Rotation: Support Team)
  ↓
Action: HelpScout - Assign Conversation
  (Assign to: assignee_email)
```

**Result:** Tickets automatically rotate through Sarah → Mike → Jessica

### Example 2: Lead Distribution

**Route form leads to sales reps:**

```
Trigger: Google Forms - New Response
  ↓
Action: Simple Round Robin - Get Next
  (Rotation: Sales Team)
  ↓
Action: Send Email Notification
  (To: assignee_email)
  (Subject: "New lead assigned to you")
```

**Result:** Each form submission goes to next rep in rotation

### Example 3: Task Assignment

**Create tasks in Asana:**

```
Trigger: Typeform - New Submission
  ↓
Action: Simple Round Robin - Get Next
  ↓
Action: Asana - Create Task
  (Assign to: assignee_email)
  (Name: [form response])
```

**Result:** Tasks evenly distributed across team

### Example 4: Slack Notifications

**Alert next person on duty:**

```
Trigger: Gmail - New Email (to support@)
  ↓
Action: Simple Round Robin - Get Next
  ↓
Action: Slack - Send Direct Message
  (To: assignee_email)
  (Message: "You've got a new support email")
```

## Testing Your Rotation

### Quick Test

1. Turn on your Zap
2. Trigger it 3-4 times
3. Check assignments in dashboard
4. Verify it rotated correctly

### Check Distribution

In your dashboard:
- View assignment history
- See count per team member
- Confirm fair distribution

## Modifying Your Rotation

### Add/Remove Team Members

1. Go to dashboard → Your rotation
2. Add or remove people
3. Rotation continues from current position
4. No Zap changes needed

### Reorder Team

1. Edit rotation in dashboard
2. Drag to reorder team members
3. Save
4. New order takes effect immediately

### Reset Rotation

To start over from beginning:
1. Dashboard → Your rotation
2. Click "Reset Position"
3. Next assignment goes to first person

## Tips & Best Practices

### Keep Team Size Manageable
- Works best with 3-10 people
- Larger teams → consider splitting into groups

### Document Your Order
- Note the rotation sequence somewhere
- Helps when troubleshooting
- Useful for team onboarding

### Monitor Distribution
- Check dashboard weekly
- Ensure workload stays balanced
- Adjust if someone is overwhelmed

### Handle Time Off
- Temporarily remove person from rotation
- Or create separate rotation without them
- Add back when they return

## When to Upgrade

Consider [Advanced Round Robin](/extensions/round-robin) if you need:
- Skill-based routing
- Weighted distribution (capacity-based)
- Time-based assignment (working hours)
- Priority handling

## Troubleshooting

**Same person keeps getting assigned**
- Check rotation only has one person
- Verify Zap is actually triggering multiple times
- Check dashboard for assignment history

**Rotation not working**
- Confirm Rotation ID is correct
- Verify API key is valid
- Check team members are active

**Wrong order**
- Check team member order in dashboard
- Remember: assignment follows add order
- Reorder if needed

**Starting over**
- Use "Reset Position" in dashboard
- Doesn't affect past assignments
- Just resets current position

## Next Steps

- **[Simple Round Robin concepts](/extensions/simple-round-robin)** - Learn more
- **[View recipes](#)** - Real-world examples
- **[Upgrade to Advanced](/extensions/round-robin)** - For complex needs

## Related Guides

- **[Advanced Round Robin](/guides/zapier/round-robin)** - For skill/time-based routing
- **[Human-in-the-Loop](/guides/zapier/human-in-the-loop)** - Add approval workflows
