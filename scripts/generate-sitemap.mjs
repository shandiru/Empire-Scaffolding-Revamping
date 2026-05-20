import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { absoluteUrl, routeMeta } from "../src/seo/routeMeta.js";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(rootDir, "dist");
const today = new Date().toISOString().slice(0, 10);

const escapeXml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const urls = routeMeta
  .map(
    ({ path, priority }) => `  <url>
    <loc>${escapeXml(absoluteUrl(path))}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

await mkdir(distDir, { recursive: true });
await writeFile(join(distDir, "sitemap.xml"), sitemap, "utf8");

console.log(`Generated sitemap.xml with ${routeMeta.length} routes.`);
