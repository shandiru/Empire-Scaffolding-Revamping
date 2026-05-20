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
    path: "/terms&condition",
    title: "Website Terms of Use | Empire Scaffolding (GB) Ltd",
    description:
      "Review the website terms of use for Empire Scaffolding (GB) Ltd, including acceptable use, liability, intellectual property, and contact details.",
    priority: "0.5",
  },
];

export const getRouteMeta = (pathname) => {
  const normalizedPath = pathname === "" ? "/" : pathname;
  return routeMeta.find((route) => route.path === normalizedPath) || routeMeta[0];
};

export const absoluteUrl = (path) => `${SITE_URL}${path === "/" ? "" : path}`;
