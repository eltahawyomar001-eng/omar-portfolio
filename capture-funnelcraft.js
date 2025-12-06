const puppeteer = require("puppeteer");
const path = require("path");

async function captureScreenshot() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  // Set viewport
  await page.setViewport({
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
  });

  console.log("Navigating to FunnelCraft...");
  await page.goto("https://funnel-craft-green.vercel.app/", {
    waitUntil: "networkidle0",
    timeout: 60000,
  });

  // Wait for animations to complete
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const outputPath = path.join(__dirname, "public", "projects", "funnelcraft.png");
  
  await page.screenshot({
    path: outputPath,
    type: "png",
  });

  console.log(`Screenshot saved to: ${outputPath}`);
  await browser.close();
}

captureScreenshot().catch(console.error);
