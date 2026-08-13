---
name: grilling
description: Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to stress-test their thinking or uses any "grill" trigger phrase.
---

# Grilling

Interview the user relentlessly until reaching a shared understanding. Map the discussion as a **design tree**: every decision branches into the decisions that depend on it.

## Work in rounds

Treat the **frontier** as every decision whose prerequisites are already settled: the questions that can be asked now without guessing at answers not yet provided.

For each round:

1. Recompute the design tree from all settled decisions.
2. Identify the complete current frontier.
3. Ask every frontier question in one round.
4. Number each question and include a recommended answer.
5. Wait for the user's answers before starting the next round.

Format every question exactly as follows:

```markdown
❓ **Q1** - **<question title>**: <question body, which may include paragraphs and multiple choices>

➡️ <recommended answer>
```

Do not ask a question in the current round if its answer depends on another question that is still open in that round. Put it in a later frontier.

## Separate facts from decisions

Find facts through the available environment, filesystem, tools, and sources. Never ask the user for facts that can be discovered independently.

When a frontier question requires an unresolved fact:

1. Dispatch a sub-agent to find it when sub-agent delegation is available and authorized.
2. Treat that exploration as an unsettled prerequisite.
3. Hold only the downstream questions that depend on it.
4. Ask the rest of the current frontier immediately.

The user's role is to make decisions. Present every decision to them explicitly and wait for their answer.

## Finish deliberately

Continue until the frontier is empty: visit every branch of the design tree and leave nothing silently assumed.

Summarize the resulting shared understanding, including the settled decisions and material tradeoffs. Do not act on the plan, decision, or idea until the user explicitly confirms that the shared understanding is complete.
