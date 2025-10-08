---
title: "Human-in-the-Loop"
description: "Add review and approval steps to AI-generated content and automated workflows"
icon: "✅"
---

## What is Human-in-the-Loop?

Human-in-the-Loop is an approval workflow extension that adds a human review step to your automations. It's specifically designed for AI-powered workflows where you want to verify, approve, or reject automated outputs before they're sent or published.

Think of it as a safety checkpoint in your automation - AI generates the content, a human reviews it, and only approved items continue through the workflow.

## When to Use Human-in-the-Loop

✅ **Use when:**
- AI generates customer-facing content
- Compliance requires human verification
- Brand voice/quality must be maintained
- Legal review is needed
- High-stakes decisions require approval
- Training or auditing AI outputs

❌ **Don't use when:**
- Automation doesn't involve AI or generated content
- Approval delays are unacceptable
- Content is low-risk/internal only
- You fully trust automated outputs

## Key Features

### Review Interface
Simple, clean approval workflow:
- View generated content in context
- Approve or reject with one click
- Add comments or feedback
- Edit before approving (optional)

### Workflow Integration
Seamless Zapier integration:
- First automation generates content
- Review task created automatically
- Second automation triggered on approval
- Rejected items can trigger alternate flows

### Compliance & Audit
Track all decisions:
- Who approved/rejected
- When decisions were made
- Feedback and comments
- Complete audit trail

### Flexible Triggers
Multiple ways to handle reviews:
- Email notifications
- Slack messages
- Dashboard access
- Custom integrations

## Common Use Cases

**AI Content Review**
- Review AI-generated customer emails
- Approve social media posts before publishing
- Verify AI-written support responses
- Check automated blog content

**Customer Communication**
- Approve personalized outreach emails
- Review automated responses to reviews
- Verify AI-generated proposals
- Check templated communications

**Compliance & Legal**
- Legal review of automated contracts
- Compliance check on communications
- Brand voice verification
- Regulatory approval workflows

**Quality Assurance**
- Review AI translations
- Approve automated reports
- Check data transformations
- Verify calculations or logic

## How It Works

### Two-Workflow Setup

**Workflow 1: Generate & Create Review**
1. Trigger (new customer review, form submission, etc.)
2. AI generates response (ChatGPT, OpenAI, etc.)
3. Human-in-the-Loop creates review task
4. Reviewer receives notification

**Workflow 2: Handle Approval**
1. Trigger on Human-in-the-Loop approval
2. Filter for approved items only
3. Send/publish the content
4. Log or notify completion

### Review Process

1. **Content Generated** - AI creates the output
2. **Review Created** - Task sent to reviewer with context
3. **Human Reviews** - Reviewer sees original input + AI output
4. **Decision Made** - Approve, reject, or request changes
5. **Action Taken** - Approved items continue, rejected items stop or reroute

## Example: AI Email Response Workflow

**Scenario:** Customer leaves a negative Google review

**Workflow 1:**
1. New review triggers Zap
2. ChatGPT generates apologetic response
3. Human-in-the-Loop creates review task
4. Manager receives Slack notification

**Workflow 2:**
1. Manager approves response in review interface
2. Zap triggers on approval
3. Response posted to Google Review
4. Customer service team notified

## Getting Started

Ready to add human oversight to your automations?

- **[Set up in Zapier →](/guides/zapier/human-in-the-loop)** - Complete implementation guide
- **[View API Docs →](#)** - For custom integrations
- **[See Examples →](#)** - Real-world workflows

## Best Practices

**When to Approve vs Reject:**
- Approve: Content meets brand standards, accurate, appropriate
- Reject: Factual errors, tone issues, compliance concerns
- Request changes: Minor tweaks needed

**Response Time:**
- Set SLAs for review turnaround
- Route to backup reviewers if delayed
- Consider business hours for time-sensitive reviews

**Reviewer Assignment:**
- Use [Round Robin](/extensions/round-robin) to distribute reviews
- Assign based on expertise or domain
- Have backup reviewers for coverage

## Related Extensions

- **[Round Robin](/extensions/round-robin)** - Distribute review tasks across team
- **[Simple Round Robin](/extensions/simple-round-robin)** - Basic reviewer rotation
