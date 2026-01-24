# All The Calculators – Calculator Specifications

This document defines the **calculator-specific behaviour, inputs, outputs, and copy** for each calculator in the product.

It should be read alongside:
- The Product Requirements Document (PRD)
- The Calculator Page Template
- The Calculator Build Checklist

This document answers **what each calculator does**, not how the site works.

---

## 1. General rules (applies to all calculators)

All calculators must:

- Follow the locked Calculator Page Template
- Use sentence case for titles
- Use plain English labels and copy
- Avoid jargon unless clearly explained
- Be UK-focused (GBP, UK conventions)
- Provide estimates, not advice
- Default to blank inputs
- Require explicit user action (“Calculate”)

---

## 2. Health principles (applies to health calculators)

Health calculators are informational only and must follow the Health principles defined in the PRD.

No health calculator should:
- Provide diagnoses
- Recommend actions
- Use judgemental language
- Frame results as goals

---

## 3. Calculator UX & behaviour conventions

These apply to **all calculators**, regardless of category.

- Results are visually prioritised over inputs
- Results appear only after user action
- Error states are inline, friendly, and non-alarming
- Copy avoids certainty (“will”, “guaranteed”)
- Assumptions are clearly stated
- Disclaimers are subtle and calm
- Keyboard and screen-reader access is required

---

## 4. Sidebar behaviour (calculator-specific)

- Calculators appear under their category
- Order reflects perceived usefulness, not launch order
- “More coming soon…” may appear as a non-interactive item
- “Popular calculators” is limited to 3 flagged items

---

## 5. Change management

Any change to:
- Inputs
- Outputs
- Copy framing
- Calculator purpose

Must be reflected in this document.

This file is the **single source of truth for calculator behaviour**.

---

# Calculator specifications

Calculator entries are grouped by category.  
New calculators should be **added to the bottom of the relevant category**.

---

## Finance calculators

### Loan repayment

**Purpose**  
Estimate monthly loan repayments, total interest, and total amount repaid for a fixed-rate loan.

#### Inputs

**Required**
- Loan amount (£)
- Interest rate (%)
- Loan term (months)

#### Outputs

- Monthly payment  
  *Estimated repayment each month*

- Total interest  
  *Interest paid over the full term*

- Total repaid  
  *Loan amount + interest*

#### Assumptions

- Fixed interest rate
- Fixed monthly payments
- No fees or early repayments

#### Notes

- Interest rate must be realistic
- Guard against extreme values
- Copy avoids the term “APR”

---

### Mortgage payment

**Purpose**  
Estimate monthly mortgage repayments and total cost based on the amount borrowed, interest rate, and term.

#### Inputs

**Required**
- Mortgage amount (£)
- Interest rate (%)
- Mortgage term (years)

#### Outputs

- Monthly payment  
  *Estimated monthly mortgage repayment*

- Total interest  
  *Interest paid over the full mortgage term*

- Total repaid  
  *Mortgage amount + interest*

#### Assumptions

- Repayment mortgage
- Fixed interest rate
- Monthly payments
- No fees, insurance, or taxes included

---

### Mortgage affordability

**Purpose**  
Estimate the maximum mortgage and property price a user may be able to afford based on income and a borrowing multiple.

#### Inputs

**Required**
- Annual income (£)
- Income multiple (×)

**Optional**
- Second income (£)
- Deposit (£)

#### Inputs copy rules

- “Income multiple (×)” helper text:  
  *e.g. 4 to 4.5×*
- Deposit is clearly optional
- Plain explanation below inputs

#### Outputs

- Maximum mortgage  
  *Based on income × borrowing multiple*

- Maximum property price  
  *Maximum mortgage + deposit*

- Total income  
  *Combined annual income*

#### Assumptions

- Based on simple income multiples
- Lending criteria varies by lender
- This is a guide, not a guarantee

---

### Savings growth

**Purpose**  
Estimate how savings could grow over time with regular contributions and interest.

#### Inputs

**Required**
- Starting balance (£)
- Monthly contribution (£)
- Interest rate (%)
- Time period (years)

#### Outputs

- Final balance  
  *Estimated value after the full period*

- Total contributions  
  *Amount added over time*

- Interest earned  
  *Growth from interest only*

#### Assumptions

- Fixed interest rate
- Monthly contributions
- Compounding applied evenly

---

### Savings goal

**Purpose**  
Estimate how much needs to be saved each month to reach a target amount within a chosen time period.

#### Inputs

**Required**
- Target amount (£)
- Time period (years)

**Optional**
- Starting balance (£)
- Interest rate (%)

#### Outputs

- Monthly contribution  
  *Amount needed each month to reach the goal*

- Total contributed  
  *Total amount saved over time*

#### Notes

- Copy clearly explains alternative use cases
- Links conceptually to Savings growth
- Emphasises flexibility (time vs contribution)

---

### Salary converter

#### Pay frequency display

Take-home pay is calculated on an **annual basis** and displayed **monthly by default**.

Users may optionally change how the take-home figure is **displayed**, without affecting the underlying calculation.

**Available display options**
- Monthly (default)
- Weekly
- Fortnightly
- Daily

---

#### Behaviour rules

- All tax and deduction calculations are performed annually
- Changing the pay frequency:
  - Updates the **take-home pay display only**
  - Does **not** recalculate tax, National Insurance, or pension figures
- Breakdown values (tax, NI, pension) remain shown as **annual amounts**

---

#### Copy rules

- Always label results as **Estimated**
- Clearly distinguish between:
  - *Calculation* (annual)
  - *Display* (monthly / weekly / etc.)

Example:
> *Estimated take-home pay (monthly)*  
> *Breakdown shown annually*

This avoids false precision and reinforces trust.

---

## Health calculators

### Daily calorie needs (maintenance)

**Purpose**  
Estimate how many calories a person may need per day to maintain their current weight, based on personal details and activity level.

#### Inputs

**Required**
- Age (years)
- Height (cm)
- Weight (kg)
- Sex (male / female)
- Activity level

#### Activity level options

- Sedentary  
  *Little or no exercise*

- Lightly active  
  *Light exercise 1–3 days per week*

- Moderately active  
  *Moderate exercise 3–5 days per week*

- Very active  
  *Hard exercise 6–7 days per week*

#### Outputs

**Primary**
- Estimated daily calorie needs (kcal)  
  *Maintenance calories*

**Secondary (context only)**
- Basal metabolic rate (BMR)  
  *Calories needed at rest*

#### Explicit exclusions

- No weight loss targets
- No weight gain targets
- No ranges or sliders
- No colour-coded judgement

#### Assumptions

- Based on a standard BMR formula
- Activity multiplier applied
- Individual needs vary

#### Health disclaimer

> This calculator provides a general estimate and should not be used as medical or nutritional advice.

---

### Height converter

**Status:** Built

**Purpose**  
Convert height between metric and UK units.

#### Inputs

Users may enter **either** format.

**Metric**
- Height (cm)

**UK**
- Height (ft)
- Height (in)

#### Outputs

- Height (cm)
- Height (ft/in)

#### Validation rules

- cm: 50–250
- ft: 1–8
- in: 0–11

#### Notes

- Inches constrained to 0–11
- Results rounded for readability

---

### Weight converter

**Status:** Built

**Purpose**  
Convert weight between metric and UK units.

#### Inputs

Users may enter **either** format.

**Metric**
- Weight (kg)

**UK**
- Weight (st)
- Weight (lb)

#### Outputs

- Weight (kg)
- Weight (st/lb)

#### Validation rules

- kg: 10–400
- st: 1–60
- lb: 0–13

#### Notes

- Pounds constrained to 0–13
- Results rounded for readability

---

## Everyday calculators

### Percentage calculator

**Status:** Planned

**Purpose**  
Answer common percentage questions, including:
- X% of Y
- Percentage increase/decrease
- What percentage X is of Y

*(See full spec to be added here when built.)*
