export const SITE_URL = "https://empirescaffolding.co.uk";
export const SITE_NAME = "Empire Scaffolding (GB) Ltd";
export const DEFAULT_IMAGE = "/logo.jpg";

export const routeMeta = [
  {
    path: "/",
    title: "Empire Scaffolding (GB) Ltd | Scaffolding Contractors Nottingham",
    description:
      "Empire Scaffolding (GB) Ltd provides safe, reliable commercial, domestic, and industrial scaffolding across Nottingham, the Midlands, and the UK.",
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

export const absoluteUrl = (path) => `${SITE_URL}${path === "/" ? "/" : path}`;
