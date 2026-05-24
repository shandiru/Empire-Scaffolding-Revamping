export const SITE_URL = "https://empirescaffolding.co.uk";
export const SITE_NAME = "Empire Scaffolding (GB) Ltd";
export const DEFAULT_IMAGE = "/logo.jpg";

export const routeMeta = [
  {
    path: "/",
    title: "Empire Scaffolding Nottingham | Commercial & Domestic Scaffolding Services",
    description:
      "Empire Scaffolding (GB) Ltd - family-run scaffolding company based in Hucknall, Nottinghamshire. NASC accredited, CISRS-qualified team. Commercial, domestic and industrial scaffolding across the Midlands and UK. Call 0115 9641 600.",
    ogDescription:
      "NASC accredited scaffolding company based in Hucknall, Nottinghamshire. 25+ years experience. Call 0115 9641 600.",
    priority: "1.0",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Empire Scaffolding (GB) Ltd",
    description:
      "Read how Empire Scaffolding (GB) Ltd collects, uses, protects, and manages personal information in line with UK GDPR.",
    priority: "0.5",
  },
  {
    path: "/terms-and-conditions",
    title: "Terms & Conditions | Empire Scaffolding (GB) Ltd",
    description:
      "Read the Terms & Conditions for Empire Scaffolding (GB) Ltd, covering quotations, payments, customer responsibilities, liability, website use, and data protection.",
    priority: "0.5",
  },
  {
    path: "/404",
    title: "404 Page Not Found | Empire Scaffolding (GB) Ltd",
    description:
      "The page you requested could not be found. Return to Empire Scaffolding (GB) Ltd homepage or contact our team for assistance.",
    priority: "0.1",
    noindex: true,
  },
];

export const getRouteMeta = (pathname) => {
  const normalizedPath = pathname === "" ? "/" : pathname;
  return (
    routeMeta.find((route) => route.path === normalizedPath) ||
    routeMeta.find((route) => route.path === "/404") ||
    routeMeta[0]
  );
};

export const absoluteUrl = (path) => `${SITE_URL}${path === "/" ? "" : path}`;
