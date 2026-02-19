import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const site = "https://allthecalculators.uk";

  // Core pages
  const staticPages = [
    "",
    "/about",
    "/contact",
  ];

  // Calculator routes
  const calculators = [
    // Finance
    "/calculators/apr-calculator",
    "/calculators/break-even",
    "/calculators/compound-interest",
    "/calculators/inflation-impact",
    "/calculators/loan-repayment",
    "/calculators/mortgage-payment",
    "/calculators/mortgage-affordability",
    "/calculators/net-to-gross-salary",
    "/calculators/overpayment-savings",
    "/calculators/pension-contribution",
    "/calculators/savings-growth",
    "/calculators/savings-goal",
    "/calculators/stamp-duty",
    "/calculators/take-home-salary",
    "/calculators/percentage-calculator",
    "/calculators/vat-calculator",

    // Health
    "/calculators/daily-calorie-needs",

    // Everyday
    "/calculators/height-converter",
    "/calculators/weight-converter",
    "/calculators/length-converter",
  ];

  const urls = [...staticPages, ...calculators];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `
  <url>
    <loc>${site}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === "" ? "1.0" : "0.7"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
