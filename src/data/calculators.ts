export type CalculatorLink = {
  title: string;
  href: string;
};

export type CalculatorCategory = {
  title: string;
  items: CalculatorLink[];
  note?: string;
};

export const CALCULATOR_CATEGORIES: CalculatorCategory[] = [
  {
    title: "Finance",
    items: [
      { title: "APR calculator", href: "/calculators/apr-calculator/" },
      { title: "Compound interest", href: "/calculators/compound-interest/" },
      { title: "Loan repayment", href: "/calculators/loan-repayment/" },
      { title: "Mortgage payment", href: "/calculators/mortgage-payment/" },
      { title: "Mortgage affordability", href: "/calculators/mortgage-affordability/" },
      { title: "Net to gross salary", href: "/calculators/net-to-gross-salary/" },
      { title: "Pension contribution", href: "/calculators/pension-contribution/" },
      { title: "Savings growth", href: "/calculators/savings-growth/" },
      { title: "Savings goal", href: "/calculators/savings-goal/" },
      { title: "Take-home salary", href: "/calculators/take-home-salary/" },
    ],
  },
  {
    title: "Health",
    items: [
      { title: "Daily calorie needs", href: "/calculators/daily-calorie-needs/" },
      { title: "Height converter", href: "/calculators/height-converter/" },
      { title: "Weight converter", href: "/calculators/weight-converter/" },
    ],
  },
  {
    title: "Everyday",
    items: [
      { title: "Percentage calculator", href: "/calculators/percentage-calculator/" },
      { title: "VAT calculator", href: "/calculators/vat-calculator/" },
      { title: "Length converter", href: "/calculators/length-converter/" },
    ],
    note: "More calculators coming soon",
  },
];
