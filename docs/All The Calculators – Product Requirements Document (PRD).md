# All The Calculators – Product Requirements Document (PRD)  
  
## 1. Product Overview  
##   
**All The Calculators** is a UK-focused collection of fast, accessible online calculators for everyday life decisions. It is designed to function as a **practical tool**, with an emphasis on:  
* Clarity over cleverness  
* Trust over optimisation tricks  
* Usability over visual noise  
  
Targeting UK adults (25–55) and other non-technical users, it supports mobile and desktop with a calm, transparent, and responsive interface.  
  
---  
  
**2. Feature Sets**  
  
**2.1 Core Calculators**  
  
### Loan Repayment Calculator (MVP)  
* Inputs: Loan amount (£), Interest rate (%), Term (months)  
* Outputs: Monthly payment, Total interest, Total repaid  
* Notes: Explicit calculate action, clear validations  
  
### Mortgage Payment Calculator (MVP)  
* Inputs: Mortgage amount (£), Interest rate (%), Term (years)  
* Outputs: Monthly payment, Total interest, Total repaid  
* Notes: Assumes repayment mortgage, fixed interest  
  
**Savings Growth Calculator (MVP)**  
* Inputs: Starting balance (£), Monthly contribution (£), Interest rate (%), Time (years)  
* Outputs: Final balance, Total contributed, Interest earned  
* Notes: Monthly compounding; requires starting balance or contribution  
  
**Savings Goal Calculator (Next)**  
* Inputs: Target amount (£), Starting balance (£), Time (years), Interest rate (%)  
* Outputs: Required monthly contribution, Total contributed, Interest earned  
  
**Mortgage Affordability Calculator (Next)**  
* Inputs: Annual income (£), Income multiple, Deposit (£)  
* Outputs: Estimated maximum mortgage, Estimated property price  
  
**Overpayment / Early Repayment Calculator (Later)**  
* Inputs: Loan/mortgage amount, Interest rate (%), Term, Overpayment (£/month)  
* Outputs: New payoff date, Interest saved, Total reduction in repayments  
  
---  
  
**2.2 Health Calculators**  
  
**Principles:**  
* Informational, supportive, and non-judgemental  
* Provide estimates, not diagnoses or prescriptions  
* Use neutral, respectful language  
  
**BMI Calculator (Planned)**  
* Inputs: Height (cm), Weight (kg)  
* Outputs: BMI value, BMI category, Short explanation   
* Notes: Emphasise limitations; avoid value judgement  
  
**Daily Calorie Needs (Planned)**  
* Inputs: Age, Height, Weight, Sex (optional), Activity level  
* Outputs: Estimated daily calories (maintenance)  
* Notes: Estimate only, no weight loss/gain targets  
  
---  
  
**2.3 Page Layout & Navigation**  
  
**Structure:**  
* **Desktop (≥1024px):** Left sidebar (nav), Centre content (calculator), Right rail (secondary)  
* **Tablet (768–1023px):** Sidebar visible, Right rail hidden  
* **Mobile (<768px):** Content only, Sidebar via hamburger  
  
**Navigation & Content Model:**  
* Calculators grouped by category (Money, Health, Everyday, Dates & Time)  
* Each calculator is its own page, discoverable via sidebar  
  
**Right Rail (Secondary Content):**  
* Pre-ads: Popular calculators, Recently used, Contextual links  
* Post-ads: Single primary ad slot, hidden on tablet and mobile  
* Ads never interfere with form or results  
  
---  
  
**2.4 Calculator Page Template & UX**  
  
**Page Structure:**  
1. Page Title (H1, sentence case)  
2. Short Description (one sentence)  
3. Inputs Section (2×2 grid default)  
4. Primary Actions: Calculate (primary), Reset (secondary)  
5. Results Section (tinted background, labelled “Results”)  
6. “How this calculator works” explanation  
7. Disclaimer (subtle, reassuring)  
  
**Validation & Error Handling:**  
* Required fields highlighted with inline messages  
* Guardrails for unrealistic inputs (e.g., interest >100%)  
* No alerts or modal interruptions  
  
**Accessibility Requirements:**  
* Fully keyboard navigable  
* Logical tab order and visible focus states  
* Screen reader friendly  
* No colour-only information  
  
**Results Design:**  
* Calm typography, smaller numbers  
* Cards wrap based on container width (min 160px)  
* Includes short explanatory copy for each result  
  
A calculator is **done** when consistent, accessible, predictable, and feels like a **tool**.  
  
---  
  
**2.5 Supporting Features**  
  
## SEO Principles:  
* One clear H1 per page, descriptive title tags, human-readable URLs  
* Internal linking via sidebar and right rail  
* “How this works” doubles as SEO content  
* Avoid keyword stuffing; focus on clarity  
  
## Monetisation Principles (Future):  
* Ads introduced only after UX is solid  
* No ads near inputs or results  
* Trust prioritised over revenue per mille  
  
---  
  
## 3. Roadmap & Scope  
##   
## 3.1 MVP Scope  
##   
**Included Calculators:**  
* Loan repayment  
* Mortgage payment  
* Mortgage affordability  
* Savings growth  
* Savings goal  
  
**Must-Haves:**  
* Standardised calculator layout  
* Responsive and accessible UX  
* Explicit calculate/reset actions  
* Sidebar navigation + right rail placeholders  
* Deployed site  
  
**Out of Scope (MVP):**  
* Accounts or personalisation  
* Financial advice  
* Heavy analytics tracking  
  
---  
  
## 3.2 Roadmap  
  
**Now (MVP):**  
* Launch second calculator  
* Polish right rail content  
* Sitemap + deploy  
  
**Next:**  
* Expand to 5–10 calculators, fill categories  
* Mobile UX polish  
* Apply for AdSense  
  
**Later:**  
* Guides & explainers  
* Comparison calculators  
* Saved preferences & dark mode toggle  
  
---  
  
## 3.3 Definition of “Done”  
  
A calculator is complete when:  
* Fully functional on mobile, tablet, and desktop  
* Inputs are clear, validated, and forgiving  
* Results are visually prioritised and easy to understand  
* Assumptions are clearly explained  
* Navigation remains usable across breakpoints  
* The experience feels like a **tool**, not a webpage  
