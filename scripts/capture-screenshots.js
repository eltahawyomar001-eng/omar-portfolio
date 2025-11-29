const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Projects with live URLs to capture
const projectsToCapture = [
  {
    slug: 'salla-analytics',
    url: 'https://salla-analytics-production.up.railway.app/',
  },
  {
    slug: 'omar-creates',
    url: 'https://omar-creates-qo6z.vercel.app/',
  },
  {
    slug: 'showreel111',
    url: 'https://showreel111.vercel.app/',
  },
  {
    slug: 'budget-friendly-website',
    url: 'https://budget-friendly-website.vercel.app/',
  },
  {
    slug: 'travel-lap',
    url: 'https://travel-lap.vercel.app/',
  },
];

async function captureScreenshots() {
  const outputDir = path.join(__dirname, 'public', 'projects');
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🚀 Starting screenshot capture...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const project of projectsToCapture) {
    try {
      console.log(`📸 Capturing ${project.slug}...`);
      
      const page = await browser.newPage();
      
      // Set viewport to capture a nice wide screenshot
      await page.setViewport({
        width: 1440,
        height: 900,
        deviceScaleFactor: 2, // Retina quality
      });

      // Navigate to the URL
      await page.goto(project.url, {
        waitUntil: 'networkidle2',
        timeout: 30000,
      });

      // Wait a bit for any animations to settle
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Take screenshot
      const screenshotPath = path.join(outputDir, `${project.slug}.png`);
      await page.screenshot({
        path: screenshotPath,
        type: 'png',
      });

      console.log(`   ✅ Saved: ${screenshotPath}\n`);
      
      await page.close();
    } catch (error) {
      console.error(`   ❌ Failed to capture ${project.slug}: ${error.message}\n`);
    }
  }

  await browser.close();
  console.log('🎉 Screenshot capture complete!');
}

captureScreenshots().catch(console.error);
