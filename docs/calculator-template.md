# Calculator page template (locked)

This template defines the standard structure and UI pattern for every calculator page.

It exists to ensure:
- consistency across calculators
- accessibility by default
- calm, trustworthy presentation
- predictable layout at all breakpoints

---

## Page structure (in order)

1. **Title + short description**
2. **Inputs**
3. **Primary actions**
4. **Hint / assumptions line**
5. **Divider**
6. **Results section**
7. **Divider**
8. **How this calculator works (accordion)**
9. **Disclaimer (if needed)**

---

## 1) Title + description

### Required
- **H1**: calculator name (sentence case)
- One short description sentence (plain English)
- UK context where relevant (GBP, UK terms)

### Rules
- No jargon in the description
- Description should explain what the user will get (outputs)

---

## 2) Inputs (primary task area)

### Layout rules
- Inputs are shown as a clean grid (2x2 where possible)
- Inputs stack fully when the calculator container is <450px
- Inputs are never visually “squashed”

### Required input design
- Visible labels (no placeholder-only labels)
- Clear units in label: (£), (%), (months), (years), (cm), (kg)
- Optional fields must be clearly labelled “(optional)”
- Default state is blank inputs (no pre-filled values)

---

## 3) Primary actions

### Required buttons
- **Calculate** (primary)
- **Reset** (secondary)

### Behaviour rules
- No auto-calculation on typing (explicit action required)
- Reset clears inputs and results
- Reset returns focus to the first input

---

## 4) Hint / assumptions line

A single calm line immediately under actions.

Examples:
- “Results assume fixed monthly payments.”
- “Figures are estimates and exclude fees.”

Rules:
- Not alarmist
- Not legal-heavy
- Short and readable

---

## 5) Divider

A simple horizontal divider separates inputs from results.

Rules:
- Divider should be full width within the calculator content area
- Divider is used instead of background tint containers

---

## 6) Results section (locked pattern)

### Key principle
**Results are the most important part of the page.**
They should feel first-class and easy to scan.

### Typography (locked)
- Results heading: **18px**, `font-semibold`
- Results subheading: **14px**, muted

Suggested copy:
- Heading: **Results**
- Subheading: “These are estimates based on your inputs.”

### Structure

**Results header**
- Heading: `Results`
- Supporting line: “These are estimates based on your inputs.”

**Results cards**
- Results are shown as individual cards (not wrapped in a tinted container)
- Cards align to the grid and wrap naturally
- Cards stack based on available width/min-width rules

### Results card content (standard)
Each result card should include:

1. Result label (small, uppercase, muted)
2. Result value (prominent but not oversized)
3. Supporting copy (one line, calm)

Example:
- MONTHLY PAYMENT  
  £317.53  
  Estimated repayment each month

### No tinted “results container”
- Do **not** wrap results in a grey background panel/card
- Keep the page clean using spacing + dividers

### Empty state
Before calculation:
- show placeholder values: `—`
- results section is still visible (to reinforce where output appears)

### Accessibility rules
- Results updates should be announced using `aria-live="polite"` and `aria-atomic="true"`
- No information is hidden behind hover
- Cards should not have hover states unless interactive

---

## 7) Divider

Another divider separates results from explanatory content.

---

## 8) How this calculator works (accordion)

### Required
- A short explanation in plain English
- State key assumptions and exclusions
- 1–3 short paragraphs max

### Pattern (locked)
This section must be a native accordion using `<details>` and `<summary>`:
- Collapsed by default
- Expands to show explanatory copy
- Keyboard accessible by default
- No JS required

### Chevron icon (SF-style, leading)
- Chevron appears **before** the label (left side)
- Use a simple inline SVG chevron (SF-style)
- Chevron rotates **90°** when open

Reference snippet:

```html
<details class="group">
  <summary class="flex cursor-pointer list-none items-center gap-2 py-2 text-sm font-semibold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-lg">
    <span class="inline-flex h-4 w-4 items-center justify-center text-[rgb(var(--muted))] transition-transform group-open:rotate-90" aria-hidden="true">
      <svg viewBox="0 0 20 20" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.25 4.75L12.75 10L7.25 15.25" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
    <span>How this calculator works</span>
  </summary>

  <div class="pt-2 pl-6 text-sm text-[rgb(var(--muted))]">
    <p>Explanation copy…</p>
  </div>
</details>

Rules
	•	This section is not in a card
	•	Avoid intimidating formulas unless needed
	•	This section supports SEO without feeling “SEO written”

⸻

9) Disclaimer (only when needed)
	•	Calm, non-alarmist tone
	•	Especially important for Health and Salary calculators

Example:

This calculator provides a general estimate and should not be used as financial or medical advice.

⸻

Validation & error states (applies to all calculators)

When a required field is empty
	•	Show inline error message in red
	•	Add red border to the input
	•	Error copy must be friendly and specific:
	•	“Enter a loan amount.”
	•	“Enter an interest rate.”

When a value is unrealistic
	•	Show inline error message in red
	•	Example:
	•	“Enter a realistic interest rate (0–100%).”

Accessibility
	•	Errors must be linked via aria-describedby
	•	Inputs set aria-invalid="true" when error is present