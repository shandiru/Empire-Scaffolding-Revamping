const { existsSync } = require("node:fs");
const { run } = require("react-snap");
const packageJson = require("../package.json");

const chromeCandidates = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const puppeteerExecutablePath = chromeCandidates.find((candidate) =>
  existsSync(candidate)
);

if (puppeteerExecutablePath) {
  console.log(`react-snap using Chrome: ${puppeteerExecutablePath}`);
}

run({
  ...packageJson.reactSnap,
  puppeteerExecutablePath,
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
