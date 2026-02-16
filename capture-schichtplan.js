const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setViewport({ 
    width: 1440, 
    height: 900, 
    deviceScaleFactor: 2 
  });
  
  await page.goto('https://schichtplan-wine.vercel.app/', { 
    waitUntil: 'networkidle2', 
    timeout: 30000 
  });
  
  // Wait for animations to complete
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  await page.screenshot({ 
    path: 'public/projects/schichtplan.png', 
    type: 'png' 
  });
  
  await browser.close();
  console.log('Screenshot captured for SchichtPlan at 2880x1800');
})();
