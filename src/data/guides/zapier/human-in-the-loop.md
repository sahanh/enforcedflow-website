---
title: "Human-in-the-Loop in Zapier"
description: "Add human review and approval steps to your AI-powered Zapier workflows"
platform: "zapier"
extension: "human-in-the-loop"
---

## Prerequisites

- EnforcedFlow account ([sign up here](#))
- Zapier account
- Understanding of [Human-in-the-Loop concepts](/extensions/human-in-the-loop)
- AI/automation workflow that needs human review

## Overview

Human-in-the-Loop requires **two separate Zaps**:
1. **Zap 1**: Generate content + Create review task
2. **Zap 2**: Trigger on approval + Take action

This guide walks through both.

## How It Works

```
[Trigger]
  → [AI generates content]
  → [Create review task]
  → [Human reviews]
  → [Approval triggers Zap 2]
  → [Action taken]
```

## Step 1: Create Review Workflow (Zap 1)

### Trigger: Whatever Starts Your Process

Examples:
- New Google Review
- Form submission
- Customer email
- Social media mention

### Action 1: Generate Content (AI)

Use any AI step:
- **ChatGPT**: Generate response
- **OpenAI**: Create completion
- **Claude**: Generate text
- **Zapier AI**: Format/transform

**Example:** ChatGPT generates response to Google Review

```
Action: ChatGPT - Conversation
Input:
  - Role: "You are a helpful customer service rep"
  - User message: [Review text from trigger]
Output: AI-generated response
```

### Action 2: Create Review Task

Add EnforcedFlow Human-in-the-Loop action:

**Required Fields:**
- **Review Title**: Short description
  - Example: "Review response to [customer name]"
- **Content to Review**: The AI output
  - Use output from previous AI step
- **Reviewer Email**: Who should review
  - Static email or use [Round Robin](/guides/zapier/round-robin)
- **Context** (optional): Original input/trigger data
  - Helps reviewer make decision

**Optional Fields:**
- **Approval URL**: Custom approval page
- **Rejection URL**: Custom rejection page
- **Metadata**: Additional data to pass through

**Output:**
- `review_id`: ID of created review
- `review_url`: Link to review page

### Action 3: Notify Reviewer (Optional)

Alert the reviewer:

**Slack:**
```
Action: Slack - Send Direct Message
To: [reviewer email]
Message:
  "New review task: [review title]
   Review here: [review_url]"
```

**Email:**
```
Action: Gmail - Send Email
To: [reviewer email]
Subject: "Review Required: [review title]"
Body:
  "Please review:
   [review_url]

   Original: [trigger data]
   AI Response: [AI output]"
```

## Step 2: Create Approval Workflow (Zap 2)

### Trigger: Human-in-the-Loop Approval

1. New Zap → Add Trigger
2. Search "EnforcedFlow Human-in-the-Loop"
3. Choose "Review Approved" trigger
4. Connect account
5. Test trigger (approve a test review to see data)

**Trigger Returns:**
- `review_id`: ID of the review
- `status`: "approved" or "rejected"
- `content`: The reviewed content
- `reviewer_email`: Who approved/rejected
- `metadata`: Any custom data passed through
- `approved_at`: Timestamp

### Filter: Only Approved (Recommended)

Add a filter to only continue if approved:

```
Action: Filter
  Only continue if...
  Status | Exactly matches | approved
```

This prevents rejected items from proceeding.

### Action: Do Something with Approved Content

Now take action with the approved content:

**Post to Google Review:**
```
Action: Google My Business - Create Review Reply
Reply: [content from trigger]
```

**Send Email:**
```
Action: Gmail - Send Email
To: [customer email]
Body: [content from trigger]
```

**Publish to Social:**
```
Action: Twitter - Create Tweet
Text: [content from trigger]
```

**Create Task:**
```
Action: Asana - Create Task
Description: [content from trigger]
```

## Complete Example: Google Review Response

### Zap 1: Generate & Review

```
Trigger: Google My Business - New Review
  ↓
Action: ChatGPT - Generate Response
  (Prompt: "Write professional response to: [review text]")
  ↓
Action: Human-in-the-Loop - Create Review
  (Title: "Response to [reviewer name]")
  (Content: [ChatGPT output])
  (Reviewer: manager@company.com)
  (Context: Original review text)
  ↓
Action: Slack - Notify Manager
  (Message: "New review to approve: [review_url]")
```

### Zap 2: Post Approved Responses

```
Trigger: Human-in-the-Loop - Review Approved
  ↓
Filter: Only if status = "approved"
  ↓
Action: Google My Business - Reply to Review
  (Reply: [content from trigger])
  ↓
Action: Slack - Notify Team
  (Message: "Response posted to Google Review")
```

## Advanced Patterns

### Pattern 1: Route to Different Reviewers

Use [Round Robin](/guides/zapier/round-robin) to distribute reviews:

```
Zap 1:
  Trigger: New content
  ↓
  AI: Generate
  ↓
  Round Robin: Get next reviewer
  ↓
  Human-in-the-Loop: Create review
    (Reviewer: [Round Robin output])
```

### Pattern 2: Escalate Rejections

Handle rejected reviews differently:

```
Zap 2:
  Trigger: Review Completed
  ↓
  Paths:
    A: If approved → Post content
    B: If rejected → Notify team + Log issue
```

### Pattern 3: Edit Before Approval

Allow reviewers to modify content:

1. Enable editing in review interface
2. Zap 2 uses the edited version
3. Log changes for audit

### Pattern 4: Multi-Level Approval

Chain multiple reviews:

```
Zap 1: Content → Manager Review
Zap 2: Manager Approved → Director Review
Zap 3: Director Approved → Publish
```

### Pattern 5: Time-Based Auto-Approval

Auto-approve if not reviewed in X hours:

```
Zap 1: Create review with deadline
  ↓
Zap 3: (Scheduled) Check for pending reviews
  ↓
  Filter: Pending > 24 hours
  ↓
  Auto-approve OR Escalate
```

## Reviewer Interface

### What Reviewers See

1. **Review page** with:
   - Original context/input
   - AI-generated content
   - Approve/Reject buttons
   - Comment field (optional)
   - Edit capability (if enabled)

2. **Decision options:**
   - ✅ Approve: Triggers Zap 2
   - ❌ Reject: Stops workflow (or triggers alternate path)
   - 📝 Request changes: Send back to AI

### Review Dashboard

Reviewers can access:
- All pending reviews
- Review history
- Performance metrics
- Approval/rejection rates

## Best Practices

### Review Assignment

**Single reviewer:**
- Use for small teams
- Assign based on expertise
- Clear ownership

**Team rotation:**
- Use [Round Robin](/guides/zapier/round-robin)
- Distribute workload
- Provide coverage

**Backup reviewers:**
- Handle delays/time-off
- Escalate if not reviewed in X hours
- Ensure continuity

### Response Time

**Set expectations:**
- SLA for review turnaround
- Business hours consideration
- Urgent vs normal priority

**Monitor metrics:**
- Average review time
- Approval/rejection rate
- Bottlenecks

### Content Quality

**Provide context:**
- Include original trigger data
- Show AI prompt used
- Give reviewers full picture

**Clear guidelines:**
- When to approve
- When to reject
- When to edit

**Training:**
- Onboard new reviewers
- Share examples
- Document standards

## Troubleshooting

**Reviews not creating**
- Check API key is valid
- Verify reviewer email is correct
- Test with simple content first

**Zap 2 not triggering**
- Ensure trigger is set to correct account
- Check filter isn't blocking approved items
- Verify webhook connection

**Reviewer not receiving notifications**
- Check Slack/email action is after review creation
- Verify reviewer email/Slack ID is correct
- Check notification isn't in spam

**Approved content not posting**
- Review Filter settings in Zap 2
- Check API permissions for posting action
- Verify content format is correct

## Monitoring & Analytics

### Track in Dashboard
- Total reviews created
- Approval vs rejection rate
- Average review time
- Top reviewers

### Zapier Metrics
- Zap success rate
- Error tracking
- Task usage

### Custom Logging
Add logging step in Zap 2:
```
Action: Google Sheets - Add Row
  (Log: review_id, status, reviewer, timestamp)
```

## Next Steps

- **[Human-in-the-Loop concepts](/extensions/human-in-the-loop)** - Learn more
- **[Round Robin for reviewers](/guides/zapier/round-robin)** - Distribute reviews
- **[View recipes](#)** - Real-world examples

## Related Guides

- **[Round Robin](/guides/zapier/round-robin)** - Distribute review tasks
- **[Simple Round Robin](/guides/zapier/simple-round-robin)** - Basic reviewer rotation
