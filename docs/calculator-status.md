# All The Calculators – Calculator Status & Roadmap

This document tracks the **current status, readiness, and next steps** for each calculator.

It is intended to be:
- A progress dashboard
- A prioritisation aid
- A lightweight roadmap

This document complements:
- The Product Requirements Document (PRD)
- The Calculator Specifications document
- The Calculator Build Checklist

---

## Status definitions

Each calculator must have one of the following statuses.

### Planned
- Specification agreed
- Not yet implemented

### Built
- Calculator implemented and functional
- May require UX, copy, accessibility, or responsive polish

### Polished
- Fully meets the Calculator Page Template
- Responsive, accessible, copy-checked
- Production-ready

---

## Status overview

### Polished
- Loan repayment
- Mortgage payment

### Built
- Mortgage affordability
- Savings growth
- Savings goal
- Daily calorie needs (maintenance)
- Height converter
- Weight converter

### Planned
- Percentage calculator

---

## Finance calculators

### Loan repayment  
**Status:** Polished  

Notes:
- Core reference calculator
- Sets the standard for validation, results layout, and copy tone

---

### Mortgage payment  
**Status:** Polished  

Notes:
- Layout and copy aligned with PRD
- Strong example of calm, trustworthy financial output

---

### Mortgage affordability  
**Status:** Built  

Outstanding:
- Final copy pass
- Accessibility validation
- Confirm income multiple helper text
- Minor responsive edge-case checks

---

### Savings growth  
**Status:** Built  

Outstanding:
- Finalise results emphasis
- Copy consistency with Savings goal
- Edge-case validation (zero or very small inputs)

---

### Savings goal  
**Status:** Built  

Outstanding:
- UX polish on results framing
- Cross-link copy with Savings growth
- Final accessibility review

---

## Health calculators

### Daily calorie needs (maintenance)  
**Status:** Built  

Outstanding:
- Final copy refinement
- Accessibility validation
- Confirm result labelling hierarchy

Notes:
- NHS-style framing implemented
- Neutral, non-judgemental output maintained

---

### Height converter  
**Status:** Built  

Outstanding:
- Final copy pass
- Accessibility validation
- Confirm error message tone consistency

Notes:
- Simple, high-utility calculator
- Supports other Health tools without judgement

---

### Weight converter  
**Status:** Built  

Outstanding:
- Final copy pass
- Accessibility validation
- Confirm rounding behaviour

Notes:
- UK-first units
- Clear validation rules already implemented

---

## Everyday calculators

### Percentage calculator  
**Status:** Planned  

Notes:
- Spec locked
- First Everyday utility calculator
- Covers multiple high-intent use cases

---

## Category roadmap

### Finance
- Core set complete
- No immediate expansion planned
- “More calculators coming soon…” is intentional

### Health
- Category introduced cautiously
- Focus on neutral, informational tools
- BMI explicitly deferred

### Everyday
- Category now active
- Percentage calculator first
- Further utilities to follow (VAT, date difference, etc.)

---

## Promotion criteria (Built → Polished)

A calculator may be promoted to **Polished** when:

- All checklist items are complete
- Responsive behaviour verified at all breakpoints
- Keyboard and screen-reader access confirmed
- Copy reviewed for tone and clarity
- Results are visually prioritised without overwhelm

---

## Usage notes

- Update this file whenever a calculator changes status
- PRD changes should be reflected here where relevant
- Calculator Specifications remain the source of truth for behaviour

This file exists to make progress visible and decisions deliberate.